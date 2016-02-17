/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="ExpandableButton.d.ts" />
/// <reference path="Input.d.ts" />

declare module SpriteMakr.Components.Inputs {
    /**
     * Properties for a FileDrop component.
     */
    export interface IFileDropProps extends IInputProps {
        /**
         * Handler for when a file has completed uploading.
         * 
         * @param contents   The contents of the file.
         * @param filename   The name of the file.
         */
        onFileUpload: (contents: string, filename: string) => void;

        /**
         * Textual content to display in the file drop.
         */
        text: string;

        /**
         * Size of the container in pixels.
         */
        size?: ISize;
    }

    /**
     * State for an IFileDrop component.
     */
    export interface IFileDropState extends IInputState {
        /**
         * Whether a file drag is hovering over this.
         */
        fileHovering?: boolean;
    }
}
