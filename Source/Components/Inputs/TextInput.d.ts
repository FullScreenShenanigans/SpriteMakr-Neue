/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="SimpleInput.d.ts" />

declare module SpriteMakr.Components.Inputs {
    /**
     * Properties for a TextInput component.
     */
    export interface ITextInputProps extends ISimpleInputProps<string> {
        /**
         * Pattern attribute to restrict the allowed value. 
         */
        pattern?: string;

        /**
         * Placeholder display for the input.
         */
        placeholder?: string;
    }

    /**
     * State for a TextInput component.
     */
    export interface ITextInputState extends ISimpleInputState<string> { }
}
