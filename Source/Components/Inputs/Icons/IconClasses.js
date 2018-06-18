/// <reference path="../../../References/react.d.ts" />
/// <reference path="../../../References/react-dom.d.ts" />
/// <reference path="../../../References/react-global.d.ts" />
/// <reference path="Icon.d.ts" />
/// <reference path="CheckIcon.tsx" />
/// <reference path="DownIcon.tsx" />
/// <reference path="EditIcon.tsx" />
/// <reference path="PlusIcon.tsx" />
/// <reference path="UndoIcon.tsx" />
/// <reference path="UpIcon.tsx" />
/// <reference path="RedoIcon.tsx" />
/// <reference path="XIcon.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    var Components;
    (function (Components) {
        var Inputs;
        (function (Inputs) {
            var Icons;
            (function (Icons) {
                "use strict";
                /**
                 * Component classes for icons, keyed by String alias.
                 */
                Icons.IconClasses = {
                    "check": Icons.CheckIcon,
                    "down": Icons.DownIcon,
                    "edit": Icons.EditIcon,
                    "plus": Icons.PlusIcon,
                    "undo": Icons.UndoIcon,
                    "up": Icons.UpIcon,
                    "redo": Icons.RedoIcon,
                    "x": Icons.XIcon
                };
            })(Icons = Inputs.Icons || (Inputs.Icons = {}));
        })(Inputs = Components.Inputs || (Components.Inputs = {}));
    })(Components = SpriteMakr.Components || (SpriteMakr.Components = {}));
})(SpriteMakr || (SpriteMakr = {}));
