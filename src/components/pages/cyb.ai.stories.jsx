import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    // Text,
} from '../..';
import Application from '../Application/Application';
import { Settings, FooterCyb } from '../Application/cyb.ai/cyb';

storiesOf('cyb.ai', module).add('cyb.ai', () => (
    <Application>
        <Settings />
        <FooterCyb />
    </Application>
));
