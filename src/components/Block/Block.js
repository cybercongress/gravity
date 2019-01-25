import React from 'react';
import cx from 'classnames';

const styles = require('./settings.css');


export const Block = ({ children, noMargin,  ...props }) => (
    <div { ...props } className={ cx(styles.block, {[styles.block__no_margin]: noMargin})}>
        {children}
    </div>
);

export const BlockRow = ({ children, ...props }) => (
    <div {...props} className={styles.block__row}>
        {children}
    </div>
);

