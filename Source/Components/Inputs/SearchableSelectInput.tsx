/// <reference path="SearchableSelectInput.d.ts" />

/// <reference path="Button.tsx" />
/// <reference path="TextInput.tsx" />
/// <reference path="SelectInput.tsx" />

module SpriteMakr.Components.Inputs {
    "use strict";

    /**
     * A simple text input with a String value.
     */
    export class SearchableSelectInput extends SelectInput {
        /**
         * The state of the component.
         */
        state: ISearchableSelectInputState;

        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         * @todo Move the filter and options to a private variable, and only
         *       recompute when necessary.
         */
        renderInput(): JSX.Element {
            var filter: string = ((this.state && this.state.filter) || "").toLowerCase(),
                options: JSX.Element[] = this.props.options
                    .filter((option: string): boolean => {
                        return option.toLowerCase().indexOf(filter) !== -1;
                    })
                    .sort()
                    .map(this.renderOption.bind(this)) as JSX.Element[];

            // For now, we just render the options (no need for searching)
            // return (
            //    <div className="select-input-inner">
            //        <TextInput
            //            onChange={this.setFilter.bind(this) }
            //            placeholder="Palettes" />
            //        <div className="select-input-options">
            //            {options}
            //        </div>
            //    </div>);
            return (
                <div className="select-input-options">
                    {options}
                </div>);
        }

        /**
         * Renders a single option.
         * 
         * @param option   The option's value.
         */
        protected renderOption(option: string): JSX.Element {
            var className: string = "select-input-option",
                isSelected: boolean = this.state.value === option;

            if (isSelected) {
                className += " option-selected";
            } else {
                className += " option-not-selected";
            }

            return (
                <div
                    onClick={(event: React.SyntheticEvent) => this.selectOption(event, option) }
                    className={className}
                    key={option}>
                    {this.renderOptionText(option/*, isSelected*/)}
                </div>);
        }

        /**
         * Gets a className for the input's container.  
         * 
         * @returns A className for the input's container.
         */
        protected getInputClassName(): string {
            return super.getInputClassName() + " searchable-select-input";
        }

        /**
         * 
         * @param option
         * @param isSelected
         */
        private renderOptionText(option: string, isSelected?: boolean): JSX.Element {
            // if (isSelected) {
            //     return (
            //         <TextInput
            //             defaultValue={option}
            //             onChange={(event: React.SyntheticEvent, newValue: string) => {
            //                 console.log("oh");
            //                 this.changeOption(event, option, newValue);
            //             }} />
            //         );
            // }

            return <span className="select-input-option-text">{option}</span>;
        }

        // /**
        //  * Updates the filter value from the user typing into the input.
        //  * 
        //  * @param event   The triggering event.
        //  */
        // private setFilter(event: React.KeyboardEvent): void {
        //     this.setState({
        //         editing: null,
        //         filter: (event.target as any).value
        //     } as any);
        // }

        /**
         * Updates the selected value and clears the filter.
         * 
         * @param value   The new value.
         */
        private selectOption(event: React.SyntheticEvent, option: string): void {
            this.setState(
                {
                    filter: "",
                    value: option,
                } as any);

            this.props.onChange(event, option);
        }

        // /**
        //  * 
        //  * 
        //  * @param event   
        //  * @param option   
        //  * @param newValue   
        //  */
        // private changeOption(event: React.SyntheticEvent, option: string, newValue: string): void {
        //     this.setState({
        //         value: newValue
        //     });
        // }
    }
}
