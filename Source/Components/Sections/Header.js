/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="Header.d.ts" />
/// <reference path="../Inputs/Button.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        "use strict";
        var Header = (function (_super) {
            __extends(Header, _super);
            function Header() {
                _super.apply(this, arguments);
            }
            /**
             * Renders the component.
             *
             * @returns The rendered component.
             */
            Header.prototype.render = function () {
                var buttons;
                if (this.props.buttons) {
                    buttons = (React.createElement("div", {"className": "header-buttons"}, this.props.buttons
                        .map(function (buttonProps, index) {
                        return (React.createElement("span", {"className": "header-button", "key": index}, React.createElement(Components.Inputs.Button, React.__spread({}, buttonProps))));
                    })));
                }
                else {
                    buttons = React.createElement("span", {"className": "header-no-buttons"});
                }
                return (React.createElement("h1", {"className": "header"}, React.createElement("span", {"className": "header-text"}, this.props.text), buttons));
            };
            return Header;
        })(React.Component);
        Components.Header = Header;
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
//# sourceMappingURL=Header.js.map