/// <reference path="SpriteMakr.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="Components/Inputs/Button.tsx" />
/// <reference path="Components/Inputs/ExpandableButton.tsx" />
/// <reference path="Components/Inputs/FileDrop.tsx" />
/// <reference path="Components/Results/EditableResult.tsx" />
/// <reference path="Components/Results/FinalResult.tsx" />
/// <reference path="Components/Sections/EditorSection.tsx" />
/// <reference path="Components/Sections/Header.tsx" />
/// <reference path="Components/Sections/ResultsSection.tsx" />
/// <reference path="Components/Sections/SettingsSection.tsx" />
/// <reference path="Components/Sections/UploadsSection.tsx" />
var SpriteMakr;
(function (SpriteMakr_1) {
    "use strict";
    var SpriteMakr = (function (_super) {
        __extends(SpriteMakr, _super);
        /**
         * Initializes a new instance of the SpriteMakr class.
         *
         * @param props   Initial props of the component.
         * @param context   The component's creation context.
         */
        function SpriteMakr(props, context) {
            _super.call(this, props, context);
            /**
             * Initially known palette choices.
             */
            this.palettes = {
                "Black & White": {
                    name: "Black & White",
                    colors: [
                        [0, 0, 0, 0],
                        [255, 255, 255, 255],
                        [0, 0, 0, 255]
                    ]
                },
                "Grayscale": {
                    name: "Grayscale",
                    colors: [
                        [0, 0, 0, 0],
                        [255, 255, 255, 255],
                        [0, 0, 0, 255],
                        [199, 199, 192, 255],
                        [128, 128, 128, 255]
                    ]
                },
                "Mario": {
                    name: "Mario",
                    colors: [
                        [0, 0, 0, 0],
                        // Grayscales (1-4)
                        [255, 255, 255, 255],
                        [0, 0, 0, 255],
                        [188, 188, 188, 255],
                        [116, 116, 116, 255],
                        // Reds & Browns (5-11)
                        [252, 216, 168, 255],
                        [252, 152, 56, 255],
                        [252, 116, 180, 255],
                        [216, 40, 0, 255],
                        [200, 76, 12, 255],
                        [136, 112, 0, 255],
                        [124, 7, 0, 255],
                        // Greens (12-14, and 21)
                        [168, 250, 188, 255],
                        [128, 208, 16, 255],
                        [0, 168, 0, 255],
                        // Blues (15-20)
                        [24, 60, 92, 255],
                        [0, 128, 136, 255],
                        [32, 56, 236, 255],
                        [156, 252, 240, 255],
                        [60, 188, 252, 255],
                        [92, 148, 252, 255],
                        // Green (21) for Luigi
                        [0, 130, 0, 255],
                        // Pinkish tan (22) for large decorative text
                        [252, 188, 176, 255]
                    ]
                }
            };
            this.state = {
                defaultHeight: 8,
                defaultWidth: 8,
                palettes: this.palettes,
                results: [],
                scalingFactor: 2
            };
        }
        /**
         * Renders the component.
         *
         * @returns The rendered component.
         */
        SpriteMakr.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", {"className": "SpriteMakr"}, React.createElement(SpriteMakr_1.Components.Sections.UploadsSection, {"onResults": this.receiveImageResults.bind(this), "palette": this.state.palettes[SpriteMakr.defaultPalette], "scalingFactor": this.state.scalingFactor}), React.createElement("div", {"id": "interactions"}, React.createElement(SpriteMakr_1.Components.Sections.EditorSection, {"defaultHeight": this.state.defaultHeight, "defaultWidth": this.state.defaultWidth, "onAdd": this.onEditorAdd.bind(this), "palettes": this.state.palettes, "scalingFactor": this.state.scalingFactor}), React.createElement(SpriteMakr_1.Components.Sections.ResultsSection, {"onResetContents": function () { return _this.setState({ results: [] }); }, "results": this.state.results}), React.createElement(SpriteMakr_1.Components.Sections.SettingsSection, {"onReportChanges": this.onReportChanges.bind(this), "palettes": this.state.palettes, "selectedPalette": this.state.palettes[SpriteMakr.defaultPalette]}))));
        };
        /**
         * Handler for the editor reporting a newly created result.
         *
         * @param result   The newly created result.
         */
        SpriteMakr.prototype.onEditorAdd = function (result) {
            this.state.results.push(result);
            this.setState({
                results: this.state.results
            });
        };
        /**
         * Manually causes a state change to inform child components.
         */
        SpriteMakr.prototype.onReportChanges = function () {
            this.setState(this.state);
        };
        /**
         * Receives completed renders from the uploads section and adds them to state
         * as result props.
         *
         * @param completedRenders   Completed renders from the uploads section.
         */
        SpriteMakr.prototype.receiveImageResults = function (completedRenders) {
            var results = this.state.results.slice();
            results.push.apply(results, completedRenders.map(this.convertCompletedRenderToResult.bind(this)));
            this.setState({ results: results });
        };
        /**
         * Converts a completed render to its equivalent result props.
         *
         * @param completedRender   A completed render from the uploads section.
         * @returns The render as result props.
         */
        SpriteMakr.prototype.convertCompletedRenderToResult = function (completedRender) {
            var filename = completedRender.filename, image = completedRender.image, result = completedRender.result, name = filename.slice(0, filename.lastIndexOf(".")), id = name + " " + new Date().getTime();
            return {
                id: id,
                initialSpriteInfo: {
                    height: image.height,
                    imageConverted: result,
                    name: name,
                    width: image.width
                },
                key: id,
                palettes: this.state.palettes,
                scalingFactor: this.state.scalingFactor,
                selectedPalette: this.state.palettes[SpriteMakr.defaultPalette]
            };
        };
        /**
         * The initial palette to have selected.
         */
        SpriteMakr.defaultPalette = "Mario";
        return SpriteMakr;
    })(React.Component);
    SpriteMakr_1.SpriteMakr = SpriteMakr;
})(SpriteMakr || (SpriteMakr = {}));
//# sourceMappingURL=SpriteMakr.js.map