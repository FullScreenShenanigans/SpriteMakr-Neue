/// <reference path="References/react.d.ts" />
/// <reference path="References/react-dom.d.ts" />
/// <reference path="References/react-global.d.ts" />
/// <reference path="References/RequireAll.ts" />
/// <reference path="SpriteMakr.tsx" />
var SpriteMakr;
(function (SpriteMakr) {
    "use strict";
    document.onreadystatechange = function () {
        if (document.readyState !== "interactive") {
            return;
        }
        // @todo load the individual sections separately
        RequireAll.require("SpriteMakr", main, console.error.bind(console));
    };
    function main() {
        ReactDOM.render(React.createElement(SpriteMakr.SpriteMakr, null), document.querySelector("#app"));
    }
    RequireAll.markRequirements({
        alias: "SpriteMakr",
        path: "SpriteMakr",
        requires: [
            "Button", "EditableResult", "ExpandableButton", "EditorSection", "FileDrop", "FinalResult",
            "Header", "NumberInput", "Result", "ResultsSection", "SettingsSection", "UploadsSection", "TextInput"
        ]
    }, 
    // Inputs
    {
        alias: "Input",
        path: "Components/Inputs/Input",
        requires: ["IconClasses"]
    }, {
        alias: "Button",
        path: "Components/Inputs/Button",
        requires: ["Input"]
    }, {
        alias: "ExpandableButton",
        path: "Components/Inputs/ExpandableButton",
        requires: ["Button", "Input"]
    }, {
        alias: "FileDrop",
        path: "Components/Inputs/FileDrop",
        requires: ["ExpandableButton", "Input"]
    }, {
        alias: "NumberInput",
        path: "Components/Inputs/NumberInput",
        requires: ["SimpleInput"]
    }, {
        alias: "SearchableSelectInput",
        path: "Components/Inputs/SearchableSelectInput",
        requires: ["Button", "SelectInput", "TextInput"]
    }, {
        alias: "SelectInput",
        path: "Components/Inputs/SelectInput",
        requires: ["Input", "TextInput"]
    }, {
        alias: "SimpleInput",
        path: "Components/Inputs/SimpleInput",
        requires: ["Input"]
    }, {
        alias: "TextInput",
        path: "Components/Inputs/TextInput",
        requires: ["Button", "SimpleInput"]
    }, 
    // Icons
    {
        alias: "Icon",
        path: "Components/Inputs/Icons/Icon"
    }, {
        alias: "CheckIcon",
        path: "Components/Inputs/Icons/CheckIcon",
        requires: ["Icon"]
    }, {
        alias: "DownIcon",
        path: "Components/Inputs/Icons/DownIcon",
        requires: ["Icon"]
    }, {
        alias: "EditIcon",
        path: "Components/Inputs/Icons/EditIcon",
        requires: ["Icon"]
    }, {
        alias: "PlusIcon",
        path: "Components/Inputs/Icons/PlusIcon",
        requires: ["Icon"]
    }, {
        alias: "UndoIcon",
        path: "Components/Inputs/Icons/UndoIcon",
        requires: ["Icon"]
    }, {
        alias: "UpIcon",
        path: "Components/Inputs/Icons/UpIcon",
        requires: ["Icon"]
    }, {
        alias: "RedoIcon",
        path: "Components/Inputs/Icons/RedoIcon",
        requires: ["Icon"]
    }, {
        alias: "XIcon",
        path: "Components/Inputs/Icons/XIcon",
        requires: ["Icon"]
    }, {
        alias: "IconClasses",
        path: "Components/Inputs/Icons/IconClasses",
        requires: [
            "CheckIcon", "DownIcon", "EditIcon", "PlusIcon", "UndoIcon",
            "UpIcon", "RedoIcon", "XIcon"
        ]
    }, 
    // Sections
    {
        alias: "Header",
        path: "Components/Sections/Header",
        requires: ["Button"]
    }, {
        alias: "Section",
        path: "Components/Sections/Section",
        requires: ["Header"]
    }, {
        alias: "EditorSection",
        path: "Components/Sections/EditorSection",
        requires: ["Section"]
    }, {
        alias: "ResultsSection",
        path: "Components/Sections/ResultsSection",
        requires: ["Section"]
    }, {
        alias: "SettingsSection",
        path: "Components/Sections/SettingsSection",
        requires: ["NumberInput", "PalettesEditor", "Section"]
    }, {
        alias: "UploadsSection",
        path: "Components/Sections/UploadsSection",
        requires: ["FileDrop", "Section"]
    }, 
    // Results
    {
        alias: "Result",
        path: "Components/Results/Result",
        requires: ["NumberInput", "TextInput", "Preview"]
    }, {
        alias: "EditableResult",
        path: "Components/Results/EditableResult",
        requires: ["Button", "Result"]
    }, {
        alias: "FinalResult",
        path: "Components/Results/FinalResult",
        requires: ["Button", "Result"]
    }, {
        alias: "Preview",
        path: "Components/Results/Preview",
        requires: ["PixelRendr"]
    }, 
    // Palettes
    {
        alias: "PalettesEditor",
        path: "Components/Palettes/PalettesEditor",
        requires: ["Color", "SearchableSelectInput"]
    }, {
        alias: "Color",
        path: "Components/Palettes/Color"
    }, 
    // References
    {
        alias: "ChangeLinr",
        path: "References/ChangeLinr-0.2.0"
    }, {
        alias: "PixelRendr",
        path: "References/PixelRendr-0.2.0",
        requires: ["ChangeLinr", "StringFilr"]
    }, {
        alias: "StringFilr",
        path: "References/StringFilr-0.2.1"
    });
})(SpriteMakr || (SpriteMakr = {}));
