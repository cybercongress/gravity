import * as React from 'react';
import cx from 'classnames';
import { Text } from '../..';

const styles = require('./Control.css');

export const Control = ({ children, title, noText, ...props }) => (
  <div {...props} className={styles.control}>
    {title&&(<Text uppercase> {title} </Text>)}
    <div className={cx(styles.controlComponent, {[styles.noText]: noText})}>{children}</div>
  </div>
);
