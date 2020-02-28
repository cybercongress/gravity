import * as React from 'react';
import { DarkPanel } from '../..';

const styles = require('./Content.less');

export const Content = ({ children, title, ...props }) => (
    <div {...props} className={styles.content}>
    {title && (
      <div className={styles.label} style={{ background: '#3fb990' }}>
        {title}
      </div>
    )}
    <DarkPanel>
    {children}
    </DarkPanel>
    
  </div>
)