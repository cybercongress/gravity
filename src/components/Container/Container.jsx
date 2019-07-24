import * as React from 'react';

const styles = require('./Container.less');

export const Container = ({ children }) => (
    <div className={ styles.container }>
        <div className={ styles.containerInner }>{children}</div>
    </div>
);
