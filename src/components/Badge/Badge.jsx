import * as React from 'react';

const styles = require('./Badge.css');

export const Badge = ({ children }) => (
    <span className={styles.badge} >
      {children}
    </span>
  );