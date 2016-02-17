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

module SpriteMakr.Components.Inputs.Icons {
    "use strict";

    /**
     * Component classes for icons, keyed by String alias.
     */
    export var IconClasses: IIconClasses = {
        "check": CheckIcon,
        "down": DownIcon,
        "edit": EditIcon,
        "plus": PlusIcon,
        "undo": UndoIcon,
        "up": UpIcon,
        "redo": RedoIcon,
        "x": XIcon,
    };
}
