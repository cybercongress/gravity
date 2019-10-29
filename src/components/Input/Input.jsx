import * as React from 'react';
import {
    Pane, TextInput, Icon, Text, Select as SelectEv,
} from 'evergreen-ui';

export const Input = ({
    errorMessage,
    isInvalid,
    message,
    margin,
    marginX,
    marginY,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    width,
    height,
    paddingX,
    boxShadow,
    noFocus,
    ...props
}) => (
    <Pane
      position='relative'
      margin={ margin }
      marginX={ marginX }
      marginY={ marginY }
      marginLeft={ marginLeft }
      marginRight={ marginRight }
      marginTop={ marginTop }
      marginBottom={ marginBottom }
      width={ width || '100%' }
    >
        <TextInput
          width='100%'
          height={ height || 42 }
          backgroundColor='transparent'
          className={ noFocus ? `${isInvalid ? 'input-green-valid' : 'input-green-no-focus'}` : `${isInvalid ? 'input-green-valid' : 'input-green'}` }
          isInvalid={ isInvalid }
          paddingX={ paddingX || 10 }
          { ...props }
        />
        {isInvalid && (
            <Pane
              position='absolute'
              top='100%'
                //   bottom='-50%'
              whiteSpace='nowrap'
              display='flex'
              alignItems='center'
            >
                <Icon
                  icon='info-sign'
                  color='danger'
                  style={ {
                        width: '11px',
                        height: '20px',
                    } }
                  marginRight={ 5 }
                />
                <Pane display='flex'>
                    <Text fontSize='11px' color='#ec4c47'>
                        {message}
                    </Text>
                </Pane>
            </Pane>
        )}
    </Pane>
);

export const Select = ({ children, inputRef, ...props }) => (
    <SelectEv { ...props }>{children}</SelectEv>
);
