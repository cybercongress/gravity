import * as React from 'react';

const styles = require('./TableRow.css');

export const TableRow = ({ children }) => (
  <div className={styles.TableRow}>
    {children}
  </div>
);
