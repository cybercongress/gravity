import * as React from 'react';
import cx from 'classnames';

const styles = require('./MenuPopup.less');

export const MenuPopup = ({children, ...props}) => (
    <ul {...props} className={styles.menuPopup}>
        {children}
    </ul>
);
export const MenuPopupLinkHash = ({children, ...props}) => (
    <ul {...props} className={styles.menuPopupLinkHash}>
        {children}
    </ul>
);


export const MenuPopupItem = ({children, icon, ...props}) => (
    <li {...props} className={styles.menuPopupItem}>
        {icon}
        <span>{children}</span>
    </li>
);

export const ItemLinkHash = ({children, icon, ...props}) => (
    <li {...props} className={styles.ItemLinkHash}>
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

export const MenuPopupTransferIcon = ({children, ...props}) => (
    <i {...props} className={cx(styles.menuIcon, styles.IconTransfer)}>
        {children}
    </i>
);

export const MenuPopupAccountIcon = ({children, ...props}) => (
    <i {...props} className={cx(styles.menuIcon, styles.MenuPopupAccountIcon)}>
        {children}
    </i>
);

export const MenuPopupResumeIcon = ({children, ...props}) => (
    <i {...props} className={cx(styles.menuIcon, styles.IconResume)}>
        {children}
    </i>
);

export const MenuPopupPauseIcon = ({children, ...props}) => (
    <i {...props} className={cx(styles.menuIcon, styles.IconPause)}>
        {children}
    </i>
);

export const MenuPopupDeleteIcon = ({children, ...props}) => (
    <i {...props} className={cx(styles.menuIcon, styles.IconDelete)}>
        {children}
    </i>
);

export const MenuPopupEditIcon = ({children, ...props}) => (
    <i {...props} className={cx(styles.menuIcon, styles.IconEdit)}>
        {children}
    </i>
);

