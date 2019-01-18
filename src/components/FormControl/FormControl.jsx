import * as React from 'react';
const styles = require('./FormControl.css');

export const FormControl = ({ children, ...props }) => (
    <div {...props} className={styles.FormControl}>
        {children}
    </div>
);
