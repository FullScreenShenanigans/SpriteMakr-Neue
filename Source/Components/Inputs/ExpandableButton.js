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
/// <reference path="ExpandableButton.d.ts" />
/// <reference path="Button.tsx" />
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
            var ExpandableButton = /** @class */ (function (_super) {
                __extends(ExpandableButton, _super);
                function ExpandableButton() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Renders the component.
                 *
                 * @returns The rendered component.
                 */
                ExpandableButton.prototype.renderInput = function () {
                    var style = {};
                    if (this.props.size) {
                        style.width = this.props.size.width + "px";
                        style.height = this.props.size.height + "px";
                    }
                    return (React.createElement("div", { className: "button expandable-button button-has-icon no-border", onClick: this.props.onActivate, style: style },
                        React.createElement("span", { className: "expandable-button-inside" },
                            React.createElement(Inputs.Button, { icon: this.props.icon }))));
                };
                /**
                 * Gets a className for the input's container.
                 *
                 * @returns A className for the input's container.
                 */
                ExpandableButton.prototype.getInputClassName = function () {
                    return "expandable-button";
                };
                return ExpandableButton;
            }(Inputs.Input));
            Inputs.ExpandableButton = ExpandableButton;
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
