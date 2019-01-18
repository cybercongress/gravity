import * as React from 'react';

const styles = require('./Panel.css');

export const Panel = ({ children, title, noPadding, ...props }) => (
    <div {...props} className={styles.panel}>
        {title && <h3 className={styles.panelTitle}>{title}</h3>}
        {noPadding ? children : <div className={styles.panelContent}>{children}</div>}
    </div>
);