import * as React from 'react';

const styles = require("./Table.css");

export const HomeTable = ({ children }) => (
    <table className={styles.table}>
        {children}
    </table>
);

export const TableRegistry = ({ children }) => (
    <table className={styles.TableRegistry}>
        {children}
    </table>
);

export const TableItemBen = ({ children }) => (
    <table className={styles.TableItemBen}>
        {children}
    </table>
);

export const TableItem = ({ children }) => (
    <div className={styles.TableItem}>
        {children}
    </div>
);

export const TableRow = ({ children }) => (
    <div className={styles.TableRow}>
        {children}
    </div>
);

export const TableAddRow = ({ children }) => (
    <div className={styles.TableAddRow}>
        {children}
    </div>
);

export const TableAddItem = ({ children }) => (
    <div className={styles.TableAddItem}>
        {children}
    </div>
);