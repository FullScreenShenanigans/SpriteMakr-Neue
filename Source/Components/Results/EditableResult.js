/// <reference path="EditableResult.d.ts" />
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
/// <reference path="Result.tsx" />
/// <reference path="../Inputs/Button.tsx" />
/// <reference path="../Inputs/SearchableSelectInput.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Results;
        (function (Results) {
            "use strict";
            /**
             * An EditableResult component.
             */
            var EditableResult = /** @class */ (function (_super) {
                __extends(EditableResult, _super);
                function EditableResult() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the class name for the outermost container component.
                 *
                 * @returns The outermost container's className.
                 */
                EditableResult.prototype.getClassName = function () {
                    return _super.prototype.getClassName.call(this) + " result-editable";
                };
                /**
                 * Renders the component's name display.
                 *
                 * @returns A rendered name component.
                 */
                EditableResult.prototype.renderName = function () {
                    return (React.createElement(Components.Inputs.TextInput, { defaultValue: this.state.spriteInfo.name, onChange: this.handleNameInputChange.bind(this), placeholder: "Insert name here" }));
                };
                /**
                 * Renders the unique top-right button copmonent.
                 *
                 * @returns A rendered button component.
                 */
                EditableResult.prototype.renderTopRightButton = function () {
                    return React.createElement("div", { className: "result-no-top-right-buttons" });
                };
                /**
                 * Renders the width and height inputs area.
                 *
                 * @param width   The current width.
                 * @param height   The current height.
                 * @returns The rendered width and height container component.
                 */
                EditableResult.prototype.renderSizing = function (width, height) {
                    return (React.createElement("div", { className: "result-info-sizing" },
                        React.createElement(Components.Inputs.NumberInput, { defaultValue: width, max: 128, min: 1, onChange: this.handleWidthInputChange.bind(this) }),
                        React.createElement("label", { className: "result-label-x" }, "x"),
                        React.createElement(Components.Inputs.NumberInput, { defaultValue: height, max: 128, min: 1, onChange: this.handleHeightInputChange.bind(this) })));
                };
                /**
                 * Renders the actionable area after sizing.
                 *
                 * @returns The rendered actionable area container component.
                 * @todo Also have undo and redo buttons.
                 */
                EditableResult.prototype.renderActions = function () {
                    // <Inputs.Button icon="undo" />
                    // <Inputs.Button icon="redo" />
                    return (React.createElement("div", { className: "result-info-actions" },
                        React.createElement(Components.Inputs.SelectInput, { defaultValue: this.state.palette.name, onChange: this.handlePaletteChange.bind(this), options: Object.keys(this.props.palettes) })));
                };
                /**
                 * Renders the textual display of the sprite data.
                 *
                 * @returns The rendered textual display.
                 */
                EditableResult.prototype.renderSpriteData = function () {
                    return (React.createElement("div", { className: "result-info-sprite-parsed" },
                        React.createElement("label", { className: "result-label-parsed" }, "Parsed: "),
                        React.createElement(Components.Inputs.TextInput, { onChange: this.handleConvertedChange.bind(this) })));
                };
                return EditableResult;
            }(Results.Result));
            Results.EditableResult = EditableResult;
        })(Results = Components.Results || (Components.Results = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
