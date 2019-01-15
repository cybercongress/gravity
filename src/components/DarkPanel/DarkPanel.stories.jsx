import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { DarkPanel } from '../..';

storiesOf('commponents/DarkPanel', module)
    .add('DarkPanel', () => (
        <div style={ {
            top: '20%',
            position: 'relative',
            margin: 'auto',
            width: '40%',
        } }
        >
            <DarkPanel>
                <div
                  style={ {
                        width: '80%',
                        height: '500px',
                        textAlign: 'center',
                        margin: 'auto',
                        color: '#ffff',
                  } }
                >
                    content
                </div>
            </DarkPanel>
        </div>
    ));
