import * as React from 'react';
import { Button as ButtonEv } from 'evergreen-ui';
import { Link } from 'react-router-dom';


export const Button = ({ children, to, ...props }) =>{
    if(to) {
        return(

                <Link to={to} {...props}>
                    {children}
                </Link>
        );
    }
    return(
        <ButtonEv {...props}>{children}</ButtonEv>
    );
};
