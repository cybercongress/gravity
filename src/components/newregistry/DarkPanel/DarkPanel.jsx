import * as React from 'react';
import styles from './DarkPanel.css';

export const DarkPanel = ({ children, title, noPadding, ...props }) => (
  <div {...props} className={styles.DarkPanel}>
    {title && <h3 className={styles.panelTitle}>{title}</h3>}
    {children}
  </div>
);
