/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="EditorSection.d.ts" />

/// <reference path="Header.tsx" />

module SpriteMakr.Components.Sections {
    "use strict";

    /**
     * An EditorSection component.
     */
    export class EditorSection extends Section<IEditorSectionProps, IEditorSectionState> {
        /**
         * The default palette to start with.
         */
        private static defaultPalette: string = "Mario";

        /**
         * Initializes a new instance of the EditorSection class.
         * 
         * @param props   Initial props of the component.
         * @param context   The component's creation context.
         */
        constructor(props?: IEditorSectionProps, context?: any) {
            super(props, context);

            this.state = {
                defaultHeight: this.props.defaultHeight,
                defaultWidth: this.props.defaultWidth,
                key: new Date().getTime(),
                palettes: this.props.palettes,
                scalingFactor: this.props.scalingFactor
            } as any;
        }

        /**
         * Gets the unique id of the section. 
         * 
         * @returns An id String.
         */
        protected getId(): string {
            return "editor";
        }

        /**
         * Renders the section's header. 
         * 
         * @returns The rendered header component.
         */
        protected renderHeader(): JSX.Element {
            return (
                <Components.Header
                    text="Editor"
                    buttons={
                        [
                            {
                                icon: "x",
                                text: "Reset",
                                onActivate: (): void => this.resetContents(),
                                onHoverEnd: (): void => this.setHoverColor(),
                                onHoverStart: (): void => this.setHoverColor("red")
                            },
                            {
                                icon: "plus",
                                text: "Add",
                                onActivate: (): void => this.addContents(),
                                onHoverEnd: (): void => this.setHoverColor(),
                                onHoverStart: (): void => this.setHoverColor("green")
                            }]
                    } />);
        }

        /**
         * Renders the section's contents.
         * 
         * @returns The rendered content components.
         */
        protected renderContents(): JSX.Element {
            return (
                <Results.EditableResult
                    defaultHeight={this.state.defaultHeight}
                    defaultWidth={this.state.defaultWidth}
                    id={this.state.key}
                    key={this.state.key}
                    palettes={this.state.palettes}
                    reportChanges={this.onReportChanges.bind(this)}
                    scalingFactor={this.state.scalingFactor}
                    selectedPalette={this.props.palettes[EditorSection.defaultPalette]} />);
        }

        private onReportChanges(result: Results.IResultProps): void {
            this.setState({ result } as any);
        }

        private addContents(): void {
            if (!this.state.result) {
                return;
            }

            this.props.onAdd(this.state.result);
            this.resetContents();
        }

        private resetContents(): void {
            var id: number = new Date().getTime();

            this.setState({
                defaultHeight: this.props.defaultHeight,
                defaultWidth: this.props.defaultWidth,
                id: id,
                key: id,
                palettes: this.props.palettes,
                result: undefined,
                scalingFactor: this.props.scalingFactor
            } as any);
        }
    }
}
