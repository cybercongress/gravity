import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pane, Text } from 'evergreen-ui';
import {
    //     // Text,
    Section,
    MainContainer,
    ScrollContainer,
} from '../..';
import Application from '../Application/Application';
import { Settings, FooterCyb } from '../Application/cyb.ai/cyb';

const cyberc0n = require('./cyberc0n.jpg');
const dragonereum = require('./dragonereum.png');
const cybercongressAi = require('./cybercongress.ai.png');
const cybercongress = require('./cybercongress.png');

const styles = require('./cyb.less');

const Container = ({ children, ...props }) => (
    <Pane
        //  display='flex' alignItems='stretch' height='100%' flexDirection='row'
      height='100%'
        // paddingX='1em'
      display='grid'
      gridTemplateColumns='repeat(auto-fill, minmax(250px, 1fr))'
      justifyItems='center'
      gridGap='1em'
      gridRowGap='2em'
      width='100%'
        // marginX='-1em'
    >
        {children}
    </Pane>
);

const CardCyb = ({ title, img }) => (
    <Pane
      maxWidth={ 320 }
      height={ 320 }
      backgroundColor='#000'
      borderRadius={ 5 }
      boxShadow='0 0 4px 0 #36d6ae'
      display='flex'
      justifyContent='center'
      className={ styles.CardCyb }
      flexGrow={ 1 }
    >
        <img src={ img } />
        <Text color='#4ed6ae' position='absolute' bottom='15%' fontSize='16px'>
            {title}
        </Text>
    </Pane>
);

const Pages = () => (
    <ScrollContainer>
        <MainContainer>
            <Section title='Your most visited content:'>
                <Container>
                    <CardCyb title='Cyberc0n' img={ cyberc0n } />
                    <CardCyb title='Dragonereum' img={ dragonereum } />
                    <CardCyb title='Web3 blog' img={ cybercongressAi } />
                    <CardCyb title='Cybercongress' img={ cybercongress } />
                </Container>
            </Section>
            <Section title='Check out some related content:'>
                <Container>
                    <CardCyb title='Cyberc0n' img={ cyberc0n } />
                    <CardCyb title='Dragonereum' img={ dragonereum } />
                    <CardCyb title='Web3 blog' img={ cybercongressAi } />
                </Container>
            </Section>
        </MainContainer>
    </ScrollContainer>
);

storiesOf('.cyb', module).add('cyb', () => (
    <Application>
        <Pages />
    </Application>
));
