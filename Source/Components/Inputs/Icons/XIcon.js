/// <reference path="../../../References/react.d.ts" />
/// <reference path="../../../References/react-dom.d.ts" />
/// <reference path="../../../References/react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
                 * An "x" icon.
                 */
                var XIcon = (function (_super) {
                    __extends(XIcon, _super);
                    function XIcon() {
                        _super.apply(this, arguments);
                    }
                    /**
                     * Renders the component.
                     *
                     * @returns The rendered component.
                     */
                    XIcon.prototype.render = function () {
                        return (React.createElement("svg", null, React.createElement("line", {"x1": "25%", "y1": "25%", "x2": "75%", "y2": "75%"}), React.createElement("line", {"x1": "25%", "y1": "75%", "x2": "75%", "y2": "25%"})));
                    };
                    return XIcon;
                })(Icons.Icon);
                Icons.XIcon = XIcon;
            })(Icons = Inputs.Icons || (Inputs.Icons = {}));
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
