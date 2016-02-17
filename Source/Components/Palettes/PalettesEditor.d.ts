/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="Palettes.d.ts" />

declare module SpriteMakr.Components.Palettes {
    /**
     * Properties for a PalettesEditor component.
     */
    export interface IPalettesEditorProps {
        /**
         * Callback to report that palettes have changed.
         * 
         * @param palettes   The new palettes.
         */
        onReportChanges: (palettes: IPalettes) => void;

        /**
         * Given palettes to be edited.
         */
        palettes: Palettes.IPalettes;

        /**
         * The initially selected palette.
         */
        selectedPalette: Palettes.IPalette;
    }

    /**
     * State for a PalettesEditor component.
     */
    export interface IPalettesEditorState {
        /**
         * Palettes being edited, as their most current versions.
         */
        palettes: Palettes.IPalettes;

        /**
         * The index of the currently selected color with in its palette.
         */
        selectedColor?: number;

        /**
         * The currently selected palette.
         */
        selectedPalette: Palettes.IPalette;
    }
}
