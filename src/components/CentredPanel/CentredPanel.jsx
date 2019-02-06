import * as React from 'react';

const styles = require('./CentredPanel.less');

export const CentredPanel = (props) => (
    <div {...props} className={styles.CentredPanel}/>
  );