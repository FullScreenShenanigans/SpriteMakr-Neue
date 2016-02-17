/// <reference path="References/react.d.ts" />
/// <reference path="References/react-dom.d.ts" />
/// <reference path="References/react-global.d.ts" />

/// <reference path="Components/Palettes/Palettes.d.ts" />

declare module SpriteMakr {
    /**
     * State for a SpriteMakr component.
     */
    export interface ISpriteMakrState {
        /**
         * Default height for all results.
         */
        defaultHeight: number;

        /**
         * Default width for all results.
         */
        defaultWidth: number;

        /**
         * Known color palettes sprites may be within.
         */
        palettes: Components.Palettes.IPalettes;

        /**
         *
         */
        results: Components.Results.IResultProps[];

        /**
         * How much to expand sprites into pixels.
         */
        scalingFactor: number;
    }
}
