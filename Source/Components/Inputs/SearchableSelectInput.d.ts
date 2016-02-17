/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="SelectInput.d.ts" />

declare module SpriteMakr.Components.Inputs {
    /**
     * State for a SelectInput component.
     */
    export interface ISearchableSelectInputState extends ISimpleInputState<string> {
        /**
         * User-provided search to filter the elements by.
         */
        filter: string;
    }
}
