import * as React from 'react';

const styles = require("./button.css");

export const AddNewRecordButton = ({ children, ...props }) => (
  <button  className={styles.AddNewRecordButton} {...props}>
    {children}
  </button>
);