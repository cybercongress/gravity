import * as React from 'react';
import styles from './vitalick.css';
// import cx from 'classnames';

export const Vitalick = () => (
    <img className={ styles.vitalick } src={ require('./buterin-02.svg') } alt='vitalick' />
);
