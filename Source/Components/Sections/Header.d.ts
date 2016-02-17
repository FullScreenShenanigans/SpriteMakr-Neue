/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="../Inputs/Button.tsx" />

declare module SpriteMakr.Components {
    /**
     * Properties for a Header component.
     */
    export interface IHeaderProps {
        /**
         * Textual content to display in the header.
         */
        text: string;

        /**
         * Properties for any number of buttons to display in the header.
         */
        buttons?: Inputs.IButtonProps[];
    }
}
