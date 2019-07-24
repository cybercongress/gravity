import * as React from 'react';
import cx from 'classnames';

const styles = require('./Message.less');

export const Message = ({ children, type, ...props }) => {
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
