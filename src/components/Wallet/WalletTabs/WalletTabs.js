import React from 'react';
import cx from 'classnames';

const styles = require('./WalletTabs.css');
// import './WalletTabs.css';

export const WalletTabs = ({ vertical, ...props }) => (
    <div { ...props } className={cx(styles.wallet_tabs,{[styles.wallet_tabs__vertical]: vertical})} />
);

export const WalletTab = ({ children, isActive, onClick }) => (
    <button
        onClick={ onClick }
        className={cx(styles.wallet_tabs__tab, {[styles.wallet_tabs__active]: isActive})}
    >
        {children}
    </button>
);
