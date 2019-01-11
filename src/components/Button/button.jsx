import * as React from 'react';
import cx from 'classnames';
import { ActionLink } from '../..'

const styles = require('./button.css');

export const AddNewRecordButton = ({ children, ...props }) => (
    <button className={ styles.AddNewRecordButton } { ...props }>
        <span>{children}</span>
        {/* {icon} */}
    </button>
);
// export const ButtonIcon = ({children, ...props}) => (
//   <i {...props} className={cx(styles.BttnIcon, styles.BttnIconAdd)}>
//       {children}
//   </i>
// );

export const Button = ({ children, to, ...props }) => {
    if (to) {
        return(
            <ActionLink
            { ...props }
            className={ cx(styles.ActionLink, {
                [styles.ButtonCancel]: props.color === 'cancel',
                [styles.ButtonGreen]: props.color === 'green',
                [styles.ButtonRed]: props.color === 'red',
                [styles.ButtonBlue]: props.color === 'blue',
                [styles.ButtonGreenYellow]: props.color === 'greenyellow',
                [styles.ButtonOrange]: props.color === 'ogange',
                [styles.ButtonOutline]: props.outline,
                [styles.Margin]: props.margin,
                [styles.TextTransform]: props.transformtext,
            }) }
            >
                {children}
            </ActionLink>
        );
    }
    return (
        <button
          { ...props }
          className={ cx(styles.Button, {
                [styles.ButtonCancel]: props.color === 'cancel',
                [styles.ButtonGreen]: props.color === 'green',
                [styles.ButtonRed]: props.color === 'red',
                [styles.ButtonBlue]: props.color === 'blue',
                [styles.ButtonGreenYellow]: props.color === 'greenyellow',
                [styles.ButtonOrange]: props.color === 'ogange',
                [styles.ButtonOutline]: props.outline,
                [styles.TextTransform]: props.transformtext,
                [styles.Margin]: props.margin,
            }) }
        >
            {children}
        </button>
    );
};
