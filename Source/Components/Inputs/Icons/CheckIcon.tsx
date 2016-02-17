/// <reference path="../../../References/react.d.ts" />
/// <reference path="../../../References/react-dom.d.ts" />
/// <reference path="../../../References/react-global.d.ts" />

/// <reference path="Icon.tsx" />

module SpriteMakr.Components.Inputs.Icons {
    "use strict";

    /**
     * A "check" icon.
     */
    export class CheckIcon extends Icon<void> {
        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        render(): JSX.Element {
            return (
                <svg>
                    <line x1="25%" y1="50%" x2="50%" y2="75%"></line>
                    <line x1="50%" y1="75%" x2="87.5%" y2="25%"></line>
                </svg>);
        }
    }
}
