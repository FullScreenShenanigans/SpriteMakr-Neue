/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

declare module SpriteMakr.Components.Palettes {
    /**
     * Properties for a Color component.
     */
    export interface IColorProps {
        red: number;
        green: number;
        blue: number;
        alpha: number;
        onClick?: React.MouseEventHandler;
        selected?: boolean;
    }
}
