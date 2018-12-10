import * as React from 'react';
const styles = require('./Description.css');

export const Description = ({ children, ...props }) => (
    <div {...props} className={styles.description}>
        {children}
    </div>
);
