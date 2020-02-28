import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane, Text, Heading, Button,
} from 'evergreen-ui';
import { ScrollContainer, MainContainer, CardHover } from '../..';
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

const Statistics = (
    <Pane marginBottom={ 50 }>
        <Heading size={ 600 } color='#fff' marginBottom={ 32 }>
            Chaingear statistics
        </Heading>
        <Pane display='flex' marginX={ -15 }>
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
                    267
                </Text>

                <Text display='inline-block' color='#4ed6ae'>
                    databases
                </Text>
            </CardHover>
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
                    27 582
                </Text>

                <Text display='inline-block' color='#4ed6ae'>
                    entries
                </Text>
            </CardHover>
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
                    36 999
                </Text>

                <Text display='inline-block' color='#4ed6ae'>
                    ETH accumulated
                </Text>
            </CardHover>
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
                    4356
                </Text>

                <Text display='inline-block' color='#4ed6ae'>
                    unique owners
                </Text>
            </CardHover>
        </Pane>
    </Pane>
);

const DatabasesCard = ({ title, description }) => (
    <CardHover
      indexV2
      flex={ 1 }
      paddingY={ 50 }
      display='flex'
      alignItems='center'
      flexDirection='column'
      backgroundColor='#000000'
    >
        <Text display='inline-block' marginBottom={ 15 } color='#4ed6ae' fontSize='30px'>
            {title}
        </Text>

        <Text display='inline-block' color='#4ed6ae'>
            {description}
        </Text>
    </CardHover>
);

class Databases extends React.Component {
    render() {
        const { databasesItem } = this.props;

        const myDatabases = databasesItem.map(item => (
            <DatabasesCard title={ item.title } description={ item.description } />
        ));

        const MyDatabases = (
            <Pane>
                <Heading size={ 600 } color='#fff' marginBottom={ 32 }>
                    My databases
                </Heading>
                <Pane
                  display='grid'
                  gridTemplateColumns='1fr 1fr 1fr 1fr'
                  gridRowGap={ 20 }
                  gridGap={ 30 }
                    // marginX={ -15 }
                >
                    {myDatabases}
                </Pane>
            </Pane>
        );

        return (
            <ScrollContainer>
                <MainContainer style={ { paddingBottom: 90 } }>
                    <Pane display='flex' flexDirection='column'>
                        {Statistics}
                        {MyDatabases}
                    </Pane>
                </MainContainer>
            </ScrollContainer>
        );
    }
}

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

storiesOf('Examples/.chaingear', module).add('2', () => (
    <Application>
        <Databases databasesItem={ databases } />
        <FooterCyb />
    </Application>
));
