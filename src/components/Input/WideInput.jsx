import * as React from 'react';

const styles = require('./WideInput.css');

export const WideInput = ({ inputRef, errorMessage, ...props }) => (
    <div className={ styles.inutText }>
        <input
          { ...props }
          ref={ inputRef }
          className={ errorMessage ? styles.wideInputError : styles.wideInput }
        />
        <span className={ errorMessage ? styles.textError : styles.textErrorDisplayNone }>
            {errorMessage}
        </span>
    </div>
);

export const WideSelect = ({ children, inputRef, ...props }) => (
    <select { ...props } ref={ inputRef } className={ styles.wideInput }>
        {children}
    </select>
);
