/// <reference path="../../References/PixelRendr-0.2.0.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="Preview.d.ts" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Results;
        (function (Results) {
            "use strict";
            /**
             * Known rendering statuses for a preview's canvas.
             */
            (function (Status) {
                /**
                 * No real sprite data has been provided.
                 */
                Status[Status["Blank"] = 0] = "Blank";
                /**
                 * The sprite preview was rendered successfully.
                 */
                Status[Status["Success"] = 1] = "Success";
                /**
                 * The provided sprite data is invalid.
                 */
                Status[Status["Failure"] = 2] = "Failure";
            })(Results.Status || (Results.Status = {}));
            var Status = Results.Status;
            /**
             * Base class for Result components.
             */
            var Preview = (function (_super) {
                __extends(Preview, _super);
                /**
                 * Initializes a new instance of the Preview class.
                 *
                 * @param props   Initial props of the component.
                 * @param context   The component's creation context.
                 */
                function Preview(props, context) {
                    var _this = this;
                    _super.call(this, props, context);
                    this.generateNewPixelRender(props);
                    this.state = {
                        status: Status.Blank
                    };
                    if (props && props.imageConverted) {
                        setTimeout(function () { return _this.componentWillReceiveProps(props); });
                    }
                }
                /**
                 * Determines whether a new props should cause a re-render.
                 *
                 * @param nextProps   The next props.
                 * @returns Whether nextProps should cause a re-render.
                 */
                Preview.prototype.shouldComponentUpdate = function (nextProps) {
                    return !(nextProps.height === this.props.height
                        && nextProps.imageConverted === this.props.imageConverted
                        && nextProps.width === this.props.width);
                };
                /**
                 * Re-renders the visual canvas in preparation for receiving a new image.
                 *
                 * @param nextProps   The incoming properties.
                 */
                Preview.prototype.componentWillReceiveProps = function (nextProps) {
                    if (!this.refs[Preview.keyRefCanvas]) {
                        return;
                    }
                    var nextStatus;
                    if (this.PixelRender.getPaletteDefault() !== nextProps.palette.colors) {
                        this.generateNewPixelRender(nextProps);
                    }
                    if (nextProps.imageConverted) {
                        try {
                            this.updateCanvasData(nextProps);
                            nextStatus = Status.Success;
                        }
                        catch (error) {
                            nextStatus = Status.Failure;
                        }
                    }
                    else {
                        nextStatus = Status.Blank;
                    }
                    if (this.state.status !== nextStatus) {
                        this.setState({ status: nextStatus });
                    }
                };
                /**
                 * Renders the component.
                 *
                 * @returns The rendered component.
                 */
                Preview.prototype.render = function () {
                    var className = "preview preview-" + Status[this.state.status];
                    return (React.createElement("div", {"className": className}, React.createElement("div", {"className": "preview-holder"}, React.createElement("canvas", {"className": "preview-canvas", "height": this.props.height * this.PixelRender.getScale(), "ref": Preview.keyRefCanvas, "width": this.props.width * this.PixelRender.getScale()}))));
                };
                /**
                 * Updates the canvas with new image data.
                 *
                 * @param props   Newly incoming props.
                 * @remarks This is computationally expensive. Use it only when necessary.
                 * @todo Instead of resetting the library, PixelRendr might want a utility
                 *       to add a new sprite to the existing library.
                 */
                Preview.prototype.updateCanvasData = function (props) {
                    var imageConverted = props.imageConverted, key = this.generateSpriteKey(imageConverted), canvas = this.refs[Preview.keyRefCanvas], context = canvas.getContext("2d"), imageData, sprite;
                    this.PixelRender.resetLibrary((_a = {},
                        _a[key] = imageConverted,
                        _a
                    ));
                    sprite = this.PixelRender.decode(key, {
                        spriteHeight: props.height * this.PixelRender.getScale(),
                        spriteWidth: props.width * this.PixelRender.getScale()
                    });
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                    this.PixelRender.memcpyU8(sprite, imageData.data);
                    context.putImageData(imageData, 0, 0);
                    var _a;
                };
                /**
                 * Generates a key for a sprite with the current palette.
                 *
                 * @param imageConverted   The sprite data for the key.
                 */
                Preview.prototype.generateSpriteKey = function (imageConverted) {
                    return "" + this.props.palette.name + [this.props.width, this.props.height].join(",") + imageConverted;
                };
                /**
                 * Generates a new member PixelRendr for when the palette changes.
                 *
                 * @param props   Properties for the new PixelRendr.
                 */
                Preview.prototype.generateNewPixelRender = function (props) {
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
                Preview.prototype.copyColors = function (colors) {
                    var output = [], i;
                    for (i = 0; i < colors.length; i += 1) {
                        output.push([colors[i][0], colors[i][1], colors[i][2], colors[i][3]]);
                    }
                    return output;
                };
                /**
                 * Reference key for the contained HTMLCanvasElement.
                 */
                Preview.keyRefCanvas = "canvas";
                return Preview;
            })(React.Component);
            Results.Preview = Preview;
        })(Results = Components.Results || (Components.Results = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
//# sourceMappingURL=Preview.js.map