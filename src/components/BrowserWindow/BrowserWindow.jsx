import React from 'react';

import './BrowserWindow.less';
import { Block, BlockRow } from '../..';
import cx from 'classnames';

const styles = require('./BrowserWindow.less');

const BrowserWindow = ({ loading, refFn, ...props }) => (
    <webview
      { ...props }
      ref={ refFn }
      className={cx(styles.browser__webview, {[styles.browser__webview__loading]: loading})}
    />
);

export const BrowserContainer = ({ children }) => (
    <div className={styles.browser}>
        {children}
    </div>
);

export const Loading = ({ loading }) => (
    <div className={cx(styles.browser__loading, {[styles.browser__loading__show]: loading })}>
        <Block>
            <BlockRow>
                <h2>Loading...</h2>
            </BlockRow>
        </Block>
    </div>
);

export default BrowserWindow;
