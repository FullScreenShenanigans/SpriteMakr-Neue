/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />
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
/// <reference path="Section.d.ts" />
/// <reference path="Header.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Sections;
        (function (Sections) {
            "use strict";
            /**
             * A Section component.
             */
            var Section = /** @class */ (function (_super) {
                __extends(Section, _super);
                /**
                 * Initializes a new instance of the Section class.
                 *
                 * @param props   Initial props of the component.
                 * @param context   The component's creation context.
                 */
                function Section(props, context) {
                    var _this = _super.call(this, props, context) || this;
                    _this.state = _this.props;
                    return _this;
                }
                /**
                 * Renders the component.
                 *
                 * @returns The rendered component.
                 */
                Section.prototype.render = function () {
                    var className = "section";
                    if (this.state.hoverColor) {
                        className += " section-" + this.state.hoverColor;
                    }
                    return (React.createElement("section", { className: className, id: this.getId() },
                        this.renderHeader(),
                        this.renderContents()));
                };
                /**
                 * Sets or clears a color to tint the section as hovering over
                 *
                 * @param hoverColor   A new tint color, or nothing.
                 */
                Section.prototype.setHoverColor = function (hoverColor) {
                    this.setState({ hoverColor: hoverColor });
                };
                return Section;
            }(React.Component));
            Sections.Section = Section;
        })(Sections = Components.Sections || (Components.Sections = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
