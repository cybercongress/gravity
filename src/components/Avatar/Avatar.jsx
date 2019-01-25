import * as React from 'react';

const styles = require('./Avatar.css');

export const Avatar = ({ hash }) => {
    return (
        <img className={styles.avatar} src={`https://robohash.org/${hash}`} />
    );
}