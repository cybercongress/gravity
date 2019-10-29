import * as React from 'react';
import { Button as ButtonEv } from 'evergreen-ui';
import { Link } from 'react-router-dom';

const Button = ({
    children, height, paddingX, fontSize, to, ...props
}) => {
    if (to) {
        return (
            <Link to={ to } { ...props }>
                {children}
            </Link>
        );
    }
    return (
        <ButtonEv
          { ...props }
          whiteSpace='nowrap'
          paddingX={ paddingX || 50 }
          height={ height || 42 }
          fontSize={ fontSize || '18px'}
          className='btn'
          borderRadius={ 3 }
        >
            {children}
        </ButtonEv>
    );
};

export default Button;
