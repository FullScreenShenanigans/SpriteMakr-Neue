/// <reference path="../../../References/react.d.ts" />
/// <reference path="../../../References/react-dom.d.ts" />
/// <reference path="../../../References/react-global.d.ts" />

/// <reference path="Icon.tsx" />

module SpriteMakr.Components.Inputs.Icons {
    "use strict";

    /**
     * An undo icon.
     */
    export class UndoIcon extends Icon<void> {
        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        render(): JSX.Element {
            return (
                <svg>
                    <line x1="50%" y1="25%" x2="50%" y2="75%"></line>
                </svg>);
        }
    }
}
