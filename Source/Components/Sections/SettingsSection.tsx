/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="SettingsSection.d.ts" />

/// <reference path="Header.tsx" />
/// <reference path="../Inputs/TextInput.tsx" />
/// <reference path="../Palettes/PalettesEditor.tsx" />

module SpriteMakr.Components.Sections {
    "use strict";

    /**
     * A SettingsSection component.
     */
    export class SettingsSection extends Section<ISettingsSectionProps, ISettingsSectionState> {
        /**
         * Gets the unique id of the section. 
         * 
         * @returns An id String.
         */
        protected getId(): string {
            return "settings";
        }

        /**
         * Renders the section's header. 
         * 
         * @returns The rendered header component.
         */
        protected renderHeader(): JSX.Element {
            return (
                <Header text="Settings" />);
        }

        /**
         * Renders the section's contents.
         * 
         * @returns The rendered content components.
         */
        protected renderContents(): JSX.Element {
            return (
                <div className="settings-container">
                    <div className="settings-input-containers">
                        <div className="settings-input-container settings-scale-container">
                            <label>Scaling factor:</label>
                            <Inputs.NumberInput
                                max={8}
                                min={1}
                                defaultValue={this.state.scalingFactor} />
                            </div>
                        <div className="settings-input-container settings-default-width-container">
                            <label>Default width:</label>
                            <Inputs.NumberInput
                                max={64}
                                min={1}
                                defaultValue={this.state.defaultWidth} />
                            </div>
                        <div className="settings-input-container settings-default-height-container">
                            <label>Default height:</label>
                            <Inputs.NumberInput
                                max={64}
                                min={1}
                                defaultValue={this.state.defaultHeight} />
                            </div>
                    </div>
                    <Palettes.PalettesEditor
                        onReportChanges={this.onReportChanges.bind(this)}
                        palettes={this.props.palettes}
                        selectedPalette={this.props.selectedPalette} />
                </div>);
        }

        /**
         * Reports that the palettes have been edited.
         *
         * @param palettes   The new palettes.
         */
        private onReportChanges(palettes: Palettes.IPalettes): void {
            this.props.onReportChanges(palettes);
        }
    }
}
