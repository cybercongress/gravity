import React from 'react';

const styles = require('./LoginContainer.css');

const LoginContainer = ({ ...props }) => (
    <div { ...props } className={styles.LoginContainer} />
);

export default LoginContainer;
