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

export const PopupButtun = ({ children, ...props }) => (
  <button
    className={cx(styles.PopupButtun, {
      [styles.PopupButtunCansel]: props.type === 'cansel',
      [styles.PopupButtunConfirm]: props.type === 'confirm',
      [styles.PopupButtunReject]: props.type === 'reject'
    })}
  >
    {children}
  </button>
);