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
                [styles.ButtonConfirm]: props.color === 'confirm',
                [styles.ButtonReject]: props.color === 'reject',
                [styles.ButtonNext]: props.color === 'next',
                [styles.ButtonOutline]: props.outline,
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
                [styles.ButtonConfirm]: props.color === 'confirm',
                [styles.ButtonReject]: props.color === 'reject',
                [styles.ButtonNext]: props.color === 'next',
                [styles.ButtonOutline]: props.outline,
            }) }
        >
            {children}
        </button>
    );
};
