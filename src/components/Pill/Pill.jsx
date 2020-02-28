import * as React from 'react';
import { Pill as PillEv } from 'evergreen-ui';


export const Pill = ({ children, ...props }) =>(
    <PillEv display="inline-flex" {...props}>{children}</PillEv>
);
