import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { SearchItem, LinkContainer } from '../..';


storiesOf('commponents/SearchResult', module)
    .add('SearchItem', () => (
        <div style={ { top: '50%', position: 'relative' } }>
            <SearchItem hash='sdfs21312' rank='2'>
                content
            </SearchItem>
        </div>
    ))
    .add('SearchResult', () => (
        <LinkContainer column>
            <SearchItem hash='sdfs21312' rank='2'>
                content
            </SearchItem>
            <SearchItem hash='sdfs21312' rank='2'>
                content
            </SearchItem>
            <SearchItem hash='sdfs21312' rank='2'>
                content
            </SearchItem>
        </LinkContainer>
    ));
