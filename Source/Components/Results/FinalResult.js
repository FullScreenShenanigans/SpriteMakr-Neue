/// <reference path="FinalResult.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="Result.tsx" />
/// <reference path="../Inputs/Button.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Results;
        (function (Results) {
            "use strict";
            /**
             * A FinalResult component.
             */
            var FinalResult = (function (_super) {
                __extends(FinalResult, _super);
                function FinalResult() {
                    _super.apply(this, arguments);
                }
                /**
                 * Gets the class name for the outermost container component.
                 *
                 * @returns The outermost container's className.
                 */
                FinalResult.prototype.getClassName = function () {
                    return _super.prototype.getClassName.call(this) + " result-final";
                };
                /**
                 * Renders the component's name display.
                 *
                 * @returns A rendered name component.
                 */
                FinalResult.prototype.renderName = function () {
                    return React.createElement("h3", null, this.state.spriteInfo.name);
                };
                /**
                 * Renders the unique top-right button copmonent.
                 *
                 * @returns A rendered button component.
                 */
                FinalResult.prototype.renderTopRightButton = function () {
                    var _this = this;
                    return (React.createElement(Components.Inputs.Button, {"icon": "x", "onActivate": function () { return _this.clearSpriteInfo(); }, "onHoverEnd": function () { return _this.setButtonHovering(false); }, "onHoverStart": function () { return _this.setButtonHovering(true); }}));
                };
                /**
                 * Renders the width and height inputs area.
                 *
                 * @param width   The current width.
                 * @param height   The current height.
                 * @returns The rendered width and height container component.
                 */
                FinalResult.prototype.renderSizing = function (width, height) {
                    return (React.createElement("span", {"className": "result-info-sizing constant"}, React.createElement("span", {"className": "sizing-constant"}, width), "x", React.createElement("span", {"className": "sizing-constant"}, height)));
                };
                /**
                 * Renders the actionable area after sizing.
                 *
                 * @returns The rendered actionable area container component.
                 */
                FinalResult.prototype.renderActions = function () {
                    return (React.createElement("span", {"className": "result-no-actions constant"}, React.createElement("span", {"className": "slash"}, "/"), this.state.palette.name));
                };
                /**
                 * Renders the textual display of the sprite data.
                 *
                 * @returns The rendered textual display.
                 */
                FinalResult.prototype.renderSpriteData = function () {
                    return (React.createElement("span", {"className": "result-info-sprite-parsed"}, React.createElement(Components.Inputs.TextInput, {"defaultValue": this.props.initialSpriteInfo.imageConverted, "readonly": true})));
                };
                return FinalResult;
            })(Results.Result);
            Results.FinalResult = FinalResult;
        })(Results = Components.Results || (Components.Results = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
//# sourceMappingURL=FinalResult.js.map