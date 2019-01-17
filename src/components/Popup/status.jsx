import * as React from 'react';
import cx from 'classnames';
import styles from './status.css';
import { Text } from '../..';

export const Status = ({ children, ...props }) => (
    <div className={styles.StatusContainer}>
        <div
          className={ cx(styles.status, {
                [styles.error]: props.type === 'error',
                [styles.successfully]: props.type === 'successfully',
            }) }
        />
        <Text lineheight>{children}</Text>
    </div>
);
