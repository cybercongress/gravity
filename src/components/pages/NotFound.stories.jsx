import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Vitalick, Button, MainContainer, Text, CentredPanel, FlexContainer, FlexContainerLeft, FlexContainerRight } from '../..';
import NotFoundPage from '../NotFound/NotFound';

const NotFound = () => {
    // const { location: { query: { dura } } } = props;
    return (
        <MainContainer>
            <NotFoundPage>
                <FlexContainer>
                    <FlexContainerLeft>
                        <CentredPanel style={{alignItems: 'flex-start', paddingBottom: 0}}>
                            <Text size='lg'>
                                Seems that Cyb doesn`t know
                                <b>
                                "
                                {' dura '}
                                "
                                </b>
                                app
                            </Text>
                            <Text size='lg'>
                                <b>Link this app in the root registry </b>
                                and Cyb will understand it!
                            </Text>

                        </CentredPanel>
                        <Button color='green' dura='rr.cyb'>Go to Root Registry!</Button>
                    </FlexContainerLeft>
                    <FlexContainerRight>
                        <Vitalick />
                    </FlexContainerRight>
                </FlexContainer>
            </NotFoundPage>
        </MainContainer>
    );
};

storiesOf('cyb/pages/NotFound', module).add('NotFound', () => <NotFound />);
