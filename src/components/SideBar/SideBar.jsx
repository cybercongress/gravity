import * as React from 'react';

const styles = require('./SideBar.css');

export const SideBar = ({ children, title, ...props }) => (
  <div {...props} className={styles.sideBar}>
    {title && (
      <div className={styles.label} style={{ background: '#4a90e2' }}>
        {title}
      </div>
    )}
    {children}
  </div>
);