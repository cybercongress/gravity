import React from 'react';
import { storiesOf } from '@storybook/react';
import {
     FundContainer
} from '../..';

storiesOf('Elements/FundContainer', module)

    .add('FundContainer', () => (
        <FundContainer>
            <span>CentredPanel</span>
            <span>CentredPanel</span>
            <span>CentredPanel</span>
        </FundContainer>
    ));
    