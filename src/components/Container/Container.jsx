import * as React from 'react';

const styles = require('./Container.less');

export const Container = ({ children, ...props }) => (
    <div className={ styles.container }>
        <div {...props} className={ styles.containerInner }>{children}</div>
    </div>
);
