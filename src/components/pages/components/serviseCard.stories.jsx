import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text, Pane } from 'evergreen-ui';
import { CardHover } from '../../..';

const ServiceCard = () => (
    <Pane display='flex' alignItems='center' justifyContent='center' width='100%' height='100%' backgroundColor='#000000' paddingY={ 20 }>
        <Pane width='20%'>
            <CardHover
              indexV2
              flex={ 1 }
              paddingY={ 50 }
              display='flex'
              alignItems='center'
              flexDirection='column'
              backgroundColor='#000000'
              marginX={ 15 }
            >
                <Text display='inline-block' marginBottom={ 15 } color='#4ed6ae' fontSize='30px'>
                    267 582
                </Text>

                <Text display='inline-block' color='#4ed6ae'>
                    content ids
                </Text>
            </CardHover>
        </Pane>
    </Pane>
);

storiesOf('Components|serviceCard', module).add('serviceCard', () => <ServiceCard />);
