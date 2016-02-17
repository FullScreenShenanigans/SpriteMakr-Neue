/// <reference path="FinalResult.d.ts" />

/// <reference path="Result.tsx" />
/// <reference path="../Inputs/Button.tsx" />

module SpriteMakr.Components.Results {
    "use strict";

    /**
     * A FinalResult component.
     */
    export class FinalResult extends Result<IFinalResultProps, IFinalResultState> {
        /**
         * Gets the class name for the outermost container component.
         * 
         * @returns The outermost container's className.
         */
        protected getClassName(): string {
            return super.getClassName() + " result-final";
        }

        /**
         * Renders the component's name display.
         * 
         * @returns A rendered name component.
         */
        protected renderName(): JSX.Element {
            return <h3>{this.state.spriteInfo.name}</h3>;
        }

        /**
         * Renders the unique top-right button copmonent.
         * 
         * @returns A rendered button component.
         */
        protected renderTopRightButton(): JSX.Element {
            return (
                <Inputs.Button
                    icon="x"
                    onActivate={(): void => this.clearSpriteInfo()}
                    onHoverEnd={(): void => this.setButtonHovering(false)}
                    onHoverStart={(): void => this.setButtonHovering(true)} />);
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
                <span className="result-info-sizing constant">
                    <span className="sizing-constant">{width}</span>
                    x
                    <span className="sizing-constant">{height}</span>
                </span>);
        }

        /**
         * Renders the actionable area after sizing.
         * 
         * @returns The rendered actionable area container component.
         */
        protected renderActions(): JSX.Element {
            return (
                <span className="result-no-actions constant">
                    <span className="slash">/</span>
                    {this.state.palette.name}
                </span>);
        }

        /**
         * Renders the textual display of the sprite data.
         * 
         * @returns The rendered textual display.
         */
        protected renderSpriteData(): JSX.Element {
            return (
                <span className="result-info-sprite-parsed">
                    <Inputs.TextInput
                        defaultValue={this.props.initialSpriteInfo.imageConverted}
                        readonly={true} />
                </span>);
        }
    }
}
