/// <reference path="SelectInput.d.ts" />

/// <reference path="Button.tsx" />
/// <reference path="TextInput.tsx" />

module SpriteMakr.Components.Inputs {
    "use strict";

    /**
     * A simple text input with a String value.
     */
    export class SelectInput extends SimpleInput<string, ISelectInputProps, ISelectInputState> {
        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        renderInput(): JSX.Element {
            return (
                <select
                    onChange={this.handleInputChange.bind(this)}
                    value={this.state.value}>
                    {this.props.options.map(this.renderOption.bind(this))}
                </select>);
        }

        /**
         * Renders a single option.
         * 
         * @param option   The option's value.
         */
        protected renderOption(option: string): JSX.Element {
            return <option key={option} value={option}>{option}</option>;
        }

        /**
         * Gets a className for the input's container.  
         * 
         * @returns A className for the input's container.
         */
        protected getInputClassName(): string {
            return super.getInputClassName() + " select-input";
        }

        /**
         * Gets the default initial value for the input if not provided in props.
         * 
         * @returns A default initial input value.
         */
        protected getDefaultValue(): string {
            return this.props.options[0];
        }
    }
}
