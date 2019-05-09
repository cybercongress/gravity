import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { Container, Button, Text } from '../..';

storiesOf('Elements/CallToAction', module)
    .add('Container', () => (
        <div style={ { top: '30%', position: 'relative', border: '1px solid #b1aeae' } }>
            <Container>
                <div
                  style={ {
                        backgroundColor: '#e1e1e1',
                        width: '100%',
                        height: '100px',
                        textAlign: 'center',
                    } }
                >
                    content
                </div>
            </Container>
        </div>
    ));
