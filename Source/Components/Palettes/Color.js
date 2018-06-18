/// <reference path="Color.d.ts" />
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
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Palettes;
        (function (Palettes) {
            "use strict";
            /**
             * A Color component.
             */
            var Color = /** @class */ (function (_super) {
                __extends(Color, _super);
                function Color() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Renders the component.
                 *
                 * @returns The rendered component.
                 */
                Color.prototype.render = function () {
                    var className = "color preview", backgroundColor = "rgba("
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
                    return (React.createElement("div", { className: className, onClick: this.props.onClick },
                        React.createElement("div", { className: "color-inside", style: { backgroundColor: backgroundColor } })));
                };
                return Color;
            }(React.Component));
            Palettes.Color = Color;
        })(Palettes = Components.Palettes || (Components.Palettes = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
