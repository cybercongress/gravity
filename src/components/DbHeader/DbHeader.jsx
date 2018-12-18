import * as React from "react";

const styles = require('./DbHeader.css');

export const DbHeader = ({ children, ...props }) => (
    <div {...props} className={styles.databaseHeader}>
        {children}
    </div>
);

export const DbHeaderLine = ({ children, ...props }) => (
    <div {...props} className={styles.databaseHeaderLine}>
        {children}
    </div>
);

export const DbHeaderLeft = ({ children, ...props }) => (
    <div {...props} className={styles.databaseHeaderLeft}>
        {children}
    </div>
);

export const DbHeaderRight = ({ children, ...props }) => (
    <div {...props} className={styles.databaseHeaderRight}>
        {children}
    </div>
);

export const DbHeaderName = ({ children, ...props }) => (
    <span {...props} className={styles.databaseHeaderName}>
        {children}
    </span>
);
