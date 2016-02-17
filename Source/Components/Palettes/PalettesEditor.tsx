/// <reference path="PalettesEditor.d.ts" />

/// <reference path="../Inputs/Button.tsx" />
/// <reference path="../Inputs/NumberInput.tsx" />
/// <reference path="../Inputs/SearchableSelectInput.tsx" />
/// <reference path="Color.tsx" />

module SpriteMakr.Components.Palettes {
    "use strict";

    /**
     * A PalettesEditor component.
     */
    export class PalettesEditor extends React.Component<IPalettesEditorProps, IPalettesEditorState> {
        /**
         * Initializes a new instance of the PalettesEditor class.
         * 
         * @param props
         * @param context
         */
        constructor(props?: IPalettesEditorProps, context?: any) {
            super(props, context);

            this.state = {
                palettes: this.props.palettes,
                selectedPalette: this.props.selectedPalette
            } as any;
        }

        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        render(): JSX.Element {
            var paletteNames: string[] = Object.keys(this.state.palettes);

            return (
                <div className="palette">
                    <div className="palette-controls">
                        <div className="palette-names">
                            <Inputs.SearchableSelectInput
                                defaultValue={this.state.selectedPalette.name}
                                onChange={this.handlePaletteSwitch.bind(this)}
                                options={paletteNames} />
                        </div>
                        {/*<div className="palette-buttons">
                            <Inputs.Button
                                onActivate={this.deleteSelectedPalette.bind(this)}
                                text="Delete" />
                            <Inputs.Button
                                onActivate={this.cloneSelectedPalette.bind(this)}
                                text="Clone" />
                        </div>*/}
                        {this.renderColorControls(this.state.selectedPalette.colors[this.state.selectedColor])}
                    </div>
                    <div className="palette-colors">
                        {this.state.selectedPalette.colors
                            .map((color: IColor, i: number) => this.renderColor(color, i)) as JSX.Element[]}
                    </div>
                </div>);
        }

        /**
         * Renders a single color.
         * 
         * @param color   The color to render.
         * @returns The rendered color component.
         */
        private renderColor(color: IColor, i: number): JSX.Element {
            return (
                <span
                    className="color-wrapper"
                    key={i}>
                    <Color
                        red={color[0]}
                        green={color[1]}
                        blue={color[2]}
                        alpha={color[3]}
                        onClick={(): void => this.setState({ selectedColor: i } as any)}
                        selected={this.state.selectedColor === i} />
                </span>);
        }

        /**
         * Renders the RGBA controls for a color.
         * 
         * @param color   The color to render controls of.
         * @returns The rendered controls component.
         */
        private renderColorControls(color: IColor): JSX.Element {
            var hasColor: boolean = !!color;

            if (!hasColor) {
                color = [0, 0, 0, 0];
            }

            return (
                <div className="palette-color-options">
                    {this.renderColorName()}
                    <table className="palette-color-values-table">
                        <tbody>
                            <tr className="palette-color-labels">
                                <td>
                                    <label>Red</label>
                                </td>
                                <td>
                                    <label>Green</label>
                                </td>
                                <td>
                                    <label>Blue</label>
                                </td>
                                <td>
                                    <label>Alpha</label>
                                </td>
                            </tr>
                            <tr className="palette-color-values">
                                <td>
                                    <Inputs.NumberInput
                                        defaultValue={color[0] || 0}
                                        min={0}
                                        max={255}
                                        onChange={this.handleColorChange.bind(this, 0)} />
                                </td>
                                <td>
                                    <Inputs.NumberInput
                                        defaultValue={color[1] || 0}
                                        min={0}
                                        max={255}
                                        onChange={this.handleColorChange.bind(this, 1) } />
                                </td>
                                <td>
                                    <Inputs.NumberInput
                                        defaultValue={color[2] || 0}
                                        min={0}
                                        max={255}
                                        onChange={this.handleColorChange.bind(this, 2) } />
                                </td>
                                <td>
                                    <Inputs.NumberInput
                                        defaultValue={color[3] || 0}
                                        min={0}
                                        max={255}
                                        onChange={this.handleColorChange.bind(this, 3) } />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="palette-color-buttons">
                        {this.renderColorControlButtons(hasColor && color)}
                    </div>
                </div>);
        }

        /**
         * Renders a name for the selected color, or a no-color-selected message.
         * 
         * @returns The rendered name component.
         */
        private renderColorName(): JSX.Element {
            if (typeof this.state.selectedColor === "undefined") {
                return <h4 className="palette-color-no-name">No color selected</h4>;
            }

            return <h4 className="palette-color-name">{"#" + this.state.selectedColor}</h4>;
        }

        /**
         * Renders the action buttons below color controls.
         * 
         * @param color   The currently selected color, if any.
         * @returns The rendered controls container.
         */
        private renderColorControlButtons(color?: IColor): JSX.Element {
            if (color) {
                return (
                    <div className="palette-color-buttons">
                        <Inputs.Button
                            onActivate={(): void => this.addNewColor(color.slice() as IColor)}
                            text="Clone" />
                        <Inputs.Button
                            onActivate={(): void => this.deleteSelectedColor(color)}
                            text="Delete" />,
                    </div>);
            } else {
                return (
                    <Inputs.Button
                        onActivate={(): void => this.addNewColor([0, 0, 0, 0])}
                        text="Add New" />);
            }
        }

        /**
         * Reports that the palettes have been edited.
         */
        private reportChanges(): void {
            this.props.onReportChanges(this.state.palettes);
        }

        /**
         * Changes the currently selected palette.
         * 
         * @param paletteName   The name of the newly selected palette.
         */
        private setSelectedPalette(paletteName: string): void {
            this.setState({
                selectedColor: undefined,
                selectedPalette: this.state.palettes[paletteName]
            } as any);
        }

        // /**
        //  * Deletes the currently selected palette, and moves the selected palette
        //  * to the next one in the list.
        //  */
        // private deleteSelectedPalette(): void {
        //     var name: string = this.state.selectedPalette.name,
        //         palettes: IPalettes = this.state.palettes,
        //         names: string[] = Object.keys(palettes),
        //         index: number = names.indexOf(name),
        //         nextName: string = names[Math.min(names.length - 1, index)];

        //     delete palettes[name];
        // 
        //     this.setState(
        //         { palettes } as any,
        //         (): void => {
        //             this.setSelectedPalette(nextName);
        //             this.reportChanges();
        //         });
        // }

        /**
         * Deletes the currently selected color, and moves the selected color
         * to the next one in the list.
         * 
         * @param color   The currently selected color.
         */
        private deleteSelectedColor(color: IColor): void {
            var colors: IColor[] = this.state.selectedPalette.colors,
                index: number = colors.indexOf(color);

            colors.splice(index, 1);

            this.setState(
                {
                    colors,
                    selectedColor: Math.min(colors.length - 1, index)
                } as any,
                (): void => this.reportChanges());
        }

        /**
         * Adds a new color to the selected palette and selects it.
         * 
         * @param color   The color to add.
         */
        private addNewColor(color: IColor): void {
            var colors: IColor[] = this.state.selectedPalette.colors;

            colors.push(color);

            this.setState(
                {
                    colors,
                    selectedColor: colors.length - 1
                } as any,
                (): void => this.reportChanges());
        }

        // /**
        //  * Adds a new palette as a copy of the currently selected one.
        //  */
        // private cloneSelectedPalette(): void {
        //     var name: string = this.createPaletteNameCopy(this.state.selectedPalette.name),
        //         palette: IPalette = {
        //             colors: this.state.selectedPalette.colors,
        //             name: name
        //         };
        // 
        //     this.state.palettes[name] = palette;
        // 
        //     this.setState(
        //         {
        //             palette,
        //             selectedColor: 0,
        //             selectedPalette: palette
        //         } as any,
        //         (): void => this.reportChanges());
        // }

        /**
         * Handler for the user selecting a new value for an individual value in
         * the currently selected color.
         * 
         * @param index   Which index in the color is being changed.
         * @param event   The triggering event.
         * @param value   A new value for the index.
         */
        private handleColorChange(index: number, event: React.FormEvent, value: number): void {
            var selectedColor: IColor = this.state.selectedPalette.colors[this.state.selectedColor];

            if (!selectedColor) {
                return;
            }

            selectedColor[index] = value;

            this.setState(
                {
                    selectedColor: this.state.selectedColor
                } as any,
                (): void => this.reportChanges());
        }

        /**
         * Handler for the user selecting a new palette to be current.
         * 
         * @param event   The triggering event.
         * @param paletteName   The new palette name.
         */
        private handlePaletteSwitch(event: React.SyntheticEvent, paletteName: string): void {
            this.setSelectedPalette(paletteName);
        }

        // /**
        //  * Creates a copy of a palette name. If the name has a " (#)" count at
        //  * the end, it's increased; otherwise, " (1)" is added.
        //  * 
        //  * @param name   The original palette name.
        //  * @returns A new palette name based on the original.
        //  * @todo Use some regex magic to calculate if the name ends with " (#)"
        //  */
        // private createPaletteNameCopy(name: string): string {
        //     var nameFiltered: string = name.split(" (")[0],
        //         count: number = Object.keys(this.state.palettes)
        //             .filter((name: string): boolean => {
        //                 return name.split(" (")[0] === nameFiltered;
        //             })
        //             .length;
        // 
        //     return `${nameFiltered} (${count})`;
        // }
    }
}
