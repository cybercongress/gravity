import * as React from 'react';
import cx from 'classnames';

const styles = require('./Text.css');

export const Text = (props) => (
    <div {...props} className={cx(styles.TextDefault, 
      {
        [styles.TextWeight]: props.bold,
        [styles.TextTransform]: props.uppercase,
        [styles.fontSizeSm]: props.size === 'sm',
        [styles.fontSizeLg]: props.size === 'lg',
        [styles.fontSizeXlg]: props.size === 'xlg',
        [styles.fontSizeXxlg]: props.size === 'xxlg',
        [styles.TextColorBlue]: props.color === 'blue',
        [styles.TextColorBlack]: props.color === 'black',
        [styles.TextColorWhite]: props.color === 'white',
        [styles.lineheight]: props.lineheight,
        [styles.textJustify]: props.justify,
      }
    )}/>
);