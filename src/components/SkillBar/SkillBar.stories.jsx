import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { SkillBar, PopupSkillBar, Text } from '../..';

const PopupNotification = true;

storiesOf('commponents/SkillsBar', module).add('SkillsBar', () => (
    <div style={ { top: '50%', position: 'relative' } }>
        <SkillBar value={ 10 }>
            {PopupNotification && (
                <PopupSkillBar>
                    <Text color='white'>600000 of 1000000 left (60%) </Text>
                </PopupSkillBar>
            )}
        </SkillBar>
    </div>
));
