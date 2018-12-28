import * as React from 'react';

const styles = require('./checkbox.css');

export const Checkbox = ({ children, inputRef, ...props }) => (
  <span className={styles.CheckboxBtn}>
    <label>
      <input ref={inputRef} disabled={props.disabled} checked={props.checked} type="checkbox" />
      <i />
    </label>
    <span className={styles.CheckboxBtnText}>{children}</span>
  </span>
);
