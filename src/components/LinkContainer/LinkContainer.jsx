import * as React from 'react';
import cx from 'classnames';

const styles = require('./LinkContainer.less');

export const LinkContainer = ({ children, column, center, ...props}) =>(
  <div {...props} className={cx(styles.LinkContainer, {[styles.LinkContainerColumn]:column,[styles.LinkContainerCenter]:center})}>
        {children}
      </div>
)