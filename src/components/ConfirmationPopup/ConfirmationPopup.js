import React from 'react';

// import './ConfirmationPopup.css';
const styles = require('./ConfirmationPopup.css');

export const Address = ({ children }) => (
    <span className={styles.address}>
        {children}
    </span>
);

export const PopupLabel = ({ children }) => (
    <div className={styles.popup_label}>
        {children}
    </div>
);

export const ConfirmationPopupContent = ({ children }) => (
    <div className={styles.confirmation_popup__popup}>
        {children}
    </div>
);

export const ConfirmationPopup = ({ children }) => (
    <div className={styles.confirmation_popup}>
        <span>
        {children}
        </span>
    </div>
);


export const ConfirmationPopupButtons = ({
    children,
}) => (
    <div className={styles.confirmation_popup__buttons}>
        {children}
    </div>
);

export const TxDetailsContainer = ({ children }) => (
    <div className={styles.tx_details_container}>
        {children}
    </div>
);
