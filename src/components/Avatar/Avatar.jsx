import * as React from 'react';

const styles = require('./Avatar.less');

export const Avatar = ({ hash, style }) => {
    return (
        <img style={style} className={styles.avatar} src={`https://robohash.org/${hash}`} />
    );
}