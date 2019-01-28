import React from 'react';
import cx from 'classnames';

const styles = require('./Navigation.css');


const Navigation = ({ children, isHome }) => (
    <div className={cx(styles.navigation, {[styles.navigation__hide_lr]: isHome})}>
        {children}
    </div>
);


export const NavigationLeft = ({ children }) => (
    <div className={styles.navigation__left}>
        {children}
    </div>
);

export const NavigationRight = ({ children }) => (
    <div className={styles.navigation__right}>
        {children}
    </div>
);

export const NavigationCenter = ({ children }) => (
    <div className={styles.navigation__center}>
        {children}
    </div>
);

export const MenuButton = ({ openMenu, ...props}) => (
    <button { ...props } className={cx(styles.MenuButton, {[styles.MenuButton__open]: openMenu})}>
        <span className={styles.MenuButton_line1} />
        <span className={styles.MenuButton_line2} />
        <span className={styles.MenuButton_line3} />
    </button>
);

export default Navigation;
