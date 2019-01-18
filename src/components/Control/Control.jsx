import * as React from 'react';

const styles = require('./Control.css');

export const Control = ({ children, title }) => (
  <div className={styles.control}>
    <label className={styles.controlLabel}>{title}</label>
    <div className={styles.controlComponent}>{children}</div>
  </div>
);
