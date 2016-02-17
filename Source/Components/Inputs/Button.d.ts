/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="Input.d.ts" />

declare module SpriteMakr.Components.Inputs {
    /**
     * Properties for a Button component.
     */
    export interface IButtonProps extends IInputProps {
        /**
         * Icon to display in the button.
         */
        icon?: string;

        /**
         * Handler for the user activating the button.
         */
        onActivate?: React.EventHandler<React.SyntheticEvent>;

        /**
         * Textual content to display in the button.
         */
        text?: string;
    }
}
