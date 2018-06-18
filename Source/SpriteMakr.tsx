/// <reference path="SpriteMakr.d.ts" />

/// <reference path="Components/Inputs/Button.tsx" />
/// <reference path="Components/Inputs/ExpandableButton.tsx" />
/// <reference path="Components/Inputs/FileDrop.tsx" />
/// <reference path="Components/Results/EditableResult.tsx" />
/// <reference path="Components/Results/FinalResult.tsx" />
/// <reference path="Components/Sections/EditorSection.tsx" />
/// <reference path="Components/Sections/Header.tsx" />
/// <reference path="Components/Sections/ResultsSection.tsx" />
/// <reference path="Components/Sections/SettingsSection.tsx" />
/// <reference path="Components/Sections/UploadsSection.tsx" />

module SpriteMakr {
    "use strict";

    import IPalettes = Components.Palettes.IPalettes;
    import IResultProps = Components.Results.IResultProps;
    import ICompletedRender = Components.Sections.ICompletedRender;

    export class SpriteMakr extends React.Component<{}, ISpriteMakrState> {
        /**
         * The initial palette to have selected.
         */
        private static defaultPalette: string = "Telia";

        /**
         * Initially known palette choices.
         */
        private palettes: IPalettes = {
            "Black & White": {
                name: "Black & White",
                colors: [
                    [0, 0, 0, 0],
                    [255, 255, 255, 255],
                    [0, 0, 0, 255]
                ]
            },
            "Grayscale": {
                name: "Grayscale",
                colors: [
                    [0, 0, 0, 0],
                    [255, 255, 255, 255],
                    [0, 0, 0, 255],
                    [199, 199, 192, 255],
                    [128, 128, 128, 255]
                ]
            },
            "Mario": {
                name: "Mario",
                colors: [
                    [0, 0, 0, 0],
                    // Grayscales (1-4)
                    [255, 255, 255, 255],
                    [0, 0, 0, 255],
                    [188, 188, 188, 255],
                    [116, 116, 116, 255],
                    // Reds & Browns (5-11)
                    [252, 216, 168, 255],
                    [252, 152, 56, 255],
                    [252, 116, 180, 255],
                    [216, 40, 0, 255],
                    [200, 76, 12, 255],
                    [136, 112, 0, 255],
                    [124, 7, 0, 255],
                    // Greens (12-14, and 21)
                    [168, 250, 188, 255],
                    [128, 208, 16, 255],
                    [0, 168, 0, 255],
                    // Blues (15-20)
                    [24, 60, 92, 255],
                    [0, 128, 136, 255],
                    [32, 56, 236, 255],
                    [156, 252, 240, 255],
                    [60, 188, 252, 255],
                    [92, 148, 252, 255],
                    // Green (21) for Luigi
                    [0, 130, 0, 255],
                    // Pinkish tan (22) for large decorative text
                    [252, 188, 176, 255]
                ],
            },
            "Telia": {
                name: "Telia",
                colors: [
                    [0, 0, 0, 0],
                    [0, 0, 0, 255],
                    [8, 164, 223, 255],
                    [45, 170, 255, 255],
                    [63, 192, 240, 255],
                    [63, 140, 203, 255],
                    [71, 175, 84, 255],
                    [96, 178, 46, 255],
                    [106, 71, 150, 255],
                    [112, 87, 84, 255],
                    [115, 66, 147, 255],
                    [153, 118, 179, 255],
                    [176, 126, 74, 255],
                    [180, 78, 152, 255],
                    [192, 209, 1, 255],
                    [192, 145, 145, 255],
                    [205, 182, 216, 255],
                    [217, 176, 173, 255],
                    [219, 136, 151, 255],
                    [224, 174, 15, 255],
                    [224, 174, 15, 255],
                    [224, 174, 15, 255],
                    [226, 220, 228, 255],
                    [231, 22, 100, 255],
                    [249, 178, 51, 255],
                    [253, 200, 0, 255],
                    [255, 255, 255, 255]
                ],
            },
        };

        /**
         * Initializes a new instance of the SpriteMakr class.
         * 
         * @param props   Initial props of the component.
         * @param context   The component's creation context.
         */
        constructor(props?: any, context?: any) {
            super(props, context);

            this.state = {
                defaultHeight: 8,
                defaultWidth: 8,
                palettes: this.palettes,
                results: [],
                scalingFactor: 2
            };
        }

        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        render(): JSX.Element {
            return (
                <div className="SpriteMakr">
                    <Components.Sections.UploadsSection
                        onResults={this.receiveImageResults.bind(this)}
                        palette={this.state.palettes[SpriteMakr.defaultPalette]}
                        scalingFactor={this.state.scalingFactor}
                        />

                    <div id="interactions">
                        <Components.Sections.EditorSection
                            defaultHeight={this.state.defaultHeight}
                            defaultWidth={this.state.defaultWidth}
                            onAdd={this.onEditorAdd.bind(this)}
                            palettes={this.state.palettes}
                            scalingFactor={this.state.scalingFactor} />

                        <Components.Sections.ResultsSection
                            onResetContents={(): void => this.setState({ results: [] } as any) }
                            results={this.state.results} />

                        <Components.Sections.SettingsSection
                            onReportChanges={this.onReportChanges.bind(this)}
                            palettes={this.state.palettes}
                            selectedPalette={this.state.palettes[SpriteMakr.defaultPalette]} />
                    </div>
                </div>);
        }

        /**
         * Handler for the editor reporting a newly created result.
         * 
         * @param result   The newly created result.
         */
        private onEditorAdd(result: IResultProps): void {
            this.state.results.push(result);
            this.setState({
                results: this.state.results
            } as any);
        }

        /**
         * Manually causes a state change to inform child components.
         */
        private onReportChanges(): void {
            this.setState(this.state);
        }

        /**
         * Receives completed renders from the uploads section and adds them to state 
         * as result props.
         * 
         * @param completedRenders   Completed renders from the uploads section.
         */
        private receiveImageResults(completedRenders: ICompletedRender[]): void {
            var results: IResultProps[] = this.state.results.slice();

            results.push.apply(
                results,
                completedRenders.map(this.convertCompletedRenderToResult.bind(this)));

            this.setState({ results } as any);
        }

        /**
         * Converts a completed render to its equivalent result props.
         * 
         * @param completedRender   A completed render from the uploads section.
         * @returns The render as result props.
         */
        private convertCompletedRenderToResult(completedRender: ICompletedRender): IResultProps {
            var filename: string = completedRender.filename,
                image: HTMLImageElement = completedRender.image,
                result: string = completedRender.result,
                name: string = filename.slice(0, filename.lastIndexOf(".")),
                id: string = `${name} ${new Date().getTime()}`;

            return {
                id,
                initialSpriteInfo: {
                    height: image.height,
                    imageConverted: result,
                    name: name,
                    width: image.width
                },
                key: id,
                palettes: this.state.palettes,
                scalingFactor: this.state.scalingFactor,
                selectedPalette: this.state.palettes[SpriteMakr.defaultPalette]
            };
        }
    }
}
