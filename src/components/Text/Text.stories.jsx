import React from 'react';
import { storiesOf } from '@storybook/react';
import { Paragraph } from './Text';

storiesOf('Atoms|Typography', module)
    .add('Typography', () => (
        <div>
            {/* <Caption>Caption</Caption>
            <Chapter>Chapter</Chapter> */}
            <Paragraph>Paragraph</Paragraph>
        </div>
    ));