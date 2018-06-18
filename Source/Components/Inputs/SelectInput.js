/// <reference path="SelectInput.d.ts" />
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
            var SelectInput = /** @class */ (function (_super) {
                __extends(SelectInput, _super);
                function SelectInput() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Renders the component.
                 *
                 * @returns The rendered component.
                 */
                SelectInput.prototype.renderInput = function () {
                    return (React.createElement("select", { onChange: this.handleInputChange.bind(this), value: this.state.value }, this.props.options.map(this.renderOption.bind(this))));
                };
                /**
                 * Renders a single option.
                 *
                 * @param option   The option's value.
                 */
                SelectInput.prototype.renderOption = function (option) {
                    return React.createElement("option", { key: option, value: option }, option);
                };
                /**
                 * Gets a className for the input's container.
                 *
                 * @returns A className for the input's container.
                 */
                SelectInput.prototype.getInputClassName = function () {
                    return _super.prototype.getInputClassName.call(this) + " select-input";
                };
                /**
                 * Gets the default initial value for the input if not provided in props.
                 *
                 * @returns A default initial input value.
                 */
                SelectInput.prototype.getDefaultValue = function () {
                    return this.props.options[0];
                };
                return SelectInput;
            }(Inputs.SimpleInput));
            Inputs.SelectInput = SelectInput;
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
