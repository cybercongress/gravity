import * as React from 'react';
import {
    Pane as PaneEv,
} from 'evergreen-ui';

export const Pane = ({ children, ...props }) => (
    <PaneEv { ...props }>
        {children}
    </PaneEv>
);
