import * as React from 'react';

const styles = require('./PopupContent.css');

export const ContentLine = ({children}) => (
  <div className={styles.ContentLine}>
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

export const ContentInput = ({ children, ...props }) => (
  <input {...props} className={styles.ContentInput} />
);