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
                 * A "plus" icon.
                 */
                var PlusIcon = (function (_super) {
                    __extends(PlusIcon, _super);
                    function PlusIcon() {
                        _super.apply(this, arguments);
                    }
                    /**
                     * Renders the component.
                     *
                     * @returns The rendered component.
                     */
                    PlusIcon.prototype.render = function () {
                        return (React.createElement("svg", null, React.createElement("line", {"x1": "25%", "y1": "50%", "x2": "75%", "y2": "50%"}), React.createElement("line", {"x1": "50%", "y1": "25%", "x2": "50%", "y2": "75%"})));
                    };
                    return PlusIcon;
                })(Icons.Icon);
                Icons.PlusIcon = PlusIcon;
            })(Icons = Inputs.Icons || (Inputs.Icons = {}));
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));