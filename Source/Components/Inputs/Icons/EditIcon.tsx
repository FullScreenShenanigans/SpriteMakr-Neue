/// <reference path="../../../References/react.d.ts" />
/// <reference path="../../../References/react-dom.d.ts" />
/// <reference path="../../../References/react-global.d.ts" />

/// <reference path="Icon.tsx" />

module SpriteMakr.Components.Inputs.Icons {
    "use strict";

    /**
     * An "edit" icon.
     */
    export class EditIcon extends Icon<void> {
        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        render(): JSX.Element {
            return (
                <svg>
                    <line x1="20%" y1="65%" x2="15%" y2="85%"></line>
                    <line x1="15%" y1="85%" x2="35%" y2="80%"></line>
                    <line x1="35%" y1="80%" x2="80%" y2="30%"></line>
                    <line x1="80%" y1="30%" x2="65%" y2="15%"></line>
                    <line x1="65%" y1="15%" x2="20%" y2="65%"></line>
                </svg>);
        }
    }
}
