import * as React from 'react';

const styles = require('./TableRecords.less');

export const TableRecords = ({ children }) => (
  <table className={styles.TableRecords}>
      {children}
  </table>
);