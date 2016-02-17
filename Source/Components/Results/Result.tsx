/// <reference path="Result.d.ts" />

/// <reference path="../Inputs/Button.tsx" />
/// <reference path="../Inputs/NumberInput.tsx" />
/// <reference path="../Inputs/TextInput.tsx" />
/// <reference path="Preview.tsx" />

module SpriteMakr.Components.Results {
    "use strict";

    /**
     * Base class for Result components.
     */
    export abstract class Result<TProps extends IResultProps, TState extends IResultState> extends React.Component<TProps, TState> {
        /**
         * Initializes a new instance of the Result class.
         * 
         * @param props   Initial props of the component.
         * @param context   The component's creation context.
         */
        constructor(props?: TProps, context?: any) {
            super(props, context);

            this.state = {
                palette: this.props.selectedPalette,
                spriteInfo: props.initialSpriteInfo || {}
            } as any;
        }

        /**
         * Clears any known spriteInfo from state.
         * 
         * @remarks It would be nice to have an equivalent of replaceState...
         */
        clearSpriteInfo(): void {
            this.setState(
                {
                    spriteInfo: {
                        height: undefined,
                        imageConverted: "",
                        name: "",
                        width: undefined
                    }
                } as any);
        }

        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        render(): JSX.Element {
            var className: string = this.getClassName(),
                height: number = this.state.spriteInfo.height || this.props.defaultHeight,
                width: number = this.state.spriteInfo.width || this.props.defaultWidth;

            return (
                <div className={className}>
                    <div className="result-preview">
                        <div className="result-preview-holder">
                            <Results.Preview
                                height={height}
                                imageConverted={this.state.spriteInfo.imageConverted}
                                palette={this.state.palette}
                                scalingFactor={this.props.scalingFactor}
                                width={width} />
                        </div>
                    <div className="result-info">
                        <div className="result-info-name">
                            {this.renderName()}
                        </div>
                        <div className="result-info-inputs">
                            {this.renderSizing(width, height)}
                            {this.renderActions()}
                            <div className="result-info-sprites">
                                {this.renderSpriteData()}
                            </div>
                        </div>
                    </div>
                    {this.renderTopRightButton()}
                </div>
            </div>);
        }

        /*
         * Sets a new value for hovering status.
         * 
         * @param buttonHovering   Whether this is being hovered over. 
         */
        protected setButtonHovering(buttonHovering: boolean): void {
            this.setState({ buttonHovering } as any);
        }

        /**
         * Gets the class name for the outermost container component.
         * 
         * @returns The outermost container's className.
         */
        protected getClassName(): string {
            var className: string = "result ";

            if (this.state.buttonHovering) {
                className += "result-hovering";
            }

            return className;
        }

        /**
         * Renders the component's name display.
         * 
         * @returns A rendered name component.
         */
        protected abstract renderName(): JSX.Element;

        /**
         * Renders the unique top-right button component.
         * 
         * @returns A rendered button component.
         */
        protected abstract renderTopRightButton(): JSX.Element;

        /**
         * Renders the width and height inputs area.
         * 
         * @param width   The current width.
         * @param height   The current height.
         * @returns The rendered width and height container component.
         */
        protected abstract renderSizing(width: number, height: number): JSX.Element;

        /**
         * Renders the actionable area after sizing.
         * 
         * @returns The rendered actionable area container component.
         */
        protected abstract renderActions(): JSX.Element;

        /**
         * Renders the textual display of the sprite data.
         * 
         * @returns The rendered textual display.
         */
        protected abstract renderSpriteData(): JSX.Element;

        /**
         * Handles a change event from the width input component.
         * 
         * @param event   The fired event.
         */
        protected handleHeightInputChange(event: React.SyntheticEvent, value: string): boolean {
            return this.updateSpriteInfo("height", value);
        }

        /**
         * Handles a change event from the name input component.
         * 
         * @param event   The fired event.
         * @returns Whether the new value is different from the old value.
         */
        protected handleNameInputChange(event: React.SyntheticEvent, value: string): boolean {
            return this.updateSpriteInfo("name", value);
        }

        /**
         * Handles a change event from the name input component.
         * 
         * @param event   The fired event.
         * @returns Whether the new value is different from the old value.
         */
        protected handleWidthInputChange(event: React.SyntheticEvent, value: string): boolean {
            return this.updateSpriteInfo("width", value);
        }

        /**
         * Handles a change event from the parsed sprite component.
         * 
         * @param event   The fired event.
         * @returns Whether the new value is different from the old value.
         */
        protected handleConvertedChange(event: React.SyntheticEvent, value: string): boolean {
            return this.updateSpriteInfo("imageConverted", value);
        }

        /**
         * Handles a change event from the palette name sprite component.
         * 
         * @param event   The fired event.
         * @param value   The new palette name.
         */
        protected handlePaletteChange(event: React.SyntheticEvent, value: string): void {
            var palette: Palettes.IPalette = this.props.palettes[value];

            this.setState({ palette } as any);
        }

        /**
         * Updates a single piece of information in the state's spriteInfo.
         * 
         * @param key   The key of the information to update.
         * @param value   A new value for the key.
         * @returns Whether the new value is different from the old value.
         */
        protected updateSpriteInfo(key: string, value: any): boolean {
            if (this.state.spriteInfo[key] === value) {
                return false;
            }

            this.state.spriteInfo[key] = value;
            this.setState(
                {
                    spriteInfo: this.state.spriteInfo
                } as any,
                (): void => {
                    if (this.props.reportChanges) {
                        this.props.reportChanges(this.createPropsCopy(this.props));
                    }
                });

            return true;
        }

        private createPropsCopy(props: IResultProps): IResultProps {
            var output: IResultProps = {} as any,
                i: string;

            for (i in props) {
                if (props.hasOwnProperty(i)) {
                    output[i] = props[i];
                }
            }

            output.initialSpriteInfo = this.state.spriteInfo;
            return output;
        }
    }
}
