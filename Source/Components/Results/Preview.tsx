/// <reference path="../../References/PixelRendr-0.2.0.ts" />

/// <reference path="Preview.d.ts" />

module SpriteMakr.Components.Results {
    "use strict";

    /**
     * Known rendering statuses for a preview's canvas.
     */
    export enum Status {
        /**
         * No real sprite data has been provided.
         */
        Blank,

        /**
         * The sprite preview was rendered successfully.
         */
        Success,

        /**
         * The provided sprite data is invalid.
         */
        Failure
    }

    /**
     * Base class for Result components.
     */
    export class Preview extends React.Component<IPreviewProps, IPreviewState> {
        /**
         * Reference key for the contained HTMLCanvasElement.
         */
        private static keyRefCanvas: string = "canvas";

        /**
         * A PixelRendr to generate the canvas' image data.
         */
        private PixelRender: PixelRendr.IPixelRendr;

        /**
         * Initializes a new instance of the Preview class.
         * 
         * @param props   Initial props of the component.
         * @param context   The component's creation context.
         */
        constructor(props?: IPreviewProps, context?: any) {
            super(props, context);

            this.generateNewPixelRender(props);

            this.state = {
                status: Status.Blank
            } as any;

            if (props && props.imageConverted) {
                setTimeout((): void => this.componentWillReceiveProps(props));
            }
        }

        /**
         * Determines whether a new props should cause a re-render. 
         *
         * @param nextProps   The next props.
         * @returns Whether nextProps should cause a re-render.
         */
        shouldComponentUpdate(nextProps: IPreviewProps): boolean {
            return !(
                nextProps.height === this.props.height
                && nextProps.imageConverted === this.props.imageConverted
                && nextProps.width === this.props.width);
        }

        /**
         * Re-renders the visual canvas in preparation for receiving a new image.
         * 
         * @param nextProps   The incoming properties.
         */
        componentWillReceiveProps(nextProps: IPreviewProps): void {
            if (!this.refs[Preview.keyRefCanvas]) {
                return;
            }

            var nextStatus: Status;

            if (this.PixelRender.getPaletteDefault() !== nextProps.palette.colors) {
                this.generateNewPixelRender(nextProps);
            }

            if (nextProps.imageConverted) {
                try {
                    this.updateCanvasData(nextProps);
                    nextStatus = Status.Success;
                } catch (error) {
                    nextStatus = Status.Failure;
                }
            } else {
                nextStatus = Status.Blank;
            }

            if (this.state.status !== nextStatus) {
                this.setState({ status: nextStatus } as any);
            }
        }

        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        render(): JSX.Element {
            var className: string = "preview preview-" + Status[this.state.status];

            return (
                <div className={className}>
                    <div className="preview-holder">
                        <canvas
                            className="preview-canvas"
                            height={this.props.height * this.PixelRender.getScale() }
                            ref={Preview.keyRefCanvas}
                            width={this.props.width * this.PixelRender.getScale() } />
                        </div>
                    </div>);
        }

        /**
         * Updates the canvas with new image data.
         * 
         * @param props   Newly incoming props.
         * @remarks This is computationally expensive. Use it only when necessary.
         * @todo Instead of resetting the library, PixelRendr might want a utility
         *       to add a new sprite to the existing library.
         */
        private updateCanvasData(props: IPreviewProps): void {
            var imageConverted: string = props.imageConverted,
                key: string = this.generateSpriteKey(imageConverted),
                canvas: HTMLCanvasElement = this.refs[Preview.keyRefCanvas] as HTMLCanvasElement,
                context: CanvasRenderingContext2D = canvas.getContext("2d"),
                imageData: ImageData,
                sprite: Uint8ClampedArray;

            this.PixelRender.resetLibrary({
                [key]: imageConverted
            });

            sprite = this.PixelRender.decode(
                key,
                {
                    spriteHeight: props.height * this.PixelRender.getScale(),
                    spriteWidth: props.width * this.PixelRender.getScale()
                }) as Uint8ClampedArray;

            context.clearRect(0, 0, canvas.width, canvas.height);
            imageData = context.getImageData(0, 0, canvas.width, canvas.height);

            this.PixelRender.memcpyU8(sprite, imageData.data);
            context.putImageData(imageData, 0, 0);
        }

        /**
         * Generates a key for a sprite with the current palette.
         * 
         * @param imageConverted   The sprite data for the key.
         */
        private generateSpriteKey(imageConverted: string): string {
            return `${this.props.palette.name}${[this.props.width, this.props.height].join(",")}${imageConverted}`;
        }

        /**
         * Generates a new member PixelRendr for when the palette changes.
         * 
         * @param props   Properties for the new PixelRendr.
         */
        private generateNewPixelRender(props: IPreviewProps): void {
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
