/// <reference path="require.d.ts" />

/// <reference path="RequireAll.d.ts" />

module RequireAll {
    "use strict";

    /**
     * Loading status for a requirement.
     */
    export enum Status {
        /**
         * The requirement has not yet started to load.
         */
        NotStarted,

        /**
         * The requirement has started to load.
         */
        Started,

        /**
         * The requirement failed to load.
         */
        Errored,

        /**
         * The requirement successfully loaded.
         */
        Loaded
    }


    /* Storage */

    /**
     * Summary of requirement information and load status for a file.
     */
    export class Requirement implements IRequirement {
        /**
         * The name of the file to load.
         */
        alias: string;

        /**
         * The full path to the file to load.
         */
        path: string;

        /**
         * Any additional requirements to load before the file.
         */
        requires: IRequirements;

        /**
         * Loading status of the file.
         */
        status: Status;

        /**
         * Initializes a new instance of the Requirement class.
         * 
         * @param alias   The name of the file to load. 
         * @param path   The full path to the file to load.
         * @param requires   Any additional requirements to load before the file.
         */
        constructor(alias: string, path: string = alias, requires: IRequirements = {}) {
            this.alias = alias;
            this.path = path;
            this.requires = requires;
            this.status = Status.NotStarted;
        }
    }


    /* Loading */

    /**
     * Pending and completed requirements, keyed by alias.
     */
    export var requirements: IRequirements = {};
    
    /**
     * Marks any number of file requirements and real paths for later loading.
     * 
     * @param requirements   Settings for loading the files.
     * @returns The equivalent marked requirement settings for the requirements.
     */
    export function markRequirements(...requirements: IRequireSettings[]): IRequirement[] {
        return requirements.map((requirement: IRequireSettings) => this.markRequirement(requirement));
    }

    /**
     * Marks a file's requirements and real path for later loading.
     * 
     * @param settings   Settings for loading the file. 
     * @returns The pending requirement settings.
     * @returns The marked requirement settings.
     * @remarks If the alias was already marked, any new requirements are added.
     *          Path will not be overriden.
     */
    export function markRequirement(requirement: IRequireSettings): IRequirement {
        var alias: string = requirement.alias || requirement.path;
        
        // If the requirement hasn't yet been marked, add a new entry
        if (!requirements[alias]) {
            return requirements[alias] = new Requirement(
                alias,
                requirement.path,
                convertRawRequirementsToObject(requirement.requires || []));
        }

        // If it did exist, merge any new settings onto the old entry's if needed 
        requirements[alias].path = requirement.path || requirements[alias].path;
        if (requirement.requires) {
            addRawRequirementsToObject(requirement.requires, requirements[alias].requires);
        }

        return requirements[alias];
    }

    /**
     * Loads a set of files. If any previously marked any requirements, those are loaded first.
     * 
     * @param alias   Name(s) of file(s) to load.
     * @param onComplete   Handler callback for successful loading. 
     * @param onError   Handler callback for an error in loading.
     * @returns The pending requirement settings.
     */
    export function require(aliases: string | string[], onComplete: ICallback, onError: ICallback): IRequirement[] {
        if (typeof aliases === "string" || aliases instanceof "".constructor) {
            aliases = [aliases as string];
        }
        
        return (aliases as string[]).map((alias: string) => requireAlias(alias, onComplete, onError));
    }
    
    /**
     * Loads a file. If it previously marked any requirements, those are loaded first.
     * 
     * @param alias   The name of the file to load.
     * @param onComplete   Handler callback for successful loading. 
     * @param onError   Handler callback for an error in loading.
     * @returns The pending requirement settings.
     */
    function requireAlias(alias: string, onComplete: ICallback, onError: ICallback): IRequirement {
        var requirement: IRequirement = requirements[alias],
            requires: IRequirement[] = [],
            dependency: IRequirement,
            i: string;

        // If the requirement doesn't yet exist, create it 
        if (!requirement) {
            requirement = markRequirement({
                alias,
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
    function requireDependencies(requirement: IRequirement, requires: IRequirement[], onComplete: ICallback, onError: ICallback): void {
        var remaining: number = requires.length,
            onRequirementComplete: () => void = (): void => {
                remaining -= 1;
                if (remaining === 0) {
                    callRequireJs(requirement, onComplete, onError);
                }
            };

        requires.forEach((dependency: IRequirement): void => {
            require(
                dependency.alias,
                onRequirementComplete,
                (): void => console.error(`Cannot load '${requirement.alias}' because dependency '${dependency.alias}' errored.`))
        });
    }

    /**
     * Calls requirejs on a file with callbacks to set its status on completion or error. 
     * 
     * @param requirement   Summary of the file to require.
     * @param onComplete   Handler callback for successful loading. 
     * @param onError   Handler callback for an error in loading.
     */
    function callRequireJs(requirement: IRequirement, onComplete?: ICallback, onError?: ICallback): void {
        requirejs(
            [requirement.path],
            (): void => {
                requirement.status = Status.Loaded;
                if (onComplete) {
                    onComplete(requirement);
                }
            },
            (): void => {
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
    function safelyGetRequirement(alias: string): IRequirement {
        if (!requirements[alias]) {
            requirements[alias] = new Requirement(alias);
        }

        return requirements[alias];
    }

    /**
     * Converts a listing of raw requirements to a mapping of aliases to information.
     * 
     * @param rawRequirements   Raw requirements to convert. 
     * @returns The requirements as a mapping of aliases to information.
     */
    function convertRawRequirementsToObject(rawRequirements: string[]): any {
        var output: any = {};

        rawRequirements
            .map((alias: string): IRequirement => safelyGetRequirement(alias))
            .forEach((requirement: IRequirement): void => {
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
    function addRawRequirementsToObject(rawRequirements: string[], requirements: IRequirements): void {
        rawRequirements
            .map((rawRequirement: string): IRequirement => safelyGetRequirement(rawRequirement))
            .forEach((requirement: IRequirement): void => {
                requirements[requirement.alias] = requirement;
            });
    }
}
