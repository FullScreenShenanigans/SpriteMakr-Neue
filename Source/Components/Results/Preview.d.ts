/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="../Palettes/Palettes.d.ts" />

/// <reference path="Preview.tsx" />

declare module SpriteMakr.Components.Results {
    /**
     * Properties for a Preview component.
     */
    export interface IPreviewProps {
        /**
         * Numeric width of the sprite (by default, 1).
         */
        height?: number;

        /**
         * The sprite as a PixelRendr sprite, if known.
         */
        imageConverted?: string;

        /**
         * The chosen palette to display images from.
         */
        palette: Palettes.IPalette;

        /**
         * How much to expand sprites into pixels.
         */
        scalingFactor: number;

        /**
         * Numeric height of the sprite (by default, 1).
         */
        width?: number;
    }

    /**
     * State for a Preview component.
     */
    export interface IPreviewState {
        /**
         * Rendering status for the canvas.
         */
        status: Status;
    }
}
