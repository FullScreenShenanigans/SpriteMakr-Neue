/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="SimpleInput.d.ts" />

declare module SpriteMakr.Components.Inputs {
    /**
     * Properties for a TextInput component.
     */
    export interface INumberInputProps extends ISimpleInputProps<number> {
        /**
         * Maximum value for the component.
         */
        max?: number;

        /**
         * Minimum value for the component.
         */
        min?: number;
    }

    /**
     * State for a TextInput component.
     */
    export interface INumberInputState extends ISimpleInputState<number> { }
}
