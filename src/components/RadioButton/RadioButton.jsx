import * as React from 'react';

const styles = require('./RadioButton.css');

export const RadioButton = ({ children, inputRef, name, width, height, ...props }) => (
  <span className={styles.RadioBtn}>
    <label>
      <input {...props} ref={inputRef} disabled={props.disabled} checked={props.checked} name={name} type="radio" />
      <i style={{height: `${height}px`, width: `${width}px` }}/>
    </label>
    <span className={styles.RadioBtnText}>{children}</span>
  </span>
);

