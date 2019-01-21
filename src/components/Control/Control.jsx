import * as React from 'react';
import { Text } from '../..';

const styles = require('./Control.css');

export const Control = ({ children, title }) => (
  <div className={styles.control}>
    <Text uppercase> {title} </Text>
    <div className={styles.controlComponent}>{children}</div>
  </div>
);
