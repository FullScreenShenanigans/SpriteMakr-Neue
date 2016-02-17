/// <reference path="PalettesEditor.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../Inputs/Button.tsx" />
/// <reference path="../Inputs/NumberInput.tsx" />
/// <reference path="../Inputs/SearchableSelectInput.tsx" />
/// <reference path="Color.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Palettes;
        (function (Palettes) {
            "use strict";
            /**
             * A PalettesEditor component.
             */
            var PalettesEditor = (function (_super) {
                __extends(PalettesEditor, _super);
                /**
                 * Initializes a new instance of the PalettesEditor class.
                 *
                 * @param props
                 * @param context
                 */
                function PalettesEditor(props, context) {
                    _super.call(this, props, context);
                    this.state = {
                        palettes: this.props.palettes,
                        selectedPalette: this.props.selectedPalette
                    };
                }
                /**
                 * Renders the component.
                 *
                 * @returns The rendered component.
                 */
                PalettesEditor.prototype.render = function () {
                    var _this = this;
                    var paletteNames = Object.keys(this.state.palettes);
                    return (React.createElement("div", {"className": "palette"}, React.createElement("div", {"className": "palette-controls"}, React.createElement("div", {"className": "palette-names"}, React.createElement(Components.Inputs.SearchableSelectInput, {"defaultValue": this.state.selectedPalette.name, "onChange": this.handlePaletteSwitch.bind(this), "options": paletteNames})), this.renderColorControls(this.state.selectedPalette.colors[this.state.selectedColor])), React.createElement("div", {"className": "palette-colors"}, this.state.selectedPalette.colors
                        .map(function (color, i) { return _this.renderColor(color, i); }))));
                };
                /**
                 * Renders a single color.
                 *
                 * @param color   The color to render.
                 * @returns The rendered color component.
                 */
                PalettesEditor.prototype.renderColor = function (color, i) {
                    var _this = this;
                    return (React.createElement("span", {"className": "color-wrapper", "key": i}, React.createElement(Palettes.Color, {"red": color[0], "green": color[1], "blue": color[2], "alpha": color[3], "onClick": function () { return _this.setState({ selectedColor: i }); }, "selected": this.state.selectedColor === i})));
                };
                /**
                 * Renders the RGBA controls for a color.
                 *
                 * @param color   The color to render controls of.
                 * @returns The rendered controls component.
                 */
                PalettesEditor.prototype.renderColorControls = function (color) {
                    var hasColor = !!color;
                    if (!hasColor) {
                        color = [0, 0, 0, 0];
                    }
                    return (React.createElement("div", {"className": "palette-color-options"}, this.renderColorName(), React.createElement("table", {"className": "palette-color-values-table"}, React.createElement("tbody", null, React.createElement("tr", {"className": "palette-color-labels"}, React.createElement("td", null, React.createElement("label", null, "Red")), React.createElement("td", null, React.createElement("label", null, "Green")), React.createElement("td", null, React.createElement("label", null, "Blue")), React.createElement("td", null, React.createElement("label", null, "Alpha"))), React.createElement("tr", {"className": "palette-color-values"}, React.createElement("td", null, React.createElement(Components.Inputs.NumberInput, {"defaultValue": color[0] || 0, "min": 0, "max": 255, "onChange": this.handleColorChange.bind(this, 0)})), React.createElement("td", null, React.createElement(Components.Inputs.NumberInput, {"defaultValue": color[1] || 0, "min": 0, "max": 255, "onChange": this.handleColorChange.bind(this, 1)})), React.createElement("td", null, React.createElement(Components.Inputs.NumberInput, {"defaultValue": color[2] || 0, "min": 0, "max": 255, "onChange": this.handleColorChange.bind(this, 2)})), React.createElement("td", null, React.createElement(Components.Inputs.NumberInput, {"defaultValue": color[3] || 0, "min": 0, "max": 255, "onChange": this.handleColorChange.bind(this, 3)}))))), React.createElement("div", {"className": "palette-color-buttons"}, this.renderColorControlButtons(hasColor && color))));
                };
                /**
                 * Renders a name for the selected color, or a no-color-selected message.
                 *
                 * @returns The rendered name component.
                 */
                PalettesEditor.prototype.renderColorName = function () {
                    if (typeof this.state.selectedColor === "undefined") {
                        return React.createElement("h4", {"className": "palette-color-no-name"}, "No color selected");
                    }
                    return React.createElement("h4", {"className": "palette-color-name"}, "#" + this.state.selectedColor);
                };
                /**
                 * Renders the action buttons below color controls.
                 *
                 * @param color   The currently selected color, if any.
                 * @returns The rendered controls container.
                 */
                PalettesEditor.prototype.renderColorControlButtons = function (color) {
                    var _this = this;
                    if (color) {
                        return (React.createElement("div", {"className": "palette-color-buttons"}, React.createElement(Components.Inputs.Button, {"onActivate": function () { return _this.addNewColor(color.slice()); }, "text": "Clone"}), React.createElement(Components.Inputs.Button, {"onActivate": function () { return _this.deleteSelectedColor(color); }, "text": "Delete"}), ","));
                    }
                    else {
                        return (React.createElement(Components.Inputs.Button, {"onActivate": function () { return _this.addNewColor([0, 0, 0, 0]); }, "text": "Add New"}));
                    }
                };
                /**
                 * Reports that the palettes have been edited.
                 */
                PalettesEditor.prototype.reportChanges = function () {
                    this.props.onReportChanges(this.state.palettes);
                };
                /**
                 * Changes the currently selected palette.
                 *
                 * @param paletteName   The name of the newly selected palette.
                 */
                PalettesEditor.prototype.setSelectedPalette = function (paletteName) {
                    this.setState({
                        selectedColor: undefined,
                        selectedPalette: this.state.palettes[paletteName]
                    });
                };
                // /**
                //  * Deletes the currently selected palette, and moves the selected palette
                //  * to the next one in the list.
                //  */
                // private deleteSelectedPalette(): void {
                //     var name: string = this.state.selectedPalette.name,
                //         palettes: IPalettes = this.state.palettes,
                //         names: string[] = Object.keys(palettes),
                //         index: number = names.indexOf(name),
                //         nextName: string = names[Math.min(names.length - 1, index)];
                //     delete palettes[name];
                // 
                //     this.setState(
                //         { palettes } as any,
                //         (): void => {
                //             this.setSelectedPalette(nextName);
                //             this.reportChanges();
                //         });
                // }
                /**
                 * Deletes the currently selected color, and moves the selected color
                 * to the next one in the list.
                 *
                 * @param color   The currently selected color.
                 */
                PalettesEditor.prototype.deleteSelectedColor = function (color) {
                    var _this = this;
                    var colors = this.state.selectedPalette.colors, index = colors.indexOf(color);
                    colors.splice(index, 1);
                    this.setState({
                        colors: colors,
                        selectedColor: Math.min(colors.length - 1, index)
                    }, function () { return _this.reportChanges(); });
                };
                /**
                 * Adds a new color to the selected palette and selects it.
                 *
                 * @param color   The color to add.
                 */
                PalettesEditor.prototype.addNewColor = function (color) {
                    var _this = this;
                    var colors = this.state.selectedPalette.colors;
                    colors.push(color);
                    this.setState({
                        colors: colors,
                        selectedColor: colors.length - 1
                    }, function () { return _this.reportChanges(); });
                };
                // /**
                //  * Adds a new palette as a copy of the currently selected one.
                //  */
                // private cloneSelectedPalette(): void {
                //     var name: string = this.createPaletteNameCopy(this.state.selectedPalette.name),
                //         palette: IPalette = {
                //             colors: this.state.selectedPalette.colors,
                //             name: name
                //         };
                // 
                //     this.state.palettes[name] = palette;
                // 
                //     this.setState(
                //         {
                //             palette,
                //             selectedColor: 0,
                //             selectedPalette: palette
                //         } as any,
                //         (): void => this.reportChanges());
                // }
                /**
                 * Handler for the user selecting a new value for an individual value in
                 * the currently selected color.
                 *
                 * @param index   Which index in the color is being changed.
                 * @param event   The triggering event.
                 * @param value   A new value for the index.
                 */
                PalettesEditor.prototype.handleColorChange = function (index, event, value) {
                    var _this = this;
                    var selectedColor = this.state.selectedPalette.colors[this.state.selectedColor];
                    if (!selectedColor) {
                        return;
                    }
                    selectedColor[index] = value;
                    this.setState({
                        selectedColor: this.state.selectedColor
                    }, function () { return _this.reportChanges(); });
                };
                /**
                 * Handler for the user selecting a new palette to be current.
                 *
                 * @param event   The triggering event.
                 * @param paletteName   The new palette name.
                 */
                PalettesEditor.prototype.handlePaletteSwitch = function (event, paletteName) {
                    this.setSelectedPalette(paletteName);
                };
                return PalettesEditor;
            })(React.Component);
            Palettes.PalettesEditor = PalettesEditor;
        })(Palettes = Components.Palettes || (Components.Palettes = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
//# sourceMappingURL=PalettesEditor.js.map