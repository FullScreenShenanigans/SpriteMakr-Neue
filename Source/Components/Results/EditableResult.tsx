/// <reference path="EditableResult.d.ts" />

/// <reference path="Result.tsx" />
/// <reference path="../Inputs/Button.tsx" />
/// <reference path="../Inputs/SearchableSelectInput.tsx" />

module SpriteMakr.Components.Results {
    "use strict";

    /**
     * An EditableResult component.
     */
    export class EditableResult extends Result<IEditableResultProps, IEditableResultState> {
        /**
         * Gets the class name for the outermost container component.
         * 
         * @returns The outermost container's className.
         */
        protected getClassName(): string {
            return super.getClassName() + " result-editable";
        }

        /**
         * Renders the component's name display.
         * 
         * @returns A rendered name component.
         */
        protected renderName(): JSX.Element {
            return (
                <Inputs.TextInput
                    defaultValue={this.state.spriteInfo.name}
                    onChange={this.handleNameInputChange.bind(this) }
                    placeholder="Insert name here" />);
        }

        /**
         * Renders the unique top-right button copmonent.
         * 
         * @returns A rendered button component.
         */
        protected renderTopRightButton(): JSX.Element {
            return <div className="result-no-top-right-buttons"></div>;
        }

        /**
         * Renders the width and height inputs area.
         * 
         * @param width   The current width.
         * @param height   The current height.
         * @returns The rendered width and height container component.
         */
        protected renderSizing(width: number, height: number): JSX.Element {
            return (
                <div className="result-info-sizing">
                    <Inputs.NumberInput
                        defaultValue={width}
                        max={128}
                        min={1}
                        onChange={this.handleWidthInputChange.bind(this) } />
                    <label className="result-label-x">x</label>
                    <Inputs.NumberInput
                        defaultValue={height}
                        max={128}
                        min={1}
                        onChange={this.handleHeightInputChange.bind(this) } />
                </div>);
        }

        /**
         * Renders the actionable area after sizing.
         * 
         * @returns The rendered actionable area container component.
         * @todo Also have undo and redo buttons.
         */
        protected renderActions(): JSX.Element {
            // <Inputs.Button icon="undo" />
            // <Inputs.Button icon="redo" />
            return (
                <div className="result-info-actions">
                    <Inputs.SelectInput
                        defaultValue={this.state.palette.name}
                        onChange={this.handlePaletteChange.bind(this)}
                        options={Object.keys(this.props.palettes)} />
                </div>);
        }

        /**
         * Renders the textual display of the sprite data.
         * 
         * @returns The rendered textual display.
         */
        protected renderSpriteData(): JSX.Element {
            return (
                <div className="result-info-sprite-parsed">
                    <label className="result-label-parsed">Parsed: </label>
                    <Inputs.TextInput onChange={this.handleConvertedChange.bind(this)} />
                </div>);
        }
    }
}
