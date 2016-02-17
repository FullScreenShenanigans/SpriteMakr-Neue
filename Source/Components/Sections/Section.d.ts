/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="Header.d.ts" />
/// <reference path="../../SpriteMakr.d.ts" />

/// <reference path="Section.tsx" />

declare module SpriteMakr.Components.Sections {
    /**
     * Properties for a Section component.
     */
    export interface ISectionProps { }

    /**
     * State for a Section component.
     */
    export interface ISectionState {
        /**
         * A color to tint the section as hovering over.
         */
        hoverColor?: string;
    }
}
