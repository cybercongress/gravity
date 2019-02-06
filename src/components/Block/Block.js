import React from 'react';
import cx from 'classnames';

const styles = require('./settings.less');


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

export const Row = ({ children }) => (
    <div className={styles.row}>
        {children}
    </div>
);

export const RowItem = ({ children, ...props }) => (
    <div className='block__row__item' { ...props }>
        {children}
    </div>
);

