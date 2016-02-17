/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="TextInput.d.ts" />
/// <reference path="Button.tsx" />
/// <reference path="SimpleInput.tsx" />
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
            var TextInput = (function (_super) {
                __extends(TextInput, _super);
                function TextInput() {
                    _super.apply(this, arguments);
                }
                /**
                 * Renders the component.
                 *
                 * @returns The rendered component.
                 */
                TextInput.prototype.renderInput = function () {
                    return (React.createElement("input", {"disabled": this.props.disabled, "onChange": this.handleInputChange.bind(this), "pattern": this.props.pattern, "placeholder": this.props.placeholder, "readOnly": this.props.readonly, "type": "text", "value": this.state.value}));
                };
                /**
                 * Gets a className for the input's container.
                 *
                 * @returns A className for the input's container.
                 */
                TextInput.prototype.getInputClassName = function () {
                    return _super.prototype.getInputClassName.call(this) + " text-input";
                };
                /**
                 * Gets the default initial value for the input if not provided in props.
                 *
                 * @returns A default initial input value.
                 */
                TextInput.prototype.getDefaultValue = function () {
                    return "";
                };
                return TextInput;
            })(Inputs.SimpleInput);
            Inputs.TextInput = TextInput;
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
//# sourceMappingURL=TextInput.js.map