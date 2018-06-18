/// <reference path="../../../References/react.d.ts" />
/// <reference path="../../../References/react-dom.d.ts" />
/// <reference path="../../../References/react-global.d.ts" />
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
/// <reference path="Icon.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Inputs;
        (function (Inputs) {
            var Icons;
            (function (Icons) {
                "use strict";
                /**
                 * An up icon.
                 */
                var UpIcon = /** @class */ (function (_super) {
                    __extends(UpIcon, _super);
                    function UpIcon() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    /**
                     * Renders the component.
                     *
                     * @returns The rendered component.
                     */
                    UpIcon.prototype.render = function () {
                        return (React.createElement("svg", null,
                            React.createElement("line", { x1: "50%", y1: "75%", x2: "50%", y2: "25%" }),
                            React.createElement("line", { x1: "25%", y1: "50%", x2: "50%", y2: "25%" }),
                            React.createElement("line", { x1: "75%", y1: "50%", x2: "50%", y2: "25%" })));
                    };
                    return UpIcon;
                }(Icons.Icon));
                Icons.UpIcon = UpIcon;
            })(Icons = Inputs.Icons || (Inputs.Icons = {}));
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
