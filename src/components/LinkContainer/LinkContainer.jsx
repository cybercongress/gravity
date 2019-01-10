import * as React from 'react';
import cx from 'classnames';

const styles = require('./LinkContainer.css');

export const LinkContainer = ({ children, column, center }) =>(
  <div className={cx(styles.LinkContainer, {[styles.LinkContainerColumn]:column,[styles.LinkContainerCenter]:center})}>
        {children}
      </div>
)