import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Pane, Text, Link } from 'evergreen-ui';
import { SkillBar, PopupSkillBar } from '../..';
import { ToolTip } from './SkillBar';

const tooltip = true;

storiesOf('Elements/SkillsBar', module).add('SkillsBar', () => (
    <div style={ { top: '50%', position: 'relative' } }>
        {/* <SkillBar value={ 10 }>
                <Pane maxWidth={300}
                    position='absolute'
                    paddingX={ 18 }
                    paddingY={ 14 }>
                    <Pane marginBottom={ 12 }>
                        <Text size={ 300 }>You have 337 993 BP out of 789 877 BP.</Text>
                    </Pane>
                    <Pane marginBottom={ 12 }>
                        <Text size={ 300 }>
                            Full regeneration of bandwidth points or BP happens in 24 hours.
                        </Text>
                    </Pane>
                    <Pane display='flex' marginBottom={ 12 }>
                        <Text size={ 300 }>Current rate for 1 cyberlink is 400 BP.</Text>
                    </Pane>
                    <Pane>
                        <Text size={ 300 }>
                            More on
                            {' '}
                            <Link textDecoration='none' color='green' cursor='pointer'>
                                Bandwidth
                            </Link>
                        </Text>
                    </Pane>
                </Pane>
        </SkillBar> */}
            <SkillBar value={ 10 } />
    </div>
));
