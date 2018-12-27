import * as React from 'react';

const styles = require('./DatabaseItemsContainer.css');

export const DatabaseItemsContainer = ({children}) => (
    <div className={styles.DatabaseItemsContainer}>
        {children}
    </div>
);
