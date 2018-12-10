import * as React from 'react';
const styles = require("./BlockRow.css");

export const BlockRow = ({ children }) => (
    <div className={styles.blockRow}>
        {children}
    </div>
);
