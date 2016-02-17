/// <reference path="Input.d.ts" />
/// <reference path="Icons/IconClasses.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Inputs;
        (function (Inputs) {
            "use strict";
            /**
             * An abstract class for input components.
             */
            var Input = (function (_super) {
                __extends(Input, _super);
                /**
                 * Initializes a new instance of the Input class.
                 *
                 * @param props   Initial props of the component.
                 * @param context   The component's creation context.
                 */
                function Input(props, context) {
                    _super.call(this, props, context);
                    this.state = {
                        hovering: false
                    };
                }
                /**
                 * Renders the component.
                 *
                 * @returns The rendered component.
                 */
                Input.prototype.render = function () {
                    var _this = this;
                    return (React.createElement("div", {"className": "input input-" + this.getInputClassName(), "onMouseOver": function (event) { return _this.setHovering(event, true); }, "onMouseLeave": function (event) { return _this.setHovering(event, false); }}, this.renderInput()));
                };
                /**
                 * Renders an icon keyed by its String alias.
                 *
                 * @param icon   The String alias of the icon component.
                 * @param props   Props to pass to the icon component.
                 * @returns The rendered icon component.
                 */
                Input.prototype.renderIcon = function (icon, props) {
                    return React.createElement(Inputs.Icons.IconClasses[icon], props);
                };
                /**
                 * Updates the hovering value in state and calls the appropriate handler.
                 *
                 * @param event   The triggering event.
                 * @param hovering   A new value for state.hovering.
                 */
                Input.prototype.setHovering = function (event, hovering) {
                    this.setState({ hovering: hovering });
                    if (hovering) {
                        this.onHoverStart(event);
                    }
                    else {
                        this.onHoverEnd(event);
                    }
                };
                /**
                 * Reacts to hovering starting (by default, a no-op).
                 *
                 * @param event   The triggering event.
                 */
                Input.prototype.onHoverStart = function (event) {
                    if (this.props.onHoverStart) {
                        this.props.onHoverStart(event);
                    }
                };
                /**
                 * Reacts to hovering starting (by default, a no-op).
                 *
                 * @param event   The triggering event.
                 */
                Input.prototype.onHoverEnd = function (event) {
                    if (this.props.onHoverEnd) {
                        this.props.onHoverEnd(event);
                    }
                };
                return Input;
            })(React.Component);
            Inputs.Input = Input;
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
