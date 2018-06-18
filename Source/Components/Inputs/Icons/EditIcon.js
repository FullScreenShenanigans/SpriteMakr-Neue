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
                 * An "edit" icon.
                 */
                var EditIcon = /** @class */ (function (_super) {
                    __extends(EditIcon, _super);
                    function EditIcon() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    /**
                     * Renders the component.
                     *
                     * @returns The rendered component.
                     */
                    EditIcon.prototype.render = function () {
                        return (React.createElement("svg", null,
                            React.createElement("line", { x1: "20%", y1: "65%", x2: "15%", y2: "85%" }),
                            React.createElement("line", { x1: "15%", y1: "85%", x2: "35%", y2: "80%" }),
                            React.createElement("line", { x1: "35%", y1: "80%", x2: "80%", y2: "30%" }),
                            React.createElement("line", { x1: "80%", y1: "30%", x2: "65%", y2: "15%" }),
                            React.createElement("line", { x1: "65%", y1: "15%", x2: "20%", y2: "65%" })));
                    };
                    return EditIcon;
                }(Icons.Icon));
                Icons.EditIcon = EditIcon;
            })(Icons = Inputs.Icons || (Inputs.Icons = {}));
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
