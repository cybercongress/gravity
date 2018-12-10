import * as React from 'react';
const styles = require('./WideInput.css');

export const WideInput = ({ children, inputRef, ...props }) => (
    <input {...props} ref={inputRef} className={styles.wideInput}>
        {children}
    </input>
);

export const WideSelect = ({ children, inputRef, ...props }) => (
    <select {...props} ref={inputRef} className={styles.wideInput}>
        {children}
    </select>
);
