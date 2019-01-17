import * as React from 'react';
import cx from 'classnames';

const styles = require('./DbHeader.css');


export const FlexContainer = ({ children, line, ...props, }) => (
  <div {...props} className={cx(styles.FlexContainer,{ [styles.FlexContainerLine] : line}) }>
    {children}
  </div>
);

export const FlexContainerLeft = ({ children, ...props }) => (
  <div {...props} className={styles.FlexContainerLeft}>
    {children}
  </div>
);

export const FlexContainerRight = ({ children, ...props }) => (
  <div {...props} className={styles.FlexContainerRight}>
    {children}
  </div>
);
