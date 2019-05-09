import React from 'react';
import { storiesOf } from '@storybook/react';
import { MainContainer } from '../..';

storiesOf('Elements/MainContainer', module).add('MainContainer', () => (
    <MainContainer>
        <div
          style={ {
                backgroundColor: '#e1e1e1',
                width: '100%',
                height: '500px',
                textAlign: 'center',
            } }
        >
            content
        </div>
    </MainContainer>
));
