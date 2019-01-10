import * as React from 'react';

const styles = require('./WideInput.css');

export const LinkContainer = ({children}) => (
    <select {...props} ref={inputRef} className={styles.LinkContainer}>
        {children}
    </select>
);
