/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

declare module SpriteMakr.Components.Palettes {
    /**
     * Description of an RGBA color.
     */
    export type IColor = [number, number, number, number];

    /**
     * Description of an in-game palette.
     */
    export interface IPalette {
        /**
         * Ordered colors contained in the palette.
         */
        colors: IColor[];

        /**
         * A friendly name for the palette.
         */
        name: string;
    }

    /**
     * A collection of palettes, keyed by name.
     */
    export interface IPalettes {
        [i: string]: IPalette;
    }
}
