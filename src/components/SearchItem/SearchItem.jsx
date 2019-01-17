import * as React from 'react';
import styles from './SearchItem.css';
// import cx from 'classnames';

export const SearchItem = ({ children, ...props }) => (
    <div { ...props } key={ props.hash } className={ styles.searchItem }>
        <a href={ `cyb://${children}` }>
            {children}
        </a>
        <span>{props.rank}</span>
    </div>
);
