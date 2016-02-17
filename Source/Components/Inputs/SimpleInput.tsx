/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="SimpleInput.d.ts" />

/// <reference path="Input.tsx" />

module SpriteMakr.Components.Inputs {
    "use strict";

    /**
     * General abstract class for simple, near-native inputs.
     * 
     * @type T   The type of value contained by the input.
     * @type TProps   Type of properties for the component.
     * @type TState   Type of state for the component.
     * @remarks It would be preferable to type TProps and TState as across T,
     *          but that isn't allowed in TypeScript.
     */
    export abstract class SimpleInput<T, TProps extends ISimpleInputProps<any>, TState extends ISimpleInputState<any>>
        extends Input<TProps, TState> {
        /**
         * Initialiezs a new instance of the SimpleInput class.
         * 
         * @param props   Properties for the component. 
         * @param context   Context for the component.
         */
        constructor(props?: TProps, context?: any) {
            super(props, context);

            this.state = {
                value: this.props.defaultValue || this.getDefaultValue()
            } as TState;
        }

        /**
         * Handler for receiving new props. If a provided default value is different
         * than the current state value, the state is updated.
         * 
         * @param props   The new props.
         */
        componentWillReceiveProps(props: TProps): void {
            if (typeof props.defaultValue !== "undefined" && props.defaultValue !== this.state.value) {
                this.setState({
                    value: props.defaultValue
                } as any);
            }
        }

        /**
         * Gets a className for the input's container.  
         * 
         * @returns A className for the input's container.
         */
        protected getInputClassName(): string {
            return "simple-input";
        }

        /**
         * Handles the input's value being changed and calls props.onChange.
         * 
         * @param event   The triggering event.
         */
        protected handleInputChange(event: React.FormEvent): void {
            var value: string = (event.target as any).value;

            this.setState({ value } as any);

            if (this.props.onChange) {
                this.props.onChange(event, value);
            }
        }

        /**
         * Gets the default initial value for the input if not provided in props.
         * 
         * @returns A default initial input value.
         */
        protected abstract getDefaultValue(): T;
    }
}
