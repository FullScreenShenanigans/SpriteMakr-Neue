/// <reference path="UploadsSection.d.ts" />
/// <reference path="../Inputs/FileDrop.tsx" />
/// <reference path="../../References/PixelRendr-0.2.0.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Sections;
        (function (Sections) {
            "use strict";
            /**
             * An UploadsSection component.
             */
            var UploadsSection = (function (_super) {
                __extends(UploadsSection, _super);
                /**
                 * Initializes a new instance of the UploadsSection class.
                 *
                 * @param props   Initial props of the component.
                 * @param context   The component's creation context.
                 */
                function UploadsSection(props, context) {
                    _super.call(this, props, context);
                    /**
                     * Renders that haven't yet been rendered.
                     */
                    this.renderQueue = [];
                    /**
                     * The next spot in the render queue to be rendered.
                     */
                    this.renderQueuePosition = 0;
                    this.generateNewPixelRender(props);
                }
                /**
                 * Gets the unique id of the section.
                 *
                 * @returns An id String.
                 */
                UploadsSection.prototype.getId = function () {
                    return "uploads";
                };
                /**
                 * Renders nothing, the uploads section has no header.
                 *
                 * @returns `undefined`.
                 */
                UploadsSection.prototype.renderHeader = function () {
                    return undefined;
                };
                /**
                 * Renders the section's contents.
                 *
                 * @returns The rendered content components.
                 */
                UploadsSection.prototype.renderContents = function () {
                    return (React.createElement("div", {"className": "uploads-container"}, React.createElement(Components.Inputs.FileDrop, {"onFileUpload": this.queueImageUpload.bind(this), "text": "Upload raw images"}), React.createElement(Components.Inputs.FileDrop, {"onFileUpload": console.log.bind(console), "text": "Upload objects.js"}), React.createElement(Components.Inputs.FileDrop, {"onFileUpload": console.log.bind(console), "text": "Upload sprites.js"})));
                };
                /**
                 * Reacts to an image completing upload by adding its information to the
                 * queue of unrendered images.
                 *
                 * @param contents   The file contents of the image.
                 * @param filename   The name of the image's file.
                 */
                UploadsSection.prototype.queueImageUpload = function (contents, filename) {
                    var pendingRender = { contents: contents, filename: filename };
                    this.renderQueue.push(pendingRender);
                    if (this.rendering) {
                        return;
                    }
                    this.rendering = true;
                    this.renderingTimestamp = new Date().getTime();
                    this.completedQueue = [];
                    this.renderNextSprite();
                };
                /**
                 * Parses the next pending render in the queue.
                 *
                 * @remarks The callback for parsing completion is `this.handleCompletedRender`.
                 */
                UploadsSection.prototype.renderNextSprite = function () {
                    var _this = this;
                    var pendingRender = this.renderQueue[this.renderQueuePosition];
                    this.renderQueuePosition += 1;
                    this.parseBase64Image(pendingRender, function (completedRender) { return _this.handleCompletedRender(completedRender); });
                };
                /**
                 * Handles a render being completed by adding it to the list of completed renders
                 * and, if necessary, sending a messagee via `this.props.onResults`.
                 *
                 * @param completedRender   The completed render.
                 */
                UploadsSection.prototype.handleCompletedRender = function (completedRender) {
                    var _this = this;
                    this.completedQueue.push(completedRender);
                    if (this.renderQueuePosition >= this.renderQueue.length) {
                        this.props.onResults(this.completedQueue);
                        this.rendering = false;
                        return;
                    }
                    if (new Date().getTime() - this.renderingTimestamp < 500) {
                        this.renderNextSprite();
                        return;
                    }
                    this.props.onResults(this.completedQueue);
                    this.completedQueue = [];
                    setTimeout(function () {
                        _this.renderingTimestamp = new Date().getTime();
                        _this.renderNextSprite();
                    });
                };
                /**
                 * Parses an image using the internal PixelRendr.
                 *
                 * @param pendingRender   Information for the image to render.
                 * @param callback   A handler for when the render completes.
                 */
                UploadsSection.prototype.parseBase64Image = function (pendingRender, callback) {
                    var _this = this;
                    var image = document.createElement("img");
                    image.onload = function () {
                        callback({
                            filename: pendingRender.filename,
                            image: image,
                            result: _this.PixelRender.encode(image)
                        });
                    };
                    image.src = pendingRender.contents;
                };
                /**
                 * Generates a new member PixelRendr for when the palette changes.
                 *
                 * @param props   Properties for the new PixelRendr.
                 */
                UploadsSection.prototype.generateNewPixelRender = function (props) {
                    this.PixelRender = new PixelRendr.PixelRendr({
                        paletteDefault: this.copyColors(props.palette.colors),
                        scale: props.scalingFactor
                    });
                };
                /**
                 * Deep copies a set of colors.
                 *
                 * @param colors   The colors to copy.
                 */
                UploadsSection.prototype.copyColors = function (colors) {
                    var output = [], i;
                    for (i = 0; i < colors.length; i += 1) {
                        output.push([colors[i][0], colors[i][1], colors[i][2], colors[i][3]]);
                    }
                    return output;
                };
                return UploadsSection;
            })(Sections.Section);
            Sections.UploadsSection = UploadsSection;
        })(Sections = Components.Sections || (Components.Sections = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
//# sourceMappingURL=UploadsSection.js.map