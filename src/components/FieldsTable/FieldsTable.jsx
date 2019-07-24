import * as React from 'react';

const styles = require('./FieldsTable.less');

export const FieldsTable = ({ children, ...props }) => (
  <table {...props} className={styles.fieldsTable}>
    {children}
  </table>
);