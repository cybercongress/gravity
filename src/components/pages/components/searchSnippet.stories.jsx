import React from 'react';
import { storiesOf } from '@storybook/react';

import { SearchItem } from '../../..';
import { Pane } from 'evergreen-ui';

const grade = {
    from: 0.0001,
    to: 0.1,
    value: 4,
};

const Application = (props) => {
    const { openMenu, toggleMenu, newApp } = props;

    return (
        <Pane
            height='100vh'
            width='100vw'
            backgroundColor='#000'
            display='flex'
            alignItems='center'
        >
        <Pane padding='2em' width='100%'>
             <SearchItem
            // onClick={ e => this.openLink(e, link) }
          hash='sdfsdfsdf2345fsdfs'
          rank={ 4 }
          grade={ grade }
          status='success'
        >
            sdksdks;df
        </SearchItem> 
        </Pane>
            
        </Pane>
    );
};

storiesOf('Components|searchSnippet', module).add('searchSnippet', () => <Application />);
