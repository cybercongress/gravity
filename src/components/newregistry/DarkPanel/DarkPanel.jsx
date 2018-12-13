import * as React from 'react';
import styles from '../DarkPanel/DarkPanel.css';

export const DarkPanel = ({ children, title, noPadding, ...props }) => (
  <div {...props} className={styles.DarkPanel}>
    {title && <h3 className={styles.panelTitle}>{title}</h3>}
    {noPadding ? children : <div className={styles.panelContent}>
      {children}
    </div>}
  </div>
);