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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/// <reference path="Header.d.ts" />
/// <reference path="../Inputs/Button.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        "use strict";
        var Header = /** @class */ (function (_super) {
            __extends(Header, _super);
            function Header() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * Renders the component.
             *
             * @returns The rendered component.
             */
            Header.prototype.render = function () {
                var buttons;
                if (this.props.buttons) {
                    buttons = (React.createElement("div", { className: "header-buttons" }, this.props.buttons
                        .map(function (buttonProps, index) {
                        return (React.createElement("span", { className: "header-button", key: index },
                            React.createElement(Components.Inputs.Button, __assign({}, buttonProps))));
                    })));
                }
                else {
                    buttons = React.createElement("span", { className: "header-no-buttons" });
                }
                return (React.createElement("h1", { className: "header" },
                    React.createElement("span", { className: "header-text" }, this.props.text),
                    buttons));
            };
            return Header;
        }(React.Component));
        Components.Header = Header;
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
