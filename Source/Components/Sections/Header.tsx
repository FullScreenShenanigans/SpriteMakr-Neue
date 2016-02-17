/// <reference path="../../References/react.d.ts" />
/// <reference path="../../References/react-dom.d.ts" />
/// <reference path="../../References/react-global.d.ts" />

/// <reference path="Header.d.ts" />

/// <reference path="../Inputs/Button.tsx" />

module SpriteMakr.Components {
    "use strict";

    export class Header extends React.Component<IHeaderProps, void> {
        /**
         * Renders the component.
         * 
         * @returns The rendered component.
         */
        render(): JSX.Element {
            var buttons: JSX.Element;

            if (this.props.buttons) {
                buttons = (
                    <div className="header-buttons">
                        {this.props.buttons
                            .map((buttonProps: Inputs.IButtonProps, index: number): JSX.Element => {
                                return (
                                    <span className="header-button" key={index}>
                                        <Inputs.Button {...buttonProps} />
                                    </span>);
                        })}
                    </div>);
            } else {
                buttons = <span className="header-no-buttons"></span>;
            }

            return (
                <h1 className="header">
                    <span className="header-text">{this.props.text}</span>
                    {buttons}
                </h1>);
        }
    }
}
