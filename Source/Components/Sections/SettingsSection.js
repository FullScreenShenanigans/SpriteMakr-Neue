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
/// <reference path="SettingsSection.d.ts" />
/// <reference path="Header.tsx" />
/// <reference path="../Inputs/TextInput.tsx" />
/// <reference path="../Palettes/PalettesEditor.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Sections;
        (function (Sections) {
            "use strict";
            /**
             * A SettingsSection component.
             */
            var SettingsSection = /** @class */ (function (_super) {
                __extends(SettingsSection, _super);
                function SettingsSection() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Gets the unique id of the section.
                 *
                 * @returns An id String.
                 */
                SettingsSection.prototype.getId = function () {
                    return "settings";
                };
                /**
                 * Renders the section's header.
                 *
                 * @returns The rendered header component.
                 */
                SettingsSection.prototype.renderHeader = function () {
                    return (React.createElement(Components.Header, { text: "Settings" }));
                };
                /**
                 * Renders the section's contents.
                 *
                 * @returns The rendered content components.
                 */
                SettingsSection.prototype.renderContents = function () {
                    return (React.createElement("div", { className: "settings-container" },
                        React.createElement("div", { className: "settings-input-containers" },
                            React.createElement("div", { className: "settings-input-container settings-scale-container" },
                                React.createElement("label", null, "Scaling factor:"),
                                React.createElement(Components.Inputs.NumberInput, { max: 8, min: 1, defaultValue: this.state.scalingFactor })),
                            React.createElement("div", { className: "settings-input-container settings-default-width-container" },
                                React.createElement("label", null, "Default width:"),
                                React.createElement(Components.Inputs.NumberInput, { max: 64, min: 1, defaultValue: this.state.defaultWidth })),
                            React.createElement("div", { className: "settings-input-container settings-default-height-container" },
                                React.createElement("label", null, "Default height:"),
                                React.createElement(Components.Inputs.NumberInput, { max: 64, min: 1, defaultValue: this.state.defaultHeight }))),
                        React.createElement(Components.Palettes.PalettesEditor, { onReportChanges: this.onReportChanges.bind(this), palettes: this.props.palettes, selectedPalette: this.props.selectedPalette })));
                };
                /**
                 * Reports that the palettes have been edited.
                 *
                 * @param palettes   The new palettes.
                 */
                SettingsSection.prototype.onReportChanges = function (palettes) {
                    this.props.onReportChanges(palettes);
                };
                return SettingsSection;
            }(Sections.Section));
            Sections.SettingsSection = SettingsSection;
        })(Sections = Components.Sections || (Components.Sections = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
