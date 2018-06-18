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
/// <reference path="EditorSection.d.ts" />
/// <reference path="Header.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Sections;
        (function (Sections) {
            "use strict";
            /**
             * An EditorSection component.
             */
            var EditorSection = /** @class */ (function (_super) {
                __extends(EditorSection, _super);
                /**
                 * Initializes a new instance of the EditorSection class.
                 *
                 * @param props   Initial props of the component.
                 * @param context   The component's creation context.
                 */
                function EditorSection(props, context) {
                    var _this = _super.call(this, props, context) || this;
                    _this.state = {
                        defaultHeight: _this.props.defaultHeight,
                        defaultWidth: _this.props.defaultWidth,
                        key: new Date().getTime(),
                        palettes: _this.props.palettes,
                        scalingFactor: _this.props.scalingFactor
                    };
                    return _this;
                }
                /**
                 * Gets the unique id of the section.
                 *
                 * @returns An id String.
                 */
                EditorSection.prototype.getId = function () {
                    return "editor";
                };
                /**
                 * Renders the section's header.
                 *
                 * @returns The rendered header component.
                 */
                EditorSection.prototype.renderHeader = function () {
                    var _this = this;
                    return (React.createElement(Components.Header, { text: "Editor", buttons: [
                            {
                                icon: "x",
                                text: "Reset",
                                onActivate: function () { return _this.resetContents(); },
                                onHoverEnd: function () { return _this.setHoverColor(); },
                                onHoverStart: function () { return _this.setHoverColor("red"); }
                            },
                            {
                                icon: "plus",
                                text: "Add",
                                onActivate: function () { return _this.addContents(); },
                                onHoverEnd: function () { return _this.setHoverColor(); },
                                onHoverStart: function () { return _this.setHoverColor("green"); }
                            }
                        ] }));
                };
                /**
                 * Renders the section's contents.
                 *
                 * @returns The rendered content components.
                 */
                EditorSection.prototype.renderContents = function () {
                    return (React.createElement(Components.Results.EditableResult, { defaultHeight: this.state.defaultHeight, defaultWidth: this.state.defaultWidth, id: this.state.key, key: this.state.key, palettes: this.state.palettes, reportChanges: this.onReportChanges.bind(this), scalingFactor: this.state.scalingFactor, selectedPalette: this.props.palettes[EditorSection.defaultPalette] }));
                };
                EditorSection.prototype.onReportChanges = function (result) {
                    this.setState({ result: result });
                };
                EditorSection.prototype.addContents = function () {
                    if (!this.state.result) {
                        return;
                    }
                    this.props.onAdd(this.state.result);
                    this.resetContents();
                };
                EditorSection.prototype.resetContents = function () {
                    var id = new Date().getTime();
                    this.setState({
                        defaultHeight: this.props.defaultHeight,
                        defaultWidth: this.props.defaultWidth,
                        id: id,
                        key: id,
                        palettes: this.props.palettes,
                        result: undefined,
                        scalingFactor: this.props.scalingFactor
                    });
                };
                /**
                 * The default palette to start with.
                 */
                EditorSection.defaultPalette = "Mario";
                return EditorSection;
            }(Sections.Section));
            Sections.EditorSection = EditorSection;
        })(Sections = Components.Sections || (Components.Sections = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
