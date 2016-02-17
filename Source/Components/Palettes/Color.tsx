/// <reference path="Color.d.ts" />

module SpriteMakr.Components.Palettes {
    "use strict";

    /**
     * A Color component.
     */
    export class Color extends React.Component<IColorProps, void> {
        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        render(): JSX.Element {
            var className: string = "color preview",
                backgroundColor: string =
                    "rgba("
                    + [
                        this.props.red,
                        this.props.green,
                        this.props.blue,
                        this.props.alpha / 255
                    ].join(", ")
                    + ")";

            if (this.props.selected) {
                className += " color-selected";
            }

            return (
                <div
                    className={className}
                    onClick={this.props.onClick}>
                    <div
                        className="color-inside"
                        style={{ backgroundColor }}>
                    </div>
                </div>);
        }
    }
}
