import * as React from 'react';
import cx from 'classnames';

const styles = require("./button.css");

export const AddNewRecordButton = ({ children, icon, ...props }) => (
  <button  className={styles.AddNewRecordButton} {...props}>
        <span>{children}</span>
        {icon}
  </button>
);
export const ButtonIcon = ({children, ...props}) => (
  <i {...props} className={cx(styles.BttnIcon, styles.BttnIconAdd)}>
      {children}
  </i>
);

export const Button = ({ children, to, color, ...props }) => {
    if (to) {
        return (<a className={styles.Button}>{children}</a>);
    }
    return (
      <button {...props}
        className={cx(styles.PopupButton, {
            [styles.PopupButtonCancel]: props.color === 'cancel',
            [styles.PopupButtonConfirm]: props.color === 'confirm',
            [styles.PopupButtonReject]: props.color === 'reject',
      })}>
        <span>{children}</span>
        {icon}
    </button>
);
};