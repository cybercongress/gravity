import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane,
} from 'evergreen-ui';
import NavigationMolecules from '../../Application/Navigation';

const SearchBar = () => (
    <Pane height='100%' paddingX='2em' display='flex' justifyContent='center' paddingY='2em' backgroundColor='#000'>
        <Pane width='60%'>
            <NavigationMolecules dura='as.cyb' canBack isFavorited />
        </Pane>
    </Pane>
);

storiesOf('Molecules|searchBar', module).add('searchBar', () => <SearchBar />);
