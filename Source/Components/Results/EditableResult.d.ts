/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="Result.d.ts" />
/// <reference path="../Palettes/Palettes.d.ts" />

declare module SpriteMakr.Components.Results {
    /**
     * Properties for an EditableResult component.
     */
    export interface IEditableResultProps extends IResultProps {
        /**
         * Possible palettes sprites may choose pixels from.
         */
        palettes: Palettes.IPalettes;
    }

    /**
     * State for an EditableResult component.
     */
    export interface IEditableResultState extends IResultState {
        /**
         * The currently selected palette.
         */
        selectedPalette: Palettes.IPalette;
    }
}
