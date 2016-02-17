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
                 * An undo icon.
                 */
                var UndoIcon = (function (_super) {
                    __extends(UndoIcon, _super);
                    function UndoIcon() {
                        _super.apply(this, arguments);
                    }
                    /**
                     * Renders the component.
                     *
                     * @returns The rendered component.
                     */
                    UndoIcon.prototype.render = function () {
                        return (React.createElement("svg", null, React.createElement("line", {"x1": "50%", "y1": "25%", "x2": "50%", "y2": "75%"})));
                    };
                    return UndoIcon;
                })(Icons.Icon);
                Icons.UndoIcon = UndoIcon;
            })(Icons = Inputs.Icons || (Inputs.Icons = {}));
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
