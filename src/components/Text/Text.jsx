import * as React from 'react';
import cx from 'classnames';

const styles = require('./Text.css');

export const Text = ({fontSize, color, ...props }) => (
    <div {...props} style={{ fontSize: `${fontSize}px`, color: `${color}`}} className={cx(styles.TextDefault, 
      {
        [styles.TextWeight]: props.bold,
        [styles.TextTransform]: props.uppercase,
        [styles.NoPadding]: props.NoPadding,
      }
    )}/>
);