/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="../Palettes/Palettes.d.ts" />

/// <reference path="Section.tsx" />

declare module SpriteMakr.Components.Sections {
    /**
     * Properties for a SettingsSection component.
     */
    export interface ISettingsSectionProps extends ISectionProps {
        /**
         * Callback to report that palettes have changed.
         * 
         * @param palettes   The new palettes.
         */
        onReportChanges: (palettes: Palettes.IPalettes) => void;

        /**
         * Known color palettes sprites may be within.
         */
        palettes: Components.Palettes.IPalettes;

        /**
         * The initially selected palette.
         */
        selectedPalette: Palettes.IPalette;
    }

    /**
     * State for a SettingsSection component.
     */
    export interface ISettingsSectionState extends ISpriteMakrState { }
}
