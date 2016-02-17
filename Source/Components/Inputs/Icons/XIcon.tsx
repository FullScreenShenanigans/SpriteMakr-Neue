/// <reference path="../../../References/react.d.ts" />
/// <reference path="../../../References/react-dom.d.ts" />
/// <reference path="../../../References/react-global.d.ts" />

/// <reference path="Icon.tsx" />

module SpriteMakr.Components.Inputs.Icons {
    "use strict";

    /**
     * An "x" icon.
     */
    export class XIcon extends Icon<void> {
        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        render(): JSX.Element {
            return (
                <svg>
                    <line x1="25%" y1="25%" x2="75%" y2="75%"></line>
                    <line x1="25%" y1="75%" x2="75%" y2="25%"></line>
                </svg>);
        }
    }
}
