import React from 'react';
import styles from './Button.css';

const Button = (props) => (
    <button {...props} className={styles.button} />
);

export default Button;
