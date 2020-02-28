import React from 'react';

import styles from './scrollContainer.less';

const ScrollContainer = props => (
    <div style={props.style} className={ styles.scrollContainer }>
        <div { ...props } className={ styles.scrollContainerInner } />
    </div>
);

export default ScrollContainer;