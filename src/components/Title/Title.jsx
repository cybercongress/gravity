import React from 'react';
import cx from 'classnames';
import styles from './Title.less';

const Title = ({ inline, ...props }) => {
    return <h2 { ...props } className={cx(styles.title, {[styles.titleInline] : inline})} />;
};

export default Title;
