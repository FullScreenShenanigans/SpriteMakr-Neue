/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="FileDrop.d.ts" />

/// <reference path="ExpandableButton.tsx" />

module SpriteMakr.Components.Inputs {
    "use strict";

    /**
     * A droppable area for files to be uploaded into.
     */
    export class FileDrop extends Input<IFileDropProps, IFileDropState> {
        /**
         * Reference key for the file input.
         */
        private static refFileInput: string = "fileInput";

        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        renderInput(): JSX.Element {
            var style: React.CSSProperties = {},
                className: string = "file-drop";

            if (this.props.size) {
                style.width = this.props.size.width + "px";
                style.height = this.props.size.height + "px";
            }

            if (this.state.fileHovering) {
                className += " file-hovering";
            }

            return (
                <div
                    onClick={this.handleFileClick.bind(this)}
                    onDragEnter={this.handleFileDragEnter.bind(this)}
                    onDragLeave={this.handleFileDragLeave.bind(this)}
                    onDragOver={this.handleFileDragOver.bind(this)}
                    onDrop={this.handleFileDrop.bind(this)}
                    className={className}
                    style={style}>
                    <span className="file-drop-text">
                        {this.props.text}
                    </span>
                    <span className="file-drop-button">
                        <ExpandableButton icon={(this.state.hovering || this.state.fileHovering) ? "up" : "plus"} />
                    </span>
                    <input
                        accept="image/*"
                        multiple={true}
                        onChange={this.handleFileDrop.bind(this)}
                        ref={FileDrop.refFileInput}
                        type="file" />
                </div>);
        }

        /**
         * Gets a className for the input's container.  
         * 
         * @returns A className for the input's container.
         */
        protected getInputClassName(): string {
            return "file-drop";
        }

        /**
         *
         */
        private handleFileClick(): void {
            (this.refs[FileDrop.refFileInput] as HTMLInputElement).click();
        }

        /**
         * Handler for the user starting to drag file(s) onto this.
         * 
         * @param event   The triggering event.
         */
        private handleFileDragEnter(event: React.DragEvent): void {
            if (event.dataTransfer) {
                event.dataTransfer.dropEffect = "copy";
            }

            this.setState({ fileHovering: true } as any);
        }

        /**
         * Handler for the user no longer dragging file(s) onto this.
         * 
         * @param event   The triggering event.
         */
        private handleFileDragLeave(event: React.DragEvent): void {
            if (event.dataTransfer) {
                event.dataTransfer.dropEffect = "none";
            }

            this.setState({ fileHovering: false } as any);
        }

        /**
         * Handler for the user moving file(s) over this.
         * 
         * @param event   The triggering event.
         */
        private handleFileDragOver(event: React.DragEvent): void {
            event.preventDefault();
        }

        /**
         * Handler for the user dropping file(s) onto this.
         * 
         * @param event   The triggering event.
         */
        private handleFileDrop(event: React.DragEvent): void {
            var input: HTMLInputElement = ReactDOM.findDOMNode(event.target as any) as HTMLInputElement,
                files: FileList = input.files || event.dataTransfer.files;

            this.handleFileDragLeave(event);
            event.preventDefault();
            event.stopPropagation();

            [].slice.call(files).forEach((file: File) => this.uploadFile(file));
        }

        /**
         * Uploads a single file using a `FileReader`.
         * 
         * @param file   The file to upload.
         */
        private uploadFile(file: File): void {
            var reader: FileReader = new FileReader();

            reader.onloadend = (event: ProgressEvent): void => {
                this.handleReaderCompletion(event, file.name);
            };

            reader.readAsDataURL(file);
        }

        /**
         * Handler for a file completing uploading.
         * 
         * @param event   The triggering event.
         * @param filename   The name of the file.
         */
        private handleReaderCompletion(event: ProgressEvent, filename: string): void {
            this.props.onFileUpload((event.target as any).result, filename);
        }
    }
}
