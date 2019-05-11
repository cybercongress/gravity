import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane, Text, Heading, Button,
} from 'evergreen-ui';
import { LineExample } from '../LineExample/LineExample';
import {
    ScrollContainer, MainContainer, CardHover, SkillBar, calculateBensShares, 
} from '../..';
import Application from '../Application/Application';

const databases = [
    {
        title: 'test',
        description: 'test',
    },
    {
        title: 'test',
        description: 'test',
    },
    {
        title: 'test',
        description: 'test',
    },
    {
        title: 'test',
        description: 'test',
    },
    {
        title: 'test',
        description: 'test',
    },
];

const bens = [
    {
        address: '0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef',
        stake: 22,
        stakeY: 1,
    },
    {
        address: '0xb175b6F3A4C712Da8CC59A824F1d3BC31f398CB8',
        stake: 123,
        stakeY: 2,
    },
    {
        address: '0x805dD5291406D081c7100916E1ACdb070d5b4DC5',
        stake: 98,
        stakeY: 10,
    },
    {
        address: '0x885dD5291406D081c9900916E1ACdb070d5b4DD5',
        stake: 40,
        stakeY: 20,
    },
    {
        address: '0x555dD52914000081c990091222ACdb070d5b4Dz1',
        stake: 66,
        stakeY: 40,
    },
];

const Databases = () => (
    <ScrollContainer>
        <MainContainer style={ { paddingBottom: 90 } }>
            <Pane display='flex' flexDirection='column' alignItems='center'>
                {/* {Statistics}
                        {MyDatabases} */}
                <Text fontSize='1.5em' letterSpacing={ 1.3 } color='#fff' display='inline-block' marginBottom={70}>The most excited auction of the future web</Text>
                <Text fontSize='1.1em' letterSpacing={ 1.3 } color='#fff' display='inline-block' marginBottom={20}>current price</Text>
                <Text fontSize='1.5em' letterSpacing={ 1.3 } color='#fff' display='inline-block' marginBottom={20}>42 575 ETH per CBD</Text>
                <Pane width='50%' marginBottom='15%'>
                    <SkillBar bwPercent={ 20 } />
                </Pane>
                <Text fontSize='1.1em' letterSpacing={ 1.3 } color='#fff' display='inline-block' marginBottom={20}>Price history</Text>
                <Pane
                  width='80%'
                    // height={200}
                >
                    <LineExample bens={ bens } />
                </Pane>
            </Pane>
        </MainContainer>
    </ScrollContainer>
);

const FooterCyb = () => (
    <Pane
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
      position='absolute'
      bottom={ 0 }
      paddingY={ 20 }
      backgroundColor='#000000'
      zIndex={ 2 }
    >
        <Pane
          flexGrow={ 1 }
          maxWidth={ 1000 }
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='row'
          paddingX='3vw'
        >
            <Pane display='flex' justifyContent='center' flexGrow={ 1 }>
                <Text color='#fff' fontSize='18px'>
                    Add a new database for 10 ETH
                </Text>
            </Pane>
            <Button paddingX={ 50 } className='btn'>
                Add database
            </Button>
        </Pane>
    </Pane>
);

storiesOf('Examples', module).add('.cyberauction', () => (
    <Application>
        <Databases databasesItem={ databases } />
        <FooterCyb />
    </Application>
));
