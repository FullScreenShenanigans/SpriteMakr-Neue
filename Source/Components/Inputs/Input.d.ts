/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="Icons/Icon.tsx" />

declare module SpriteMakr.Components.Inputs {
    /**
     * Common measurements for width and height.
     */
    export interface ISize {
        /**
         * Numeric height.
         */
        width: number;

        /**
         * Numeric width.
         */
        height: number;
    }

    /**
     * Component classes for icons, keyed by string alias.
     */
    export interface IIconClasses {
        [i: string]: typeof Icons.Icon;
    }

    /**
     * Properties for an Input component.
     */
    export interface IInputProps {
        /**
         * Handler for the user starting to hover over the input.
         */
        onHoverEnd?: React.MouseEventHandler;

        /**
         * Handler for the user starting to hover over the input.
         */
        onHoverStart?: React.MouseEventHandler;
    }

    /**
     * State for an Input component.
     */
    export interface IInputState {
        /**
         * Whether this is currently being hovered over.
         */
        hovering?: boolean;
    }
}
