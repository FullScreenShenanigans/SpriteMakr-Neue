/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="Input.tsx" />
/// <reference path="Button.d.ts" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Inputs;
        (function (Inputs) {
            "use strict";
            /**
             * A simple button with click and text behavior.
             */
            var Button = /** @class */ (function (_super) {
                __extends(Button, _super);
                function Button() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Renders the component.
                 *
                 * @returns The rendered component.
                 */
                Button.prototype.renderInput = function () {
                    var contents = [], className = "button";
                    if (this.props.icon) {
                        className += " button-has-icon";
                        contents.push(React.createElement("span", { className: "button-icon color-inversed-filled", key: "icon" },
                            React.createElement("span", { className: "button-icon-inside" }, this.renderIcon(this.props.icon))));
                    }
                    else {
                        className += " button-no-icon";
                    }
                    if (this.props.text) {
                        className += " button-has-text";
                        contents.push(React.createElement("span", { className: "button-text", key: "text" },
                            React.createElement("span", { className: "button-text-inside" }, this.props.text)));
                    }
                    else {
                        className += " button-no-text no-border";
                    }
                    return (React.createElement("div", { className: className, onClick: this.props.onActivate }, contents));
                };
                /**
                 * Gets a className for the input's container.
                 *
                 * @returns A className for the input's container.
                 */
                Button.prototype.getInputClassName = function () {
                    return "button";
                };
                return Button;
            }(Inputs.Input));
            Inputs.Button = Button;
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
