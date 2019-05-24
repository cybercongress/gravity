import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Pane, Text, Link } from 'evergreen-ui';
import { SkillBar } from '../..';

const ContentTooltip = ({ bwRemained, bwMaxValue, linkPrice }) => (
    <Pane minWidth={ 200 } paddingX={ 18 } paddingY={ 14 } borderRadius={ 4 } backgroundColor='#fff'>
        <Pane marginBottom={ 12 }>
            <Text size={ 300 }>
                You have
                {' '}
                {bwRemained}
                {' '}
BP out of
                {' '}
                {bwMaxValue}
                {' '}
BP.
            </Text>
        </Pane>
        <Pane marginBottom={ 12 }>
            <Text size={ 300 }>Full regeneration of bandwidth points or BP happens in 24 hours.</Text>
        </Pane>
        <Pane display='flex' marginBottom={ 12 }>
            <Text size={ 300 }>
Current rate for 1 cyberlink is
                {linkPrice}
                {' '}
BP.
            </Text>
        </Pane>
    </Pane>
);

storiesOf('Elements/SkillsBar', module).add('SkillsBar', () => (
    <div style={ { top: '50%', position: 'relative', padding: '0 1em' } }>
        <SkillBar
          bwPercent={ 50 }
          contentTooltip={ <ContentTooltip bwRemained={ 12 } bwMaxValue={ 100 } linkPrice={ 1 } /> }
        />
    </div>
));
