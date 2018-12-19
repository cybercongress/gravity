import * as React from 'react';

const styles = require('./TableItem.css');

export const TableItem = ({ children }) => (
  <div className={styles.TableItem}>
    {children}
  </div>
);
