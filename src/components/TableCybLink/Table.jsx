import React from 'react';

import styles from './table.css';

export const Table = props => (
    <table { ...props } className={ styles.table } />
);

