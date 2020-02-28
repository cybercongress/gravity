import * as React from 'react';

const styles = require('./PopupContent.less');

export const ContentLine = ({children}) => (
  <div className={styles.ContentLine}>
      {children}
  </div>
);

export const ContentLineTextInput = ({children}) => (
  <div className={styles.ContentLineTextInput}>
      {children}
  </div>
);

export const ContentLineFund = ({children}) => (
  <div className={styles.ContentLineFund}>
      {children}
  </div>
);

export const LineTitle = ({children}) => (
  <span className={styles.LineTitle}>
      {children}
  </span>
);

export const LineControl = ({children}) => (
  <div className={styles.LineControl}>
      {children}
  </div>
);

export const ContentInput = ({ children, inputRef, ...props }) => (
  <input {...props} ref={inputRef} className={styles.ContentInput} />
);
