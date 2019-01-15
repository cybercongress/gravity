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

export const PopupNotification = ({ children, open, ...props }) => (
  <div className={cx(styles.popup, { [styles.popupOpen]: open })}>
      <div className={cx(styles.PopupNotification, { [styles.PopupNotificationError]: props.type === 'error' })}>
      <div className={styles.PopupClose}/>
      {children}
    </div>
  </div>
);

export const PopupTitle = ({ children }) => <div className={styles.popupTitle}>{children}</div>;

export const PopupContent = ({ children }) => <div className={styles.popupContent}>{children}</div>;

export const PopupFooter = ({ children }) => <div className={styles.popupFooter}>{children}</div>;

export const PopupBar = ({ children }) => (
  <div className={styles.PopupBar}>
      {children}
  </div>
)

export const PopupSkillBar = ({ children }) => (
  <div className={styles.PopupSkillBar}>
      {children}
  </div>
)

export const PopupBarFooter = ({ children }) => (
  <div className={styles.PopupBarFooter}>{children}</div>);

