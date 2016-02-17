/// <reference path="Input.d.ts" />
/// <reference path="Icons/IconClasses.ts" />

module SpriteMakr.Components.Inputs {
    "use strict";

    /**
     * An abstract class for input components.
     */
    export abstract class Input<TProps extends IInputProps, TState extends IInputState> extends React.Component<TProps, TState> {
        /**
         * Initializes a new instance of the Input class.
         * 
         * @param props   Initial props of the component.
         * @param context   The component's creation context.
         */
        constructor(props?: TProps, context?: any) {
            super(props, context);

            this.state = {
                hovering: false
            } as any;
        }

        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        render(): JSX.Element {
            return (
                <div
                    className={"input input-" + this.getInputClassName() }
                    onMouseOver={(event: React.MouseEvent) => this.setHovering(event, true) }
                    onMouseLeave={(event: React.MouseEvent) => this.setHovering(event, false) }>
                    {this.renderInput() }
                    </div>);
        }

        /**
         * Gets a className for the input's container.  
         * 
         * @returns A className for the input's container.
         */
        protected abstract getInputClassName(): string;

        /**
         * Renders the actual input component inside its container.
         * 
         * @returns The rendered input component.
         */
        protected abstract renderInput(): JSX.Element;

        /**
         * Renders an icon keyed by its String alias.
         * 
         * @param icon   The String alias of the icon component.
         * @param props   Props to pass to the icon component.
         * @returns The rendered icon component.
         */
        protected renderIcon(icon: string, props?: any): JSX.Element {
            return React.createElement(Icons.IconClasses[icon], props);
        }

        /**
         * Updates the hovering value in state and calls the appropriate handler.  
         * 
         * @param event   The triggering event.
         * @param hovering   A new value for state.hovering.
         */
        protected setHovering(event: React.MouseEvent, hovering: boolean): void {
            this.setState({ hovering } as any);

            if (hovering) {
                this.onHoverStart(event);
            } else {
                this.onHoverEnd(event);
            }
        }

        /**
         * Reacts to hovering starting (by default, a no-op).
         * 
         * @param event   The triggering event.
         */
        protected onHoverStart(event: React.MouseEvent): void {
            if (this.props.onHoverStart) {
                this.props.onHoverStart(event);
            }
        }

        /**
         * Reacts to hovering starting (by default, a no-op).
         * 
         * @param event   The triggering event.
         */
        protected onHoverEnd(event: React.MouseEvent): void {
            if (this.props.onHoverEnd) {
                this.props.onHoverEnd(event);
            }
        }
    }
}
