import * as React from 'react';

const styles = require('./Text.less');

export const Paragraph = ({children, ...props }) => (
    <p
      { ...props }
      className={styles.paragraph}
    >
        {children}
    </p>
);

export const Caption = ({ children, ...props }) => (
    <h1
      {...props}
      className={styles.caption}
    >
        {children}
    </h1>
);

export const Chapter = ({ children, ...props }) => (
    <h2
      {...props}
      className={styles.chapter}
    >
        {children}
    </h2>
);