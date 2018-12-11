import React from 'react';
import cx from 'classnames';

import styles from './browser.css'

export const Browser = ({ children, openSidebar, isHomePage }) => {
	const childrenWithProps = React.Children.map(children, child =>
    	React.cloneElement(child, { 
    		openSidebar,
    		isHomePage,
    	})
    );
	return (
		<div className={styles.browser}>
			{childrenWithProps}
		</div>
	);
}

export const BrowserHeader = ({ children, openSidebar, isHomePage }) => (
	<div className={cx(styles.header, { 
		[styles.open]: openSidebar,
		[styles.home]: isHomePage 
	})}>
		{children}
	</div>
);

export const BrowserContent = ({ children, isHomePage }) => (
	<div className={cx(styles.content, { [styles.home]: isHomePage })}>
		{children}
	</div>
);

export const BrowserSidebar = ({ children, openSidebar, isHomePage }) => (
	<div className={cx(styles.sidebar, { [styles.open]: openSidebar, [styles.home]: isHomePage })}>
		{children}
	</div>
);