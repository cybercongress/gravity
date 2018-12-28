import * as React from 'react';
import cx from 'classnames';

const styles = require("./button.css");

export const AddNewRecordButton = ({ children, icon, ...props }) => (
  <button  className={styles.AddNewRecordButton} {...props}>
        <span>{children}</span>
        {icon}
  </button>
);
export const ButtonIcon = ({children, ...props}) => (
  <i {...props} className={cx(styles.BttnIcon, styles.BttnIconAdd)}>
      {children}
  </i>
);