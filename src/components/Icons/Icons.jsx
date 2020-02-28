import * as React from 'react';
import cx from 'classnames';

const styles = require('./Icons.less');

export const IconLinks = ({children, ...props}) => (
  <i {...props} className={cx(styles.Icon, styles.IconLinks)}>
      {children}
  </i>
)

export const IconCIDs = ({children, ...props}) => (
  <i {...props} className={cx(styles.Icon, styles.IconCIDs)}>
      {children}
  </i>
)

export const IconAccounts = ({children, ...props}) => (
  <i {...props} className={cx(styles.Icon, styles.IconAccounts)}>
      {children}
  </i>
)

export const IconBlockHeight = ({children, ...props}) => (
  <i {...props} className={cx(styles.Icon, styles.IconBlockHeight)}>
      {children}
  </i>
)

export const IconBlockDelay = ({children, ...props}) => (
  <i {...props} className={cx(styles.Icon, styles.IconBlockDelay)}>
      {children}
  </i>
);