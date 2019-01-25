import React from 'react';

import styles from './TxQueue.css';

export const Hash = ({ children }) => (
	<span className={styles.hash}>
		{children}
	</span>
);
