import * as React from 'react';
import cx from 'classnames';

const styles = require('./Popup.css');

export const Popup = ({ children, open }) => (
  <div className={cx(styles.popup, { [styles.popupOpen]: open })}>
    <div className={styles.popupInner}>{children}</div>
  </div>
);

export const PopupTitle = ({ children }) => <div className={styles.popupTitle}>{children}</div>;

export const PopupContent = ({ children }) => <div className={styles.popupContent}>{children}</div>;

export const PopupFooter = ({ children }) => <div className={styles.popupFooter}>{children}</div>;

export const PopupButton = ({ children, ...props}) => (
    <button
      {...props}
      className={cx(styles.PopupButtun, {
        [styles.PopupButtunCansel]: props.type === 'cancel',
        [styles.PopupButtunConfirm]: props.type === 'confirm',
      })}>
      {children}
  </button>
  );
