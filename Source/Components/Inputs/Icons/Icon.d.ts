/// <reference path="../../../References/react.d.ts" />
/// <reference path="../../../References/react-dom.d.ts" />
/// <reference path="../../../References/react-global.d.ts" />

/// <reference path="Icon.tsx" />

declare module SpriteMakr.Components.Inputs.Icons {
     /**
      * Component classes for icons, keyed by string alias.
      */
     export interface IIconClasses {
         [i: string]: typeof Icon;
     }
}
