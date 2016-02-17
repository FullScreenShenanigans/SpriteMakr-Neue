/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="Header.d.ts" />

/// <reference path="Section.tsx" />
/// <reference path="../Results/Result.d.ts" />

declare module SpriteMakr.Components.Sections {
    /**
     * Properties for an EditorSection component.
     */
    export interface IEditorSectionProps extends ISectionProps {
        /**
         * Default height for all results.
         */
        defaultHeight: number;

        /**
         * Default width for all results.
         */
        defaultWidth: number;

        /**
         * Handler for when the edited sprite should be added.
         * 
         * @param result   The sprite information.
         */
        onAdd: (result: Results.IResultProps) => void;

        /**
         * Known color palettes sprites may be within.
         */
        palettes: Components.Palettes.IPalettes;

        /**
         * How much to expand sprites into pixels.
         */
        scalingFactor: number;
    }

    /**
     * State for an EditorSection component.
     */
    export interface IEditorSectionState extends ISectionState {
        /**
         * Default height for all results.
         */
        defaultHeight: number;

        /**
         * Default width for all results.
         */
        defaultWidth: number;

        /**
         * A unique id for this editor session state.
         */
        key: any;

        /**
         * Known color palettes sprites may be within.
         */
        palettes: Components.Palettes.IPalettes;

        /**
         * The most recently communicated editable result state.
         */
        result?: Results.IResultProps;

        /**
         * How much to expand sprites into pixels.
         */
        scalingFactor: number;
    }
}
