/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="TextInput.d.ts" />

/// <reference path="Button.tsx" />
/// <reference path="SimpleInput.tsx" />

module SpriteMakr.Components.Inputs {
    "use strict";

    /**
     * A simple text input with a String value.
     */
    export class TextInput extends SimpleInput<string, ITextInputProps, ITextInputState> {
        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        renderInput(): JSX.Element {
            return (
                <input
                    disabled={this.props.disabled}
                    onChange={this.handleInputChange.bind(this) }
                    pattern={this.props.pattern}
                    placeholder={this.props.placeholder}
                    readOnly={this.props.readonly}
                    type="text"
                    value={this.state.value} />);
        }

        /**
         * Gets a className for the input's container.  
         * 
         * @returns A className for the input's container.
         */
        protected getInputClassName(): string {
            return super.getInputClassName() + " text-input";
        }

        /**
         * Gets the default initial value for the input if not provided in props.
         * 
         * @returns A default initial input value.
         */
        protected getDefaultValue(): string {
            return "";
        }
    }
}
