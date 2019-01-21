import React from 'react';
import { storiesOf } from '@storybook/react';
import { Section, SectionTabs, SectionContent } from '../..';

storiesOf('commponents/Section', module)
    .add('Section', () => (
        <Section title='Section'>
            <SectionContent>
                <div
                  style={ {
                        backgroundColor: '#e1e1e1',
                        width: '100%',
                        height: '200px',
                        textAlign: 'center',
                    } }
                >
                    SectionContent
                </div>
            </SectionContent>

            <SectionContent>
                <div
                  style={ {
                        backgroundColor: '#e1e1e1',
                        width: '100%',
                        height: '200px',
                        textAlign: 'center',
                    } }
                >
                    SectionContent
                </div>
            </SectionContent>

            <SectionContent>
                <div
                  style={ {
                        backgroundColor: '#e1e1e1',
                        width: '100%',
                        height: '200px',
                        textAlign: 'center',
                    } }
                >
                    SectionContent
                </div>
            </SectionContent>

            <SectionContent>
                <div
                  style={ {
                        backgroundColor: '#e1e1e1',
                        width: '100%',
                        height: '200px',
                        textAlign: 'center',
                    } }
                >
                    SectionContent
                </div>
            </SectionContent>
        </Section>
    ))
    .add('SectionTabs', () => (
        <Section title='Section'>
            <SectionTabs>
                <div
                  style={ {
                        backgroundColor: '#e1e1e1',
                        width: '100%',
                        height: '200px',
                        textAlign: 'center',
                    } }
                >
                    SectionTabs
                </div>
            </SectionTabs>
            <SectionTabs>
                <div
                  style={ {
                        backgroundColor: '#e1e1e1',
                        width: '100%',
                        height: '200px',
                        textAlign: 'center',
                    } }
                >
                    SectionTabs
                </div>
            </SectionTabs>
        </Section>
    ));
