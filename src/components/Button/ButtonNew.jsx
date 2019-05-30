import * as React from 'react';
import { Button as ButtonEv } from 'evergreen-ui';


export const Button = ({ children, ...props }) =>(
    <ButtonEv {...props}>{children}</ButtonEv>
);
