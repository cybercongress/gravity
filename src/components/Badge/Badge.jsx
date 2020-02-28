import * as React from 'react';
import { Badge as BadgeEv } from 'evergreen-ui';

export const Badge = ({ children, ...props }) => (
    <BadgeEv {...props} >
      {children}
    </BadgeEv>
  );