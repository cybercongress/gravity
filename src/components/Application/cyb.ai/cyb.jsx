import React, { Component } from 'react';
import Slider from 'react-slick';
// import { connect } from 'react-redux';
// import * as actions from '../../redux/settings';
import {
    Button, Pane, Text, Heading,
} from 'evergreen-ui';
import {
    MainContainer,
    ScrollContainer,
    // Text,
} from '../../..';

import './index.css';

const card = [
    {
        name: 'cyb1',
        balance: '1',
    },
    {
        name: 'cyb2',
        balance: '2',
    },
    {
        name: 'cyb3',
        balance: '3',
    },
    {
        name: 'cyb4',
        balance: '1',
    },
    {
        name: 'cyb5',
        balance: '2',
    },
    {
        name: 'cyb6',
        balance: '3',
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
        const {
            eth, cybName,
        } = this.props;

        return (
            <Pane
              { ...this.props }
              width={ 210 }
              height={ 267 }
              boxShadow={ this.state.hover ? '0 0 20px 0px #36d6ae' : '0' }
              onMouseEnter={ () => this.handleHover() }
              onMouseLeave={ () => this.handleHover() }
              borderRadius={ 5 }
              position='relative'
              backgroundColor='#000'
              paddingY={ 50 }
              paddingX={ 30 }
              display='flex'
              alignItems='center'
              justifyContent='center'
              flexShrink={ 0 }
              className='active-slide-card'
            >
                <Pane
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  flexDirection='column'
                >
                    <Heading
                      fontSize='29px'
                      color='#757575'
                      marginBottom={ 20 }
                      className='active-slide-heading'
                    >
                        {cybName}
                    </Heading>
                    <Pane marginBottom={ 40 } className='noactive-slide-balance'>
                        <Text fontSize='16px' color='#757575'>
                            {' '}
                            {eth}
                            {' '}
ETH
                            {' '}
                        </Text>
                    </Pane>
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
                      className='oval'
                    >
                        <Pane
                          style={ {
                                border: '2px solid #3ab793',
                                transform: 'rotate(25deg)',
                            } }
                          width={ 16.6 }
                          height={ 9.4 }
                          borderRadius='50%'
                          className='oval-children'
                        />
                        <Pane
                          style={ {
                                border: '2px solid #3ab793',
                                transform: 'rotate(-25deg)',
                            } }
                          width={ 16.6 }
                          height={ 9.4 }
                          borderRadius='50%'
                          className='oval-children'
                        />
                    </Pane>
                    <Pane className='active-slide-text'>
                        <Pane>
                            <Text lineHeight='1.71' color='white' size={ 400 }>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The point
                                of using Lorem Ipsum is that it has a more-or-less
                            </Text>
                        </Pane>
                    </Pane>
                </Pane>
                <Pane
                  className='active-slide-balance'
                  width={ 130 }
                  height={ 42 }
                  borderRadius={ 5 }
                  backgroundColor='#3ab793'
                  position='absolute'
                  bottom={ -20 }
                  alignItems='center'
                  justifyContent='center'
                >
                    <Text color='#fff' fontWeight={ 600 } fontSize='29px'>
                        {eth}
                        {' '}
ETH
                    </Text>
                </Pane>
                <Pane
                  position='absolute'
                  bottom={ -65 }
                  alignItems='center'
                  justifyContent='center'
                  className='active-slide-balance-text'
                >
                    <Text textShadow='0px 0px 20px #3ab793' color='#3ab793' fontSize='28px'>
                        Unlimited
                    </Text>
                </Pane>
            </Pane>
        );
    }
}

class SimpleSlider extends React.Component {
    // componentDidMount(){
    //     let slickListDiv = document.getElementsByClassName('slick-list')[0]
    //     slickListDiv.addEventListener('wheel', event => {
    //       event.preventDefault()
    //       event.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev()
    //     })
    //   }
    render() {
        const searchResults = card.map(card => (
            <Pane className='slide' alignItems='center' height={ 700 }>
                <CybCard active={ false } cybName={ card.name } eth={ card.balance } />
            </Pane>
        ));
        const settings = {
            className: 'center',
            centerMode: true,
            focusOnSelect: true,
            infinite: true,
            speed: 800,
            centerPadding: '0px',
            slidesToShow: 3,
            arrows: false,
            // slidesToScroll: 1,
        };

        return <Slider { ...settings }>{searchResults}</Slider>;
    }
}

export const FooterCyb = () => (
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
      paddingX='2em'
    >
        <Pane
          flexGrow={ 1 }
          maxWidth={ 1000 }
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='row'
        >
            <Text color='#fff' fontSize='18px'>
                1 April
            </Text>
            <Pane display='flex' justifyContent='center' flexGrow={ 1 }>
                <Text color='#fff' fontSize='18px'>
                    14 day 13 hour 15 minute 42 seconds
                </Text>
            </Pane>
            <Button paddingX={ 50 } className='btn'>
                Download
            </Button>
        </Pane>
    </Pane>
);

export const Settings = () => (
    <ScrollContainer>
        <MainContainer style={ { paddingBottom: 65, paddingTop: 40 } }>
            <Pane display='flex' justifyContent='center'>
                <Heading fontSize='29px' color='#fff'>
                    Your virtual robot
                </Heading>
            </Pane>
            <Pane width='100%'>
                <SimpleSlider />
            </Pane>
        </MainContainer>
    </ScrollContainer>
);
