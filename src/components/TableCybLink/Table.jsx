import React from 'react';

import styles from './table.less';

export const TableCybLink = props => (
    <table { ...props } className={ styles.table } />
);

