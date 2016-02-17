/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="Input.tsx" />
/// <reference path="Button.d.ts" />

module SpriteMakr.Components.Inputs {
    "use strict";

    /**
     * A simple button with click and text behavior.
     */
    export class Button extends Input<IButtonProps, IInputState> {
        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        renderInput(): JSX.Element {
            var contents: JSX.Element[] = [],
                className: string = "button";

            if (this.props.icon) {
                className += " button-has-icon";
                contents.push(
                    <span className="button-icon color-inversed-filled" key="icon">
                        <span className="button-icon-inside">
                            {this.renderIcon(this.props.icon)}
                        </span>
                    </span>);
            } else {
                className += " button-no-icon";
            }

            if (this.props.text) {
                className += " button-has-text";
                contents.push(
                    <span className="button-text" key="text">
                        <span className="button-text-inside">{this.props.text}</span>
                    </span>);
            } else {
                className += " button-no-text no-border";
            }

            return (
                <div
                    className={className}
                    onClick={this.props.onActivate}>
                    {contents}
                </div>);
        }

        /**
         * Gets a className for the input's container.  
         * 
         * @returns A className for the input's container.
         */
        protected getInputClassName(): string {
            return "button";
        }
    }
}
