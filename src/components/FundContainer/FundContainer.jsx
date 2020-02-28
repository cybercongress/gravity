import * as React from 'react';

const styles = require('./FundContainer.less');

export const FundContainer = (props) => (
    <div {...props} className={styles.fundContainer}/>
);
