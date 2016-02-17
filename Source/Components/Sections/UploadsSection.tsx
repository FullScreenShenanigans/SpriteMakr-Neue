/// <reference path="UploadsSection.d.ts" />
/// <reference path="../Inputs/FileDrop.tsx" />
/// <reference path="../../References/PixelRendr-0.2.0.ts" />

module SpriteMakr.Components.Sections {
    "use strict";

    /**
     * An UploadsSection component.
     */
    export class UploadsSection extends Section<IUploadsSectionProps, IUploadsSectionState> {
        /**
         * A PixelRendr to render uploaded images' data.
         */
        private PixelRender: PixelRendr.IPixelRendr;

        /**
         * Whether there is current a rendering interval at work.
         */
        private rendering: boolean;

        /**
         * When the rendering interval started.
         */
        private renderingTimestamp: number;

        /**
         * Renders that haven't yet been rendered.
         */
        private renderQueue: IPendingRender[] = [];

        /**
         * The next spot in the render queue to be rendered.
         */
        private renderQueuePosition: number = 0;

        /**
         * Completed renders from the queue.
         */
        private completedQueue: ICompletedRender[];

        /**
         * Initializes a new instance of the UploadsSection class.
         * 
         * @param props   Initial props of the component.
         * @param context   The component's creation context.
         */
        constructor(props?: IUploadsSectionProps, context?: any) {
            super(props, context);

            this.generateNewPixelRender(props);
        }

        /**
         * Gets the unique id of the section. 
         * 
         * @returns An id String.
         */
        protected getId(): string {
            return "uploads";
        }

        /**
         * Renders nothing, the uploads section has no header.
         * 
         * @returns `undefined`.
         */
        protected renderHeader(): JSX.Element {
            return undefined;
        }

        /**
         * Renders the section's contents.
         * 
         * @returns The rendered content components.
         */
        protected renderContents(): JSX.Element {
            return (
                <div className="uploads-container">
                    <Components.Inputs.FileDrop
                        onFileUpload={this.queueImageUpload.bind(this)}
                        text="Upload raw images" />

                    <Components.Inputs.FileDrop
                        onFileUpload={console.log.bind(console)}
                        text="Upload objects.js" />

                    <Components.Inputs.FileDrop
                        onFileUpload={console.log.bind(console)}
                        text="Upload sprites.js" />
                </div>);
        }

        /**
         * Reacts to an image completing upload by adding its information to the
         * queue of unrendered images.
         * 
         * @param contents   The file contents of the image.
         * @param filename   The name of the image's file.
         */
        private queueImageUpload(contents: string, filename: string): void {
            var pendingRender: IPendingRender = { contents, filename };

            this.renderQueue.push(pendingRender);

            if (this.rendering) {
                return;
            }

            this.rendering = true;
            this.renderingTimestamp = new Date().getTime();
            this.completedQueue = [];

            this.renderNextSprite();
        }

        /**
         * Parses the next pending render in the queue.
         * 
         * @remarks The callback for parsing completion is `this.handleCompletedRender`.
         */
        private renderNextSprite(): void {
            var pendingRender: IPendingRender = this.renderQueue[this.renderQueuePosition];

            this.renderQueuePosition += 1;

            this.parseBase64Image(
                pendingRender,
                (completedRender: ICompletedRender): void => this.handleCompletedRender(completedRender));
        }

        /**
         * Handles a render being completed by adding it to the list of completed renders
         * and, if necessary, sending a messagee via `this.props.onResults`.
         * 
         * @param completedRender   The completed render.
         */
        private handleCompletedRender(completedRender: ICompletedRender): void {
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

            setTimeout((): void => {
                this.renderingTimestamp = new Date().getTime();
                this.renderNextSprite();
            });
        }

        /**
         * Parses an image using the internal PixelRendr.
         * 
         * @param pendingRender   Information for the image to render.
         * @param callback   A handler for when the render completes.
         */
        private parseBase64Image(pendingRender: IPendingRender, callback: IRenderCallback): void {
            var image: HTMLImageElement = document.createElement("img");

            image.onload = (): void => {
                callback({
                    filename: pendingRender.filename,
                    image,
                    result: this.PixelRender.encode(image)
                });
            };

            image.src = pendingRender.contents;
        }

        /**
         * Generates a new member PixelRendr for when the palette changes.
         * 
         * @param props   Properties for the new PixelRendr.
         */
        private generateNewPixelRender(props: IUploadsSectionProps): void {
            this.PixelRender = new PixelRendr.PixelRendr({
                paletteDefault: this.copyColors(props.palette.colors),
                scale: props.scalingFactor
            });
        }

        /**
         * Deep copies a set of colors.
         * 
         * @param colors   The colors to copy.
         */
        private copyColors(colors: Palettes.IColor[]): Palettes.IColor[] {
            var output: Palettes.IColor[] = [],
                i: number;

            for (i = 0; i < colors.length; i += 1) {
                output.push([colors[i][0], colors[i][1], colors[i][2], colors[i][3]]);
            }

            return output;
        }
    }
}
