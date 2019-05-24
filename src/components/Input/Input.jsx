import * as React from 'react';
import {
    Pane, TextInput, Icon, Text,
} from 'evergreen-ui';

const styles = require('./Input.less');

export const Input = ({ inputRef, errorMessage, isInvalid, message, ...props }) => (
    <Pane position='relative'>
        <TextInput
          width='100%'
          backgroundColor='transparent'
          isInvalid={ isInvalid }
          paddingX={ 10 }
          boxShadow='inset 0 0 0px 0.4px #979797'
          { ...props }
        />
        {isInvalid && (
            <Pane
              position='absolute'
              left={ 0 }
              bottom='-50%'
              width='100%'
              display='flex'
              alignItems='center'
            >
                <Icon icon='info-sign' color='danger' size={ 11 } marginRight={ 5 } />
                <Pane>
                    <Text fontSize='11px' color='#ec4c47'>
                        {message}
                    </Text>
                </Pane>
            </Pane>
        )}
    </Pane>
);

export const Select = ({ children, inputRef, ...props }) => (
    <select { ...props } ref={ inputRef } className={ styles.Input }>
        {children}
    </select>
);
