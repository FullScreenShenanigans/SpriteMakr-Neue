/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

declare module SpriteMakr.Components.Results {
    /**
     * Data representation of a single sprite.
     */
    export interface ISpriteInfo {
        /**
         * Numeric width of the sprite (by default, 1).
         */
        height?: number;

        /**
         * The sprite as a PixelRendr sprite, if known.
         */
        imageConverted?: string;

        /**
         * The visible name of the sprite.
         */
        name?: string;

        /**
         * Numeric height of the sprite (by default, 1).
         */
        width?: number;
    }

    /**
     * Properties for a Result component.
     */
    export interface IResultProps {
        /**
         * The default height for results.
         */
        defaultHeight?: number;

        /**
         * The default width for results.
         */
        defaultWidth?: number;

        /**
         * A unique id for this result (identical to key).
         */
        id: any;

        /**
         * Some starting sprite information, if available.
         */
        initialSpriteInfo?: ISpriteInfo;

        /**
         * A unique id for this result (identical to id).
         */
        key: any;

        /**
         * Allowd palettes for the sprite.
         */
        palettes: Palettes.IPalettes;

        /**
         * For editable results, a message passer to indicate a change.
         */
        reportChanges?: (props: Results.IResultProps) => void;

        /**
         * How much to expand sprites into pixels.
         */
        scalingFactor: number;

        /**
         * The initial selected palette used for pixel colors.
         */
        selectedPalette: Palettes.IPalette;
    }

    /**
     * State for a Result component.
     */
    export interface IResultState {
        /**
         * Whether the top-right button is being hovered over.
         */
        buttonHovering?: boolean;

        /**
         * The chosen palette to display images from.
         */
        palette: Palettes.IPalette;

        /**
         * Representation of the contained sprite.
         */
        spriteInfo: ISpriteInfo;
    }
}
