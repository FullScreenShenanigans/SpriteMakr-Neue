/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="SimpleInput.d.ts" />

declare module SpriteMakr.Components.Inputs {
    /**
     * Properties for a SelectInput component.
     */
    export interface ISelectInputProps extends ISimpleInputProps<string> {
        /**
         * Allowed options to choose from.
         */
        options: string[];
    }

    /**
     * State for a SelectInput component.
     */
    export interface ISelectInputState extends ISimpleInputState<string> { }
}
