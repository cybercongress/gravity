import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane, Text, Heading, Button, TextInput, Select,
} from 'evergreen-ui';
import { Dynamics } from '../Dynamics/Dynamics';
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

const ContentTooltip = () => (
    <Pane
      minWidth={ 150 }
      paddingX={ 15 }
      paddingY={ 10 }
      borderRadius={ 4 }
      backgroundColor='#000'
      width='108%'
        /* height: 114%; */
      marginLeft='-4%'
      marginTop='-2%'
      marginBottom='-2%'
      boxShadow='0 0 20px 3px #36d6ae'
    >
        <Text color='#fff' display='inline-block' marginBottom={ 10 }>
            Day 5 of 711
        </Text>
        <Text color='#fff' fontSize='13px' display='inline-block'>
            Current round ends in 20h 20m 20s
        </Text>
    </Pane>
);

const Databases = () => (
    <ScrollContainer>
        <MainContainer style={ { paddingBottom: 90 } }>
            <Pane display='flex' flexDirection='column' alignItems='center'>
                {/* {Statistics}
                        {MyDatabases} */}
                <Text
                  fontSize='1.5em'
                  letterSpacing={ 1.3 }
                  color='#fff'
                  display='inline-block'
                  marginBottom={ 70 }
                >
                    The most excited auction of the future web
                </Text>
                <Text
                  fontSize='1.1em'
                  letterSpacing={ 1.3 }
                  color='#fff'
                  display='inline-block'
                  marginBottom={ 20 }
                >
                    current price
                </Text>
                <Text
                  fontSize='1.5em'
                  letterSpacing={ 1.3 }
                  color='#fff'
                  display='inline-block'
                  marginBottom={ 30 }
                >
                    42 575 ETH per CBD
                </Text>
                <Pane width='30%' marginBottom='15%'>
                    <SkillBar bwPercent={ 20 } contentTooltip={ <ContentTooltip /> } />
                </Pane>
                <Text
                  fontSize='1.1em'
                  letterSpacing={ 1.3 }
                  color='#fff'
                  display='inline-block'
                  marginBottom={ 20 }
                >
                    Price history
                </Text>
                <Pane
                  width='80%'
                    // height={200}
                >
                    <Dynamics bens={ bens } />
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
            <Pane display='flex' justifyContent='space-around' alignItems='center' flexGrow={ 1 } marginRight={15}>
                <Pane width='40%'>
                    <Select className='select-green' width='100%' height={ 42 }>
                        <option value=''>Version</option>
                        <option value='V1'>V1 (Basic Database)</option>
                    </Select>
                </Pane>
                <TextInput
                  height={ 42 }
                  width='40%'
                //   marginRight={ 15 }
                  fontSize='18px'
                  placeholder='ETH'
                  textAlign='left'
                  backgroundColor='transparent'
                  className='input-green'
                />
            </Pane>
            <Button paddingX={ 50 } className='btn'>
                Get CBD
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
