import * as React from 'react';
import cx from 'classnames';

const styles = require('./MenuPopup.css');

export const MenuPopup = ({children, ...props}) => (
    <ul {...props} className={styles.menuPopup}>
        {children}
    </ul>
);

export const MenuPopupItem = ({children, icon, ...props}) => (
    <li {...props} className={styles.menuPopupItem}>
        {icon}
        <span>{children}</span>
    </li>
);

export const MenuSeparator = ({children, ...props}) => (
    <li {...props} className={styles.menuSeparator}>
        {children}
    </li>
);

// ICONS

export const MenuPopupEditIcon = ({children, ...props}) => (
    <i {...props} className={cx(styles.menuIcon, styles.menuIconEdit)}>
        {children}
    </i>
);

export const MenuPopupTransferIcon = ({children, ...props}) => (
    <i {...props} className={cx(styles.menuIcon, styles.menuIconTransfer)}>
        {children}
    </i>
);

export const MenuPopupResumeIcon = ({children, ...props}) => (
    <i {...props} className={cx(styles.menuIcon, styles.menuIconResume)}>
        {children}
    </i>
);

export const MenuPopupPauseIcon = ({children, ...props}) => (
    <i {...props} className={cx(styles.menuIcon, styles.menuIconPause)}>
        {children}
    </i>
);

export const MenuPopupDeleteIcon = ({children, ...props}) => (
    <i {...props} className={cx(styles.menuIcon, styles.menuIconDelete)}>
        {children}
    </i>
);

export const MenuPopupDeletePencilIcon = ({children, ...props}) => (
    <i {...props} className={cx(styles.menuIcon, styles.menuIconDeletePencil)}>
        {children}
    </i>
);

