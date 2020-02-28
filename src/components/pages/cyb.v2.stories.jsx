import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pane, Text } from 'evergreen-ui';
import {
    //     // Text,
    Section,
    MainContainer,
    ScrollContainer,
    Avatar,
    Pill,
} from '../..';
import Application from '../Application/Application';

const styles = require('./cyb.less');

const Container = ({ children, ...props }) => (
    <Pane
      display='flex'
      alignItems='stretch'
        //  height='100%'
      flexDirection='column'
        //   height='100%'
        //     // paddingX='1em'
        //   display='grid'
        //   gridTemplateColumns='repeat(auto-fill, minmax(250px, 1fr))'
        //   justifyItems='center'
        //   gridGap='1em'
        //   gridRowGap='2em'
      width='100%'
        // marginX='-1em'
    >
        {children}
    </Pane>
);

const CardCyb = ({
    title, img, hash, disabled, address, version, ipfsStatus,
}) => (
    <Pane
        //   maxWidth={ 320 }
        //   height={ 320 }
      width='100%'
      paddingY={ 20 }
      paddingLeft={ 70 }
      paddingRight={25}
      backgroundColor='#000'
      borderRadius={ 5 }
      boxShadow='0 0 2px 0 #36d6ae'
      display='flex'
        //   justifyContent='center'
      alignItems='center'
      className={ styles.CardCyb }
      flexGrow={ 1 }
      marginY={ 5 }
      position='relative'
      cursor={ disabled ? '' : 'pointer' }
    >
        {/* <img src={ img } /> */}
        {hash && (
            <Pane position='absolute' left='1.6em' display='flex' alignItems='center' height='100%'>
                <Avatar style={ { height: 40, width: 40 } } hash={ hash } />
            </Pane>
        )}
        <Text flexGrow={1} color={ disabled ? '#7b7b7b' : '#fff' } fontSize='1em'>
            {title}
        </Text>
        <Pane>
            <Text color={disabled ? '#7b7b7b' : '#36d6ae'} fontSize='0.7em'>
                {address}
            </Text>
            <Text color='#7b7b7b' fontSize='0.8em'>
                {version}
            </Text>
           
            { ipfsStatus && (
                <Pill
                height={ 8 }
                width={ 8 }
                borderRadius='50%'
                paddingX={ 0 }
                isSolid
                // marginLeft={ 20 }
                // marginRight={ 25 }
                color={ ipfsStatus == 'local' ? 'green' : ipfsStatus == 'fail' ? 'red' : 'yellow' }
                />
            )}
        </Pane>
    </Pane>
);

const Pages = () => (
    <ScrollContainer>
        <MainContainer>
            <Section marginTop={ 15 } title='Identity'>
                <Container>
                    <CardCyb title='username' hash='0x4arugkmyw3ar0dtdsqfpy9t3ngvnuapgqfae5hu' />
                    <CardCyb title='Change password' disabled />
                    <CardCyb title='State management' />
                </Container>
            </Section>
            <Section marginTop={ 15 } title='State'>
                <Container>
                    <CardCyb
                      title='Export state'
                      hash='0x4arugkmyw3ar0dtdsqfpy9t3ngvnuapgqfae5hu'
                    />
                    <CardCyb title='Import state' />
                    <CardCyb title='Reset state to defaults' />
                </Container>
            </Section>
            <Section marginTop={ 15 } title='State'>
                <Container>
                    <CardCyb title='Configure web3 provider' />
                    <CardCyb title='IPFS' ipfsStatus='local' />
                    <CardCyb title='Ethereum' />
                    <CardCyb title='Cyber' />
                </Container>
            </Section>
            <Section marginTop={ 15 } title='Activity'>
                <Container>
                    <CardCyb title='Timeline' />
                    <CardCyb title='Activity reflection' disabled />
                </Container>
            </Section>
            <Section marginTop={ 15 } title='Apps'>
                <Container>
                    <CardCyb title='Setup root apps' />
                    <CardCyb title='Pinned files' />
                </Container>
            </Section>
            <Section marginTop={ 15 } title='Resources'>
                <Container>
                    <CardCyb title='Device' disabled />
                    <CardCyb title='Storage' disabled />
                    <CardCyb title='Memory' disabled />
                    <CardCyb title='Processor' disabled />
                    <CardCyb title='Graphics' disabled />
                    <CardCyb title='Battery' disabled />
                </Container>
            </Section>
            <Section marginTop={ 15 } title='Wire'>
                <Container>
                    <CardCyb
                      title='WiFi'
                      hash='0x4arugkmyw3ar0dtdsqfpy9t3ngvnuapgqfae5hu'
                      disabled
                    />
                    <CardCyb title='Ethernet' disabled />
                    <CardCyb title='Bluetooth' disabled />
                </Container>
            </Section>
            <Section marginTop={ 15 } title='Input'>
                <Container>
                    <CardCyb title='Location' disabled />
                    <CardCyb title='Time' disabled />
                    <CardCyb title='Camera' disabled />
                    <CardCyb title='Microphone' disabled />
                </Container>
            </Section>
            <Section marginTop={ 15 } title='Output'>
                <Container>
                    <CardCyb title='Display' disabled />
                    <CardCyb title='Display' disabled />
                </Container>
            </Section>
            <Section marginTop={ 15 } title='Resources'>
                <Container>
                    <CardCyb title='Help articles' />
                    <CardCyb title='Wiki' />
                    <CardCyb title='Blog' />
                    <CardCyb title='Github' />
                    <CardCyb title='Version' version='0.1.2' />
                    <CardCyb
                      title='Binary content address'
                      address='QmT26rKxQdkD6XruyN8J3LDkRxWy6ZAjeYabfQUe9GssGf.ipfs'
                    />
                    <CardCyb
                      title='Source content address'
                      address='QmT26rKxQdkD6XruyN8J3LDkRxWy6ZAjeYabfQUe9GssGf.ipfs'
                    />
                    <CardCyb
                      title='Release signature'
                      address='QmT26rKxQdkD6XruyN8J3LDkRxWy6ZAjeYabfQUe9GssGf.ipfs'
                      disabled
                    />
                </Container>
            </Section>
        </MainContainer>
    </ScrollContainer>
);

storiesOf('Examples/id', module).add('.cyb', () => (
    <Application>
        <Pages />
    </Application>
));
