import * as React from 'react';

const styles = require('./PageTitle.less');

export const PageTitle = ({ children }) => <h2 className={styles.pageTitle}>{children}</h2>;
