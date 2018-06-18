/// <reference path="SearchableSelectInput.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="Button.tsx" />
/// <reference path="TextInput.tsx" />
/// <reference path="SelectInput.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Inputs;
        (function (Inputs) {
            "use strict";
            /**
             * A simple text input with a String value.
             */
            var SearchableSelectInput = /** @class */ (function (_super) {
                __extends(SearchableSelectInput, _super);
                function SearchableSelectInput() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Renders the component.
                 *
                 * @returns The rendered component.
                 * @todo Move the filter and options to a private variable, and only
                 *       recompute when necessary.
                 */
                SearchableSelectInput.prototype.renderInput = function () {
                    var filter = ((this.state && this.state.filter) || "").toLowerCase(), options = this.props.options
                        .filter(function (option) {
                        return option.toLowerCase().indexOf(filter) !== -1;
                    })
                        .sort()
                        .map(this.renderOption.bind(this));
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
                    return (React.createElement("div", { className: "select-input-options" }, options));
                };
                /**
                 * Renders a single option.
                 *
                 * @param option   The option's value.
                 */
                SearchableSelectInput.prototype.renderOption = function (option) {
                    var _this = this;
                    var className = "select-input-option", isSelected = this.state.value === option;
                    if (isSelected) {
                        className += " option-selected";
                    }
                    else {
                        className += " option-not-selected";
                    }
                    return (React.createElement("div", { onClick: function (event) { return _this.selectOption(event, option); }, className: className, key: option }, this.renderOptionText(option /*, isSelected*/)));
                };
                /**
                 * Gets a className for the input's container.
                 *
                 * @returns A className for the input's container.
                 */
                SearchableSelectInput.prototype.getInputClassName = function () {
                    return _super.prototype.getInputClassName.call(this) + " searchable-select-input";
                };
                /**
                 *
                 * @param option
                 * @param isSelected
                 */
                SearchableSelectInput.prototype.renderOptionText = function (option, isSelected) {
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
                    return React.createElement("span", { className: "select-input-option-text" }, option);
                };
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
                SearchableSelectInput.prototype.selectOption = function (event, option) {
                    this.setState({
                        filter: "",
                        value: option
                    });
                    this.props.onChange(event, option);
                };
                return SearchableSelectInput;
            }(Inputs.SelectInput));
            Inputs.SearchableSelectInput = SearchableSelectInput;
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
