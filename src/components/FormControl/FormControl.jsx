import * as React from 'react';
import cx from 'classnames';

const styles = require('./FormControl.less');

export const FormControl = ({ children, blockRow, line, flex_basis_auto, ...props }) => (
    <div {...props} className={cx(styles.FormControl, {[styles.blockRow]: blockRow,  [styles.blockRowFlexBasisAuto]: flex_basis_auto })}>
        {children}
    </div>
);
