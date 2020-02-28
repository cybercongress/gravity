import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Slider from 'react-slick';
// import { connect } from 'react-redux';
// import * as actions from '../../redux/settings';
import {
    Button, Pane, Text, Heading, Pill,
} from 'evergreen-ui';
import {
    MainContainer,
    ScrollContainer,
} from '../..';
import Application from '../Application/Application';

const card = [
    {
        name: 'Data storage',
        text: 'Chaingear allows you to create your own eternal secure tokenized databases ',
    },
    {
        name: 'Economy',
        text: 'Apply your custom economic rules for adding entries and sharing fee with partners',
    },
    {
        name: 'Trading',
        text: 'Create valuable databases and trade them',
    },
    {
        name: 'Domains',
        text: 'Create domain databases and every Cyb user will use it to interact with your apps',
    },
    {
        name: 'Funding',
        text: 'Attract investments by creating donation database of your project',
    },
];

class CybCard extends Component {
    state = {
        hover: false,
    };

    handleHover() {
        this.setState({ hover: !this.state.hover });
    }

    seeAll = () => {
        this.setState({
            seeAll: !this.state.seeAll,
        });
    };

    render() {
        const { cybName, text } = this.props;
        const Oval = (
            <Pane
              style={ { border: '2px solid #3ab793' } }
              width={ 64 }
              height={ 64 }
              display='flex'
              opacity={ this.state.hover ? '1' : '0' }
              alignItems='center'
              justifyContent='space-around'
              borderRadius='50%'
              boxShadow='0 2px 25px 1px #3ab793'
              marginBottom={ 0 }
              className='oval-chaingear'
            >
                <Pane
                  style={ {
                        border: '2px solid #3ab793',
                        transform: 'rotate(25deg)',
                    } }
                  width={ 16.6 }
                  height={ 10 }
                  borderRadius='50%'
                  className='oval-children'
                />
                <Pane
                  style={ {
                        border: '2px solid #3ab793',
                        transform: 'rotate(-25deg)',
                    } }
                  width={ 16.6 }
                  height={ 10 }
                  borderRadius='50%'
                  className='oval-children'
                />
            </Pane>
        );

        return (
            <Pane
              { ...this.props }
              width='25vw'
              height='35vh'
              maxWidth={ 210 }
              maxHeight={ 267 }
              boxShadow={ this.state.hover ? '0 0 20px 0px #36d6ae' : '0' }
              onMouseEnter={ () => this.handleHover() }
              onMouseLeave={ () => this.handleHover() }
              borderRadius={ 5 }
              position='relative'
              backgroundColor='#000'
              paddingY={ 50 }
              paddingX={ 60 }
              display='flex'
              alignItems='center'
              justifyContent='center'
              flexShrink={ 0 }
              boxSizing='border-box'
              className='active-slide-card-chaingear'
            >
                <Pane
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  flexDirection='column'
                >
                    <Heading
                    //   fontSize='29px'
                      fontSize='3vh'
                      color='#757575'
                      marginBottom={ 45 }
                      className='active-slide-heading'
                      lineHeight={ 1 }
                    >
                        {cybName}
                    </Heading>
                    {Oval}
                    <Pane className='active-slide-text'>
                        <Pane>
                            <Text lineHeight='1.71' color='white' className='fontSF' size={ 400 }>
                                {text}
                            </Text>
                        </Pane>
                    </Pane>
                </Pane>
            </Pane>
        );
    }
}

class SimpleSlider extends React.Component {
    render() {
        const searchResults = card.map(card => (
            <Pane className='slide' style={{ width: 400 }} alignItems='center' height={ 550 }>
                <CybCard cybName={ card.name } text={ card.text } />
            </Pane>
        ));
        const settings = {
            className: 'center',
            centerMode: true,
            focusOnSelect: true,
            infinite: true,
            speed: 800,
            centerPadding: '0px',
            slidesToShow: 1,
            variableWidth: true,
            arrows: false,
            // slidesToScroll: 1,
            responsive: [{

                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  variableWidth: false,
                }
          
              }],
        };

        return <Slider { ...settings }>{searchResults}</Slider>;
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
        >
            <Button paddingX={ 50 } className='btn'>
                Create database
            </Button>
        </Pane>
    </Pane>
);

const Statistics = () => (
    <Pane display='flex' justifyContent='space-evenly'>
        <Pane display='flex' flexDirection='column' alignItems='center'>
            <Text display='inline-block' marginBottom={ 7 } color='#3ab793' fontSize='30px'>
                453
            </Text>
            <Text display='inline-block' marginBottom={ 16 } color='#3ab793'>
                databases
            </Text>
            <Pill
              height={ 10 }
              width={ 10 }
              borderRadius='50%'
              backgroundColor='#3ab793'
              paddingX={ 0 }
              isSolid
            />
        </Pane>
        <Pane display='flex' flexDirection='column' alignItems='center'>
            <Text display='inline-block' marginBottom={ 7 } color='#3ab793' fontSize='30px'>
                34 534
            </Text>
            <Text display='inline-block' marginBottom={ 16 } color='#3ab793'>
                entries
            </Text>
            <Pill
              height={ 10 }
              width={ 10 }
              borderRadius='50%'
              backgroundColor='#3ab793'
              paddingX={ 0 }
              isSolid
            />
        </Pane>
        <Pane display='flex' flexDirection='column' alignItems='center'>
            <Text display='inline-block' marginBottom={ 7 } color='#3ab793' fontSize='30px'>
                43 553
            </Text>
            <Text display='inline-block' marginBottom={ 16 } color='#3ab793'>
                ETH accumulated
            </Text>
            <Pill
              height={ 10 }
              width={ 10 }
              borderRadius='50%'
              backgroundColor='#3ab793'
              paddingX={ 0 }
              isSolid
            />
        </Pane>
        <Pane display='flex' flexDirection='column' alignItems='center'>
            <Text display='inline-block' marginBottom={ 7 } color='#3ab793' fontSize='30px'>
                9453
            </Text>
            <Text display='inline-block' marginBottom={ 16 } color='#3ab793'>
                unique owners
            </Text>
            <Pill
              height={ 10 }
              width={ 10 }
              borderRadius='50%'
              backgroundColor='#3ab793'
              paddingX={ 0 }
              isSolid
            />
        </Pane>
    </Pane>
);

const Settings = () => (
    <ScrollContainer>
        <MainContainer style={ { paddingBottom: 80, paddingTop: 40, maxWidth: 1000, width: 'auto' } }>
            <Pane display='flex' justifyContent='center' marginBottom={ 20 }>
                <Heading fontSize='2em' color='#fff' lineHeight={1} textAlign='center'>
                    The consensus computer driven database framework
                </Heading>
            </Pane>
            <Pane width='100%' marginBottom='5vh'>
                <SimpleSlider />
            </Pane>
            <Statistics />
        </MainContainer>
    </ScrollContainer>
);

storiesOf('Examples/.chaingear', module).add('index', () => (
    <Application>
        <Settings />
        <FooterCyb />
    </Application>
));
