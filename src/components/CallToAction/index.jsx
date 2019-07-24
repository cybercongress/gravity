import * as React from 'react';

const styles = require("./CallToAction.less");

export const Container = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
    {children}
    </div>
  </div>
);
