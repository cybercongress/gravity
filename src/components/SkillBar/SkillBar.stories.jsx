import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { SkillBar } from '../..';


storiesOf('commponents/SkillsBar', module)

    .add('SkillsBar', () => (
        <div style={ { top: '50%', position: 'relative' } }>
            <SkillBar value={ 10 } />
        </div>
    ));
