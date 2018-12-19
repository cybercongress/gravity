import * as React from 'react';

const styles = require("./Table.css");


export const Table = ({ children }) => (
  <div className={styles.table}>
    {children}
  </div>
);
