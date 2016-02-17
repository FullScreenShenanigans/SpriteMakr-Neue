/// <reference path="../../../References/react.d.ts" />
/// <reference path="../../../References/react-dom.d.ts" />
/// <reference path="../../../References/react-global.d.ts" />

/// <reference path="Icon.tsx" />

module SpriteMakr.Components.Inputs.Icons {
    "use strict";

    /**
     * A "plus" icon.
     */
    export class PlusIcon extends Icon<void> {
        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        render(): JSX.Element {
            return (
                <svg>
                    <line x1="25%" y1="50%" x2="75%" y2="50%"></line>
                    <line x1="50%" y1="25%" x2="50%" y2="75%"></line>
                </svg>);
        }
    }
}
