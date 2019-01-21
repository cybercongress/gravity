import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    CentredPanel,
} from '../..';

storiesOf('commponents/CentredPanel', module)

    .add('CentredPanel', () => (
        <CentredPanel>
            <span>CentredPanel</span>
            <span>CentredPanel</span>
            <span>CentredPanel</span>
        </CentredPanel>
    ));
