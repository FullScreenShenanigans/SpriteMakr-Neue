/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="ExpandableButton.d.ts" />

/// <reference path="Button.tsx" />

module SpriteMakr.Components.Inputs {
    "use strict";

    /**
     * A simple button with click and text behavior.
     */
    export class ExpandableButton extends Input<IExpandableButtonProps, IInputState> {
        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        renderInput(): JSX.Element {
            var style: React.CSSProperties = {};

            if (this.props.size) {
                style.width = this.props.size.width + "px";
                style.height = this.props.size.height + "px";
            }

            return (
                <div
                    className="button expandable-button button-has-icon no-border"
                    onClick={this.props.onActivate}
                    style={style}>
                    <span className="expandable-button-inside">
                        <Button icon={this.props.icon} />
                    </span>
                </div>
            );
        }

        /**
         * Gets a className for the input's container.  
         * 
         * @returns A className for the input's container.
         */
        protected getInputClassName(): string {
            return "expandable-button";
        }
    }
}
