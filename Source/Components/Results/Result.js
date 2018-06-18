/// <reference path="Result.d.ts" />
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
/// <reference path="../Inputs/Button.tsx" />
/// <reference path="../Inputs/NumberInput.tsx" />
/// <reference path="../Inputs/TextInput.tsx" />
/// <reference path="Preview.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Results;
        (function (Results) {
            "use strict";
            /**
             * Base class for Result components.
             */
            var Result = /** @class */ (function (_super) {
                __extends(Result, _super);
                /**
                 * Initializes a new instance of the Result class.
                 *
                 * @param props   Initial props of the component.
                 * @param context   The component's creation context.
                 */
                function Result(props, context) {
                    var _this = _super.call(this, props, context) || this;
                    _this.state = {
                        palette: _this.props.selectedPalette,
                        spriteInfo: props.initialSpriteInfo || {}
                    };
                    return _this;
                }
                /**
                 * Clears any known spriteInfo from state.
                 *
                 * @remarks It would be nice to have an equivalent of replaceState...
                 */
                Result.prototype.clearSpriteInfo = function () {
                    this.setState({
                        spriteInfo: {
                            height: undefined,
                            imageConverted: "",
                            name: "",
                            width: undefined
                        }
                    });
                };
                /**
                 * Renders the component.
                 *
                 * @returns The rendered component.
                 */
                Result.prototype.render = function () {
                    var className = this.getClassName(), height = this.state.spriteInfo.height || this.props.defaultHeight, width = this.state.spriteInfo.width || this.props.defaultWidth;
                    return (React.createElement("div", { className: className },
                        React.createElement("div", { className: "result-preview" },
                            React.createElement("div", { className: "result-preview-holder" },
                                React.createElement(Results.Preview, { height: height, imageConverted: this.state.spriteInfo.imageConverted, palette: this.state.palette, scalingFactor: this.props.scalingFactor, width: width })),
                            React.createElement("div", { className: "result-info" },
                                React.createElement("div", { className: "result-info-name" }, this.renderName()),
                                React.createElement("div", { className: "result-info-inputs" },
                                    this.renderSizing(width, height),
                                    this.renderActions(),
                                    React.createElement("div", { className: "result-info-sprites" }, this.renderSpriteData()))),
                            this.renderTopRightButton())));
                };
                /*
                 * Sets a new value for hovering status.
                 *
                 * @param buttonHovering   Whether this is being hovered over.
                 */
                Result.prototype.setButtonHovering = function (buttonHovering) {
                    this.setState({ buttonHovering: buttonHovering });
                };
                /**
                 * Gets the class name for the outermost container component.
                 *
                 * @returns The outermost container's className.
                 */
                Result.prototype.getClassName = function () {
                    var className = "result ";
                    if (this.state.buttonHovering) {
                        className += "result-hovering";
                    }
                    return className;
                };
                /**
                 * Handles a change event from the width input component.
                 *
                 * @param event   The fired event.
                 */
                Result.prototype.handleHeightInputChange = function (event, value) {
                    return this.updateSpriteInfo("height", value);
                };
                /**
                 * Handles a change event from the name input component.
                 *
                 * @param event   The fired event.
                 * @returns Whether the new value is different from the old value.
                 */
                Result.prototype.handleNameInputChange = function (event, value) {
                    return this.updateSpriteInfo("name", value);
                };
                /**
                 * Handles a change event from the name input component.
                 *
                 * @param event   The fired event.
                 * @returns Whether the new value is different from the old value.
                 */
                Result.prototype.handleWidthInputChange = function (event, value) {
                    return this.updateSpriteInfo("width", value);
                };
                /**
                 * Handles a change event from the parsed sprite component.
                 *
                 * @param event   The fired event.
                 * @returns Whether the new value is different from the old value.
                 */
                Result.prototype.handleConvertedChange = function (event, value) {
                    return this.updateSpriteInfo("imageConverted", value);
                };
                /**
                 * Handles a change event from the palette name sprite component.
                 *
                 * @param event   The fired event.
                 * @param value   The new palette name.
                 */
                Result.prototype.handlePaletteChange = function (event, value) {
                    var palette = this.props.palettes[value];
                    this.setState({ palette: palette });
                };
                /**
                 * Updates a single piece of information in the state's spriteInfo.
                 *
                 * @param key   The key of the information to update.
                 * @param value   A new value for the key.
                 * @returns Whether the new value is different from the old value.
                 */
                Result.prototype.updateSpriteInfo = function (key, value) {
                    var _this = this;
                    if (this.state.spriteInfo[key] === value) {
                        return false;
                    }
                    this.state.spriteInfo[key] = value;
                    this.setState({
                        spriteInfo: this.state.spriteInfo
                    }, function () {
                        if (_this.props.reportChanges) {
                            _this.props.reportChanges(_this.createPropsCopy(_this.props));
                        }
                    });
                    return true;
                };
                Result.prototype.createPropsCopy = function (props) {
                    var output = {}, i;
                    for (i in props) {
                        if (props.hasOwnProperty(i)) {
                            output[i] = props[i];
                        }
                    }
                    output.initialSpriteInfo = this.state.spriteInfo;
                    return output;
                };
                return Result;
            }(React.Component));
            Results.Result = Result;
        })(Results = Components.Results || (Components.Results = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
