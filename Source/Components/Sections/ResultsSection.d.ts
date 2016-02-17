/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="Section.d.ts" />
/// <reference path="../Results/FinalResult.d.ts" />

declare module SpriteMakr.Components.Sections {
    /**
     * @todo This...
     */
    export type IResultSummaries = any;

    /**
     * Properties for an ResultsSection component.
     */
    export interface IResultsSectionProps extends ISectionProps {
        /**
         * Handler for when the section requests to reset contents.
         */
        onResetContents: () => void;

        /**
         * All final results.
         */
        results: Components.Results.IFinalResultProps[];
    }

    /**
     * State for a ResultsSection component.
     */
    export interface IResultsSectionState extends ISectionState { }
}
