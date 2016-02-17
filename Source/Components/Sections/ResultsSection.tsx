/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="ResultsSection.d.ts" />

/// <reference path="Header.tsx" />
/// <reference path="../Results/FinalResult.tsx" />

module SpriteMakr.Components.Sections {
    "use strict";

    /**
     * A ResultsSection component.
     */
    export class ResultsSection extends Section<IResultsSectionProps, IResultsSectionState> {
        /**
         * Gets the unique id of the section. 
         * 
         * @returns An id String.
         */
        protected getId(): string {
            return "results";
        }

        /**
         * Renders the section's header. 
         * 
         * @returns The rendered header component.
         */
        protected renderHeader(): JSX.Element {
            return (
                <Header
                    text="Results"
                    buttons={
                        [
                            {
                                icon: "x",
                                text: "Reset",
                                onActivate: (): void => this.props.onResetContents(),
                                onHoverEnd: (): void => this.setHoverColor(),
                                onHoverStart: (): void => this.setHoverColor("red")
                            },
                            {
                                icon: "down",
                                text: "Download All",
                                onActivate: this.downloadResults.bind(this),
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
                <div className="results-container">
                    {this.props.results.map(this.renderResult.bind(this))}
                </div>);
        }

        /**
         * Renders a single result.
         * 
         * @param result   The result.
         * @param i   The result's index within results, as its key.
         */
        private renderResult(result: Components.Results.IFinalResultProps, i: number): JSX.Element {
            return (
                <Components.Results.FinalResult
                    key={result.id}
                    {...result} />);
        }

        /**
         * Triggers a download of the summarized results.
         */
        private downloadResults(): void {
            var link: HTMLAnchorElement = document.createElement("a");

            link.setAttribute("download", "SpriteMakr Results.json");
            link.setAttribute(
                "href",
                "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.summarizeResults())));

            link.click();
        }

        /**
         * Turns the set of results into their imageConverted sprites.
         * 
         * @returns The result summaries...
         * @todo Use a fancy tree structure based on names instead.
         */
        private summarizeResults(): IResultSummaries {
            return this.props.results.map(
                (result: Results.IFinalResultProps): string => {
                    return result.initialSpriteInfo.imageConverted;
                });
        }
    }
}
