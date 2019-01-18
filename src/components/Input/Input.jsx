import * as React from 'react';

const styles = require('./Input.css');

export const Input = ({ inputRef, errorMessage, ...props }) => (
    <div className={ styles.inutText }>
        <input
          { ...props }
          ref={ inputRef }
          className={ errorMessage ? styles.InputError : styles.Input }
        />
        <span className={ errorMessage ? styles.textError : styles.textErrorDisplayNone }>
            {errorMessage}
        </span>
    </div>
);

export const WideSelect = ({ children, inputRef, ...props }) => (
    <select { ...props } ref={ inputRef } className={ styles.Input }>
        {children}
    </select>
);
