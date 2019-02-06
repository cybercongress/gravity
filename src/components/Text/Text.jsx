import * as React from 'react';
import cx from 'classnames';

const styles = require('./Text.less');

export const Text = ({ bold, uppercase, justify, lineheight, color, size, ...props }) => (
    <div
      { ...props }
      className={ cx(styles.TextDefault, {
            [styles.TextWeight]: bold,
            [styles.TextTransform]: uppercase,
            [styles.fontSizeSm]: size === 'sm',
            [styles.fontSizeLg]: size === 'lg',
            [styles.fontSizeXlg]: size === 'xlg',
            [styles.fontSizeXxlg]: size === 'xxlg',
            [styles.TextColorBlue]: color === 'blue',
            [styles.TextColorBlack]: color === 'black',
            [styles.TextColorWhite]: color === 'white',
            [styles.lineheight]: lineheight,
            [styles.textJustify]: justify,
        }) }
    />
);
