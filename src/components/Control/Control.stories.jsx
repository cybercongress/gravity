import React from 'react';
import { storiesOf } from '@storybook/react';
import { Control, Input } from '../..';

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    background: '#eff3f6',
};
const CenterDecorator = storyFn => <div style={ styles }>{storyFn()}</div>;

storiesOf('Elements/Control', module)
    .addDecorator(CenterDecorator)
    .add('Control', () => (
        <div>
            <Control title='title'>
                <Input />
            </Control>
            <Control title='title'>
                <Input />
            </Control>
        </div>
    ));
