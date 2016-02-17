/// <reference path="require.d.ts" />

/// <reference path="RequireAll.ts" />

declare module RequireAll {
    /**
     * Optional settings for loading a file.
     */
    export interface IRequireSettings {
        /**
         * The name of the file to load (by default, the path). 
         */
        alias?: string;
        
        /**
         * The full path to the file.
         */
        path: string;
        
        /**
         * Any additional files to load before this one.
         */
        requires?: string[];
    }

    /**
     * Summary of requirement information and load status for a file.
     */
    export interface IRequirement {
        /**
         * How to identify the file (by default, the path).
         */
        alias: string;
        
        /**
         * The full path to the file.
         */
        path: string;
        
        /**
         * Any additional files to load before this one.
         */
        requires: IRequirements;
        
        /**
         * Loading status for the file.
         */
        status: Status;
    }

    /**
     * Requirements, keyed by alias.
     */
    export interface IRequirements {
        [i: string]: IRequirement;
    }

    /**
     * A handler callback for when loading completes.
     * 
     * @param requirement   The loaded (or errored) requirement.
     */
    export interface ICallback {
        (requirement: IRequirement): void;
    }
}
