/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="ResultsSection.d.ts" />
/// <reference path="Header.tsx" />
/// <reference path="../Results/FinalResult.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Sections;
        (function (Sections) {
            "use strict";
            /**
             * A ResultsSection component.
             */
            var ResultsSection = (function (_super) {
                __extends(ResultsSection, _super);
                function ResultsSection() {
                    _super.apply(this, arguments);
                }
                /**
                 * Gets the unique id of the section.
                 *
                 * @returns An id String.
                 */
                ResultsSection.prototype.getId = function () {
                    return "results";
                };
                /**
                 * Renders the section's header.
                 *
                 * @returns The rendered header component.
                 */
                ResultsSection.prototype.renderHeader = function () {
                    var _this = this;
                    return (React.createElement(Components.Header, {"text": "Results", "buttons": [
                        {
                            icon: "x",
                            text: "Reset",
                            onActivate: function () { return _this.props.onResetContents(); },
                            onHoverEnd: function () { return _this.setHoverColor(); },
                            onHoverStart: function () { return _this.setHoverColor("red"); }
                        },
                        {
                            icon: "down",
                            text: "Download All",
                            onActivate: this.downloadResults.bind(this),
                            onHoverEnd: function () { return _this.setHoverColor(); },
                            onHoverStart: function () { return _this.setHoverColor("green"); }
                        }]}));
                };
                /**
                 * Renders the section's contents.
                 *
                 * @returns The rendered content components.
                 */
                ResultsSection.prototype.renderContents = function () {
                    return (React.createElement("div", {"className": "results-container"}, this.props.results.map(this.renderResult.bind(this))));
                };
                /**
                 * Renders a single result.
                 *
                 * @param result   The result.
                 * @param i   The result's index within results, as its key.
                 */
                ResultsSection.prototype.renderResult = function (result, i) {
                    return (React.createElement(Components.Results.FinalResult, React.__spread({"key": result.id}, result)));
                };
                /**
                 * Triggers a download of the summarized results.
                 */
                ResultsSection.prototype.downloadResults = function () {
                    var link = document.createElement("a");
                    link.setAttribute("download", "SpriteMakr Results.json");
                    link.setAttribute("href", "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.summarizeResults())));
                    link.click();
                };
                /**
                 * Turns the set of results into their imageConverted sprites.
                 *
                 * @returns The result summaries...
                 * @todo Use a fancy tree structure based on names instead.
                 */
                ResultsSection.prototype.summarizeResults = function () {
                    return this.props.results.map(function (result) {
                        return result.initialSpriteInfo.imageConverted;
                    });
                };
                return ResultsSection;
            })(Sections.Section);
            Sections.ResultsSection = ResultsSection;
        })(Sections = Components.Sections || (Components.Sections = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
//# sourceMappingURL=ResultsSection.js.map