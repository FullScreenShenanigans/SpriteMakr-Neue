/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="NumberInput.d.ts" />
/// <reference path="SimpleInput.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Inputs;
        (function (Inputs) {
            "use strict";
            /**
             * A simple text input with a Number value.
             */
            var NumberInput = (function (_super) {
                __extends(NumberInput, _super);
                function NumberInput() {
                    _super.apply(this, arguments);
                }
                /**
                 * Renders the component.
                 *
                 * @returns The rendered component.
                 */
                NumberInput.prototype.renderInput = function () {
                    return (React.createElement("input", {"disabled": this.props.disabled, "max": this.props.max, "min": this.props.min, "onChange": this.handleInputChange.bind(this), "readOnly": this.props.readonly, "value": this.state.value && this.state.value.toString(), "type": "number"}));
                };
                /**
                 * Gets a className for the input's container.
                 *
                 * @returns A className for the input's container.
                 */
                NumberInput.prototype.getInputClassName = function () {
                    return _super.prototype.getInputClassName.call(this) + " number-input";
                };
                /**
                 * Gets the default initial value for the input if not provided in props.
                 *
                 * @returns A default initial input value.
                 */
                NumberInput.prototype.getDefaultValue = function () {
                    return 0;
                };
                return NumberInput;
            })(Inputs.SimpleInput);
            Inputs.NumberInput = NumberInput;
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
//# sourceMappingURL=NumberInput.js.map