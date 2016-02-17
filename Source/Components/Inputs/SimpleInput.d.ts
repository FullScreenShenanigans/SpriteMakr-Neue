/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="Input.d.ts" />

declare module SpriteMakr.Components.Inputs {
    /**
     * Handler for when an input's value changes.
     * 
     * @type T   The type of value contained by the input.
     * @param event   The triggering event.
     * @param newValue   The input's new value.
     */
    export interface IInputEventHandler<T> {
        (event: React.SyntheticEvent, newValue: T): void;
    }

    /**
     * Properties for a SimpleInput component.
     * 
     * @type T   The type of value contained by the input.
     */
    export interface ISimpleInputProps<T> extends IInputProps {
        /**
         * Initial value for the input.
         */
        defaultValue?: T;

        /**
         * Whether the input is disabled.
         */
        disabled?: boolean;

        /**
         * Handler for when the value changes.
         */
        onChange?: IInputEventHandler<T>;

        /**
         * Whether the input is read-only.
         */
        readonly?: boolean;
    }

    /**
     * State for a SimpleInput component.
     * 
     * @type T   The type of value contained by the input.
     */
    export interface ISimpleInputState<T> extends IInputState {
        /**
         * The current value for the input.
         */
        value: T;
    }
}
