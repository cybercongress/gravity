import * as React from 'react';
import cx from 'classnames';
import { Text } from '../..';

const styles = require('./Control.less');

export const Control = ({ children, noMargin, title, noText, textWidth, ...props }) => (
  <div {...props} className={cx(styles.control, { [styles.noMargin]: noMargin})}>
    {title&&(<Text style={{width: `${textWidth}px`}} uppercase> {title} </Text>)}
    <div className={cx(styles.controlComponent, {[styles.noText]: noText})}>{children}</div>
  </div>
);
