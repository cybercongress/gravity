import React from 'react';

import './Title.css';

const Title = ({ inline, ...props }) => {
    let css = 'title';

    if (inline) {
        css += ' title-inline';
    }

    return <h2 { ...props } className={ css } />;
};

export default Title;
