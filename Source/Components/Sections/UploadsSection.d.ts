/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="Section.d.ts" />
/// <reference path="../Palettes/Palettes.d.ts" />

declare module SpriteMakr.Components.Sections {
    /**
     * Information for an image that should be rendered.
     */
    export interface IPendingRender {
        contents: string;
        filename: string;
    }

    /**
     * Information for an image that has been rendered.
     */
    export interface ICompletedRender {
        filename: string;
        image: HTMLImageElement;
        result: string;
    }

    /**
     * A general handler for finishing a render.
     *
     * @param image   The source image element.
     * @param result   The resultant sprite.
     * @param filename   The name of the source image file.
     */
    export interface IRenderCallback {
        (completedRender: ICompletedRender): void;
    }

    /**
     * A batched handler for finishing multiple renders.
     *
     * @param image   The source image element.
     * @param result   The resultant sprite.
     * @param filename   The name of the source image file.
     */
    export interface IBatchedRenderCallback {
        (completedRenders: ICompletedRender[]): void;
    }

    /**
     * Properties for an UploadsSection component.
     */
    export interface IUploadsSectionProps extends ISectionProps {
        /**
         * Batched handler for when images have been rendered.
         */
        onResults: IBatchedRenderCallback;

        /**
         * The currently selected palette.
         */
        palette: Palettes.IPalette;

        /**
         * How much to expand sprites into pixels.
         */
        scalingFactor: number;
    }

    /**
     * State for a UploadsSection component.
     */
    export interface IUploadsSectionState extends ISectionState { }
}
