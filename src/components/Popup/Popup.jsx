import * as React from 'react';
import cx from 'classnames';

const styles = require('./Popup.css');

export const Popup = ({ children, open, ...props }) => (
  <div className={cx(styles.popup, { [styles.popupOpen]: open })}>
    <div className={cx(styles.popupInner, { [styles.popupInnerDelete]: props.type === 'delete' })}>
      {children}
    </div>
  </div>
);

export const PopupTitle = ({ children }) => <div className={styles.popupTitle}>{children}</div>;

export const PopupContent = ({ children }) => <div className={styles.popupContent}>{children}</div>;

export const PopupFooter = ({ children }) => <div className={styles.popupFooter}>{children}</div>;


export const PopupButton = ({ children, ...props }) => (
  <button
     {...props}
    className={cx(styles.PopupButton, {
      [styles.PopupButtonCancel]: props.type === 'cancel',
      [styles.PopupButtonConfirm]: props.type === 'confirm',
      [styles.PopupButtonReject]: props.type === 'reject'
    })}
  >
    {children}
  </button>
);

export const PopupBar = ({ children }) => (
  <div className={styles.PopupBar}>
      {children}
  </div>
);

export const PopupBarFooter = ({ children }) => (
  <div className={styles.PopupBarFooter}>{children}</div>);

export const PopupBarButtun = ({ children}) => (
  <button className={styles.PopupBarButtun}>
    {children}
  </button>
);
