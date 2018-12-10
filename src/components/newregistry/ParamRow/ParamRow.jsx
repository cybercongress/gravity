import * as React from 'react';
const styles = require('./ParamRow.css');

export const ParamRow = ({ children, ...props }) => (
    <div {...props} className={styles.paramRow}>
        {children}
    </div>
);
