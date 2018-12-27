import * as React from 'react';

const styles = require('./checkbox.css');

export const Checkbox = ({ children }) => (
  <span className={styles.CheckboxBtn}>
    <label>
      <input type="checkbox" />
      <i />
    </label>
    <span className={styles.CheckboxBtnText}>{children}</span>
  </span>
);
