/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="SimpleInput.d.ts" />
/// <reference path="Input.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Inputs;
        (function (Inputs) {
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
            var SimpleInput = (function (_super) {
                __extends(SimpleInput, _super);
                /**
                 * Initialiezs a new instance of the SimpleInput class.
                 *
                 * @param props   Properties for the component.
                 * @param context   Context for the component.
                 */
                function SimpleInput(props, context) {
                    _super.call(this, props, context);
                    this.state = {
                        value: this.props.defaultValue || this.getDefaultValue()
                    };
                }
                /**
                 * Handler for receiving new props. If a provided default value is different
                 * than the current state value, the state is updated.
                 *
                 * @param props   The new props.
                 */
                SimpleInput.prototype.componentWillReceiveProps = function (props) {
                    if (typeof props.defaultValue !== "undefined" && props.defaultValue !== this.state.value) {
                        this.setState({
                            value: props.defaultValue
                        });
                    }
                };
                /**
                 * Gets a className for the input's container.
                 *
                 * @returns A className for the input's container.
                 */
                SimpleInput.prototype.getInputClassName = function () {
                    return "simple-input";
                };
                /**
                 * Handles the input's value being changed and calls props.onChange.
                 *
                 * @param event   The triggering event.
                 */
                SimpleInput.prototype.handleInputChange = function (event) {
                    var value = event.target.value;
                    this.setState({ value: value });
                    if (this.props.onChange) {
                        this.props.onChange(event, value);
                    }
                };
                return SimpleInput;
            })(Inputs.Input);
            Inputs.SimpleInput = SimpleInput;
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
//# sourceMappingURL=SimpleInput.js.map