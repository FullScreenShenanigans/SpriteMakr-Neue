/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="FileDrop.d.ts" />
/// <reference path="ExpandableButton.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Inputs;
        (function (Inputs) {
            "use strict";
            /**
             * A droppable area for files to be uploaded into.
             */
            var FileDrop = (function (_super) {
                __extends(FileDrop, _super);
                function FileDrop() {
                    _super.apply(this, arguments);
                }
                /**
                 * Renders the component.
                 *
                 * @returns The rendered component.
                 */
                FileDrop.prototype.renderInput = function () {
                    var style = {}, className = "file-drop";
                    if (this.props.size) {
                        style.width = this.props.size.width + "px";
                        style.height = this.props.size.height + "px";
                    }
                    if (this.state.fileHovering) {
                        className += " file-hovering";
                    }
                    return (React.createElement("div", {"onClick": this.handleFileClick.bind(this), "onDragEnter": this.handleFileDragEnter.bind(this), "onDragLeave": this.handleFileDragLeave.bind(this), "onDragOver": this.handleFileDragOver.bind(this), "onDrop": this.handleFileDrop.bind(this), "className": className, "style": style}, React.createElement("span", {"className": "file-drop-text"}, this.props.text), React.createElement("span", {"className": "file-drop-button"}, React.createElement(Inputs.ExpandableButton, {"icon": (this.state.hovering || this.state.fileHovering) ? "up" : "plus"})), React.createElement("input", {"accept": "image/*", "multiple": true, "onChange": this.handleFileDrop.bind(this), "ref": FileDrop.refFileInput, "type": "file"})));
                };
                /**
                 * Gets a className for the input's container.
                 *
                 * @returns A className for the input's container.
                 */
                FileDrop.prototype.getInputClassName = function () {
                    return "file-drop";
                };
                /**
                 *
                 */
                FileDrop.prototype.handleFileClick = function () {
                    this.refs[FileDrop.refFileInput].click();
                };
                /**
                 * Handler for the user starting to drag file(s) onto this.
                 *
                 * @param event   The triggering event.
                 */
                FileDrop.prototype.handleFileDragEnter = function (event) {
                    if (event.dataTransfer) {
                        event.dataTransfer.dropEffect = "copy";
                    }
                    this.setState({ fileHovering: true });
                };
                /**
                 * Handler for the user no longer dragging file(s) onto this.
                 *
                 * @param event   The triggering event.
                 */
                FileDrop.prototype.handleFileDragLeave = function (event) {
                    if (event.dataTransfer) {
                        event.dataTransfer.dropEffect = "none";
                    }
                    this.setState({ fileHovering: false });
                };
                /**
                 * Handler for the user moving file(s) over this.
                 *
                 * @param event   The triggering event.
                 */
                FileDrop.prototype.handleFileDragOver = function (event) {
                    event.preventDefault();
                };
                /**
                 * Handler for the user dropping file(s) onto this.
                 *
                 * @param event   The triggering event.
                 */
                FileDrop.prototype.handleFileDrop = function (event) {
                    var _this = this;
                    var input = ReactDOM.findDOMNode(event.target), files = input.files || event.dataTransfer.files;
                    this.handleFileDragLeave(event);
                    event.preventDefault();
                    event.stopPropagation();
                    [].slice.call(files).forEach(function (file) { return _this.uploadFile(file); });
                };
                /**
                 * Uploads a single file using a `FileReader`.
                 *
                 * @param file   The file to upload.
                 */
                FileDrop.prototype.uploadFile = function (file) {
                    var _this = this;
                    var reader = new FileReader();
                    reader.onloadend = function (event) {
                        _this.handleReaderCompletion(event, file.name);
                    };
                    reader.readAsDataURL(file);
                };
                /**
                 * Handler for a file completing uploading.
                 *
                 * @param event   The triggering event.
                 * @param filename   The name of the file.
                 */
                FileDrop.prototype.handleReaderCompletion = function (event, filename) {
                    this.props.onFileUpload(event.target.result, filename);
                };
                /**
                 * Reference key for the file input.
                 */
                FileDrop.refFileInput = "fileInput";
                return FileDrop;
            })(Inputs.Input);
            Inputs.FileDrop = FileDrop;
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
