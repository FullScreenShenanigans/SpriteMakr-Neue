/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="Section.d.ts" />

/// <reference path="Header.tsx" />

module SpriteMakr.Components.Sections {
    "use strict";

    /**
     * A Section component.
     */
    export abstract class Section<TProps extends ISectionProps, TState extends ISectionState> extends React.Component<TProps, TState> {
        /**
         * Initializes a new instance of the Section class.
         * 
         * @param props   Initial props of the component.
         * @param context   The component's creation context.
         */
        constructor(props?: TProps, context?: any) {
            super(props, context);

            this.state = this.props as any;
        }

        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        render(): JSX.Element {
            var className: string = "section";

            if (this.state.hoverColor) {
                className += " section-" + this.state.hoverColor;
            }

            return (
                <section className={className} id={this.getId()}>
                    {this.renderHeader()}
                    {this.renderContents()}
                </section>);
        }

        /**
         * Gets the unique id of the section. 
         * 
         * @returns An id String.
         */
        protected abstract getId(): string;

        /**
         * Sets or clears a color to tint the section as hovering over
         * 
         * @param hoverColor   A new tint color, or nothing.
         */
        protected setHoverColor(hoverColor?: string): void {
            this.setState({ hoverColor } as any);
        }

        /**
         * Renders the section's header. 
         * 
         * @returns The rendered header component.
         */
        protected abstract renderHeader(): JSX.Element;

        /**
         * Renders the section's contents.
         * 
         * @returns The rendered content components.
         */
        protected abstract renderContents(): JSX.Element;
    }
}
