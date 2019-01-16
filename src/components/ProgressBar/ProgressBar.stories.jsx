import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import CircleLable from './CricleLable';
import { ProgressBar } from './ProgressBar';
import {
    Text, PopupBar, PopupBarFooter, Button,
} from '../..';

storiesOf('commponents/Progressbar', module)
    .add('ProgressBar', () => (
        <div style={ { top: '30%', position: 'relative' } }>
            <ProgressBar>
                <CircleLable type='complete' number='1' text='Registry initialization' />
                <CircleLable number='1' text='Registry initialization' />
            </ProgressBar>
        </div>
    ))

    .add('ProgressBar with popup', () => (
        <div style={ { top: '30%', position: 'relative' } }>
            <ProgressBar>
                <CircleLable type='complete' number='1' text='Registry initialization' />
                <CircleLable number='1' text='Registry initialization'>
                    <PopupBar>
                        <Text lineheight>To operate with records, please, define schema</Text>
                        <PopupBarFooter>
                            <Button transparent style={ { color: '#b00020' } }>
                                complete step
                            </Button>
                        </PopupBarFooter>
                    </PopupBar>
                </CircleLable>
            </ProgressBar>
        </div>
    ));
