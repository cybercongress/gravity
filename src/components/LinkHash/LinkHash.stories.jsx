import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { LinkHash } from '../..';

const hash = '0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef';

storiesOf('Elements/LinkHash', module)
.addDecorator(centered)
    .add('LinkHash', () => (
        <LinkHash value={ hash } />
    ));
