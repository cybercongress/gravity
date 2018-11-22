import * as React from 'react';
import cx from 'classnames';

const styles = require('./Message.css');

export const Message = ({ children, props, type }) => {
    return <div {...props} className={
        cx(styles.text, {
            [styles.warn]: type === 'warning',
            [styles.info]: type === 'info',
            [styles.error]: type === 'error',
            [styles.success]: type === 'success'
    })}>
        {children}
    </div>
};
