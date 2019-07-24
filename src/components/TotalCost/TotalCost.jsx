import * as React from 'react';

const styles = require('./TotalCost.less');

export const TotalCost = ({ value }) => (
    <div className={styles.totalCost}>
      <span>Total cost:</span>
      <span>{value} gwei</span>
    </div>
  );
  