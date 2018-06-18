/// <reference path="require.d.ts" />
/// <reference path="RequireAll.d.ts" />
var RequireAll;
(function (RequireAll) {
    "use strict";
    /**
     * Loading status for a requirement.
     */
    var Status;
    (function (Status) {
        /**
         * The requirement has not yet started to load.
         */
        Status[Status["NotStarted"] = 0] = "NotStarted";
        /**
         * The requirement has started to load.
         */
        Status[Status["Started"] = 1] = "Started";
        /**
         * The requirement failed to load.
         */
        Status[Status["Errored"] = 2] = "Errored";
        /**
         * The requirement successfully loaded.
         */
        Status[Status["Loaded"] = 3] = "Loaded";
    })(Status = RequireAll.Status || (RequireAll.Status = {}));
    /* Storage */
    /**
     * Summary of requirement information and load status for a file.
     */
    var Requirement = /** @class */ (function () {
        /**
         * Initializes a new instance of the Requirement class.
         *
         * @param alias   The name of the file to load.
         * @param path   The full path to the file to load.
         * @param requires   Any additional requirements to load before the file.
         */
        function Requirement(alias, path, requires) {
            if (path === void 0) { path = alias; }
            if (requires === void 0) { requires = {}; }
            this.alias = alias;
            this.path = path;
            this.requires = requires;
            this.status = Status.NotStarted;
        }
        return Requirement;
    }());
    RequireAll.Requirement = Requirement;
    /* Loading */
    /**
     * Pending and completed requirements, keyed by alias.
     */
    RequireAll.requirements = {};
    /**
     * Marks any number of file requirements and real paths for later loading.
     *
     * @param requirements   Settings for loading the files.
     * @returns The equivalent marked requirement settings for the requirements.
     */
    function markRequirements() {
        var _this = this;
        var requirements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            requirements[_i] = arguments[_i];
        }
        return requirements.map(function (requirement) { return _this.markRequirement(requirement); });
    }
    RequireAll.markRequirements = markRequirements;
    /**
     * Marks a file's requirements and real path for later loading.
     *
     * @param settings   Settings for loading the file.
     * @returns The pending requirement settings.
     * @returns The marked requirement settings.
     * @remarks If the alias was already marked, any new requirements are added.
     *          Path will not be overriden.
     */
    function markRequirement(requirement) {
        var alias = requirement.alias || requirement.path;
        // If the requirement hasn't yet been marked, add a new entry
        if (!RequireAll.requirements[alias]) {
            return RequireAll.requirements[alias] = new Requirement(alias, requirement.path, convertRawRequirementsToObject(requirement.requires || []));
        }
        // If it did exist, merge any new settings onto the old entry's if needed 
        RequireAll.requirements[alias].path = requirement.path || RequireAll.requirements[alias].path;
        if (requirement.requires) {
            addRawRequirementsToObject(requirement.requires, RequireAll.requirements[alias].requires);
        }
        return RequireAll.requirements[alias];
    }
    RequireAll.markRequirement = markRequirement;
    /**
     * Loads a set of files. If any previously marked any requirements, those are loaded first.
     *
     * @param alias   Name(s) of file(s) to load.
     * @param onComplete   Handler callback for successful loading.
     * @param onError   Handler callback for an error in loading.
     * @returns The pending requirement settings.
     */
    function require(aliases, onComplete, onError) {
        if (typeof aliases === "string" || aliases instanceof "".constructor) {
            aliases = [aliases];
        }
        return aliases.map(function (alias) { return requireAlias(alias, onComplete, onError); });
    }
    RequireAll.require = require;
    /**
     * Loads a file. If it previously marked any requirements, those are loaded first.
     *
     * @param alias   The name of the file to load.
     * @param onComplete   Handler callback for successful loading.
     * @param onError   Handler callback for an error in loading.
     * @returns The pending requirement settings.
     */
    function requireAlias(alias, onComplete, onError) {
        var requirement = RequireAll.requirements[alias], requires = [], dependency, i;
        // If the requirement doesn't yet exist, create it 
        if (!requirement) {
            requirement = markRequirement({
                alias: alias,
                path: alias
            });
        }
        requirement.status = Status.Started;
        // Find all requirements that haven't successfully loaded
        for (i in requirement.requires) {
            if (requirement.requires.hasOwnProperty(i) && requirement.requires[i].status !== Status.Loaded) {
                requires.push(requirement.requires[i]);
            }
        }
        // If all requirements have successfully loaded, call requirejs immediately
        if (requires.length === 0) {
            callRequireJs(requirement, onComplete, onError);
            return;
        }
        // Since some requirements haven't yet loaded, load them first
        requireDependencies(requirement, requires, onComplete, onError);
    }
    /**
     * Loads a file's dependencies. If and when they all successfully load, the file is loaded.
     *
     * @param requirement  Summary of the file whose dependencies are being loaded.
     * @param requires   File requirements to load.
     * @param onComplete   Handler callback for successful loading.
     * @param onError   Handler callback for an error in loading.
     */
    function requireDependencies(requirement, requires, onComplete, onError) {
        var remaining = requires.length, onRequirementComplete = function () {
            remaining -= 1;
            if (remaining === 0) {
                callRequireJs(requirement, onComplete, onError);
            }
        };
        requires.forEach(function (dependency) {
            require(dependency.alias, onRequirementComplete, function () { return console.error("Cannot load '" + requirement.alias + "' because dependency '" + dependency.alias + "' errored."); });
        });
    }
    /**
     * Calls requirejs on a file with callbacks to set its status on completion or error.
     *
     * @param requirement   Summary of the file to require.
     * @param onComplete   Handler callback for successful loading.
     * @param onError   Handler callback for an error in loading.
     */
    function callRequireJs(requirement, onComplete, onError) {
        requirejs([requirement.path], function () {
            requirement.status = Status.Loaded;
            if (onComplete) {
                onComplete(requirement);
            }
        }, function () {
            requirement.status = Status.Errored;
            if (onError) {
                onError(requirement);
            }
        });
    }
    /* Utilities */
    /* Todo: consider moving into Requirement class */
    /**
     * Retrieves a requirement by alias. If it doesn't exist, it's created.
     *
     * @param alias   The name of the requirement to retrieve.
     * @returns   The requirement under the alias.
     */
    function safelyGetRequirement(alias) {
        if (!RequireAll.requirements[alias]) {
            RequireAll.requirements[alias] = new Requirement(alias);
        }
        return RequireAll.requirements[alias];
    }
    /**
     * Converts a listing of raw requirements to a mapping of aliases to information.
     *
     * @param rawRequirements   Raw requirements to convert.
     * @returns The requirements as a mapping of aliases to information.
     */
    function convertRawRequirementsToObject(rawRequirements) {
        var output = {};
        rawRequirements
            .map(function (alias) { return safelyGetRequirement(alias); })
            .forEach(function (requirement) {
            output[requirement.alias] = requirement;
        });
        return output;
    }
    /**
     * Adds raw requirements to a pre-existing listing of requirements.
     *
     * @param rawRequirements   Raw requirements to convert.
     * @param requirements   A pre-existing listing of requirements.
     */
    function addRawRequirementsToObject(rawRequirements, requirements) {
        rawRequirements
            .map(function (rawRequirement) { return safelyGetRequirement(rawRequirement); })
            .forEach(function (requirement) {
            requirements[requirement.alias] = requirement;
        });
    }
})(RequireAll || (RequireAll = {}));
