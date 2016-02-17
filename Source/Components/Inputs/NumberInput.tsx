/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="NumberInput.d.ts" />

/// <reference path="SimpleInput.tsx" />

module SpriteMakr.Components.Inputs {
    "use strict";

    /**
     * A simple text input with a Number value.
     */
    export class NumberInput extends SimpleInput<number, INumberInputProps, INumberInputState> {
        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        renderInput(): JSX.Element {
            return (
                <input
                    disabled={this.props.disabled}
                    max={this.props.max}
                    min={this.props.min}
                    onChange={this.handleInputChange.bind(this)}
                    readOnly={this.props.readonly}
                    value={this.state.value && this.state.value.toString()}
                    type="number" />);
        }

        /**
         * Gets a className for the input's container.  
         * 
         * @returns A className for the input's container.
         */
        protected getInputClassName(): string {
            return super.getInputClassName() + " number-input";
        }

        /**
         * Gets the default initial value for the input if not provided in props.
         * 
         * @returns A default initial input value.
         */
        protected getDefaultValue(): number {
            return 0;
        }
    }
}
