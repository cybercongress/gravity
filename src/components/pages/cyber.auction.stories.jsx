import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane, Text, Heading, Button, TextInput, Select, Pill, Table,
} from 'evergreen-ui';
import Plotly from 'react-plotly.js';
import { Dynamics } from '../Dynamics/Dynamics';
import {
    ScrollContainer, MainContainer, CardHover, Battery, calculateBensShares,
} from '../..';
import Application from '../Application/Application';

import { x, y, z } from './list';



const dataTeble = [
    {
        time: '12/12/2010 00:26:20',
        txid: '0x000F3754f028c704FDCe4e8a',
        atoms: 1,
        gcyb: 51,
        price: 5,
    },
    {
        time: '12/12/2010 00:26:20',
        txid: '0x000F3754d028c704FDCe4e8a',
        atoms: 14,
        gcyb: 261,
        price: 6,
    },
    {
        time: '12/12/2010 00:26:20',
        txid: '0x000F3754f02axc704FDCe4e8a',
        atoms: 11,
        gcyb: 101,
        price: 8,
    },
    {
        time: '12/12/2010 00:26:20',
        txid: '0x000F3754f028c70gsFDCe4e8a',
        atoms: 16,
        gcyb: 45,
        price: 2,
    },
];



const layout = {
    paper_bgcolor: '#000',
    plot_bgcolor: '#000',
    xaxis: {
        color: '#36d6ae',
        zeroline: false,
    },
    yaxis: {
        color: '#36d6ae',
        zeroline: false,
    },
};

const Chart = (
    <Pane display='flex' flexDirection='column' alignItems='center'>
        <Text
          fontSize='1.1em'
          letterSpacing={ 1.3 }
          color='#fff'
          display='inline-block'
          marginBottom={ 20 }
        >
            Price history
        </Text>

        <Plotly
          data={ [
                {
                    type: 'scatter3d',
                    mode: 'lines',
                    x,
                    y,
                    z,
                    line: {
                        width: 6,
                        color: '#36d6ae',
                    },
                    //   marker: {
                    //     size: 5,
                    //     color: '#fff',
                    //     colorscale: "#fff",
                    //     // cmin: -20,
                    //     // cmax: 50
                    //   }
                },
            ] }
          layout={ layout }
        />
    </Pane>
);

const Tables = (
    <Table width='100%'>
        <Table.Head style={ { backgroundColor: '#000', borderBottom: '1px solid #ffffff80' } }>
            <Table.TextHeaderCell textAlign='end'>
                <sapn style={ { color: '#fff', fontSize: 15 } }>Timestamp</sapn>
            </Table.TextHeaderCell>
            <Table.TextHeaderCell textAlign='center'>
                <sapn style={ { color: '#fff', fontSize: 15 } }>TxId</sapn>
            </Table.TextHeaderCell>
            <Table.TextHeaderCell textAlign='end'>
                <sapn style={ { color: '#fff', fontSize: 15 } }>ATOMs contributed</sapn>
            </Table.TextHeaderCell>
            <Table.TextHeaderCell textAlign='end'>
                <sapn style={ { color: '#fff', fontSize: 15 } }>GCYB estimation</sapn>
            </Table.TextHeaderCell>
            <Table.TextHeaderCell textAlign='end'>
                <sapn style={ { color: '#fff', fontSize: 15 } }>Price estimation</sapn>
            </Table.TextHeaderCell>
        </Table.Head>
        <Table.Body style={ { backgroundColor: '#000', overflowY: 'hidden' } }>
            {dataTeble.map(item => (
                <Table.Row isSelectable borderBottom='none' key={ item.txid }>
                    <Table.TextCell textAlign='end'>
                        <span style={ { color: '#fff', fontSize: 13 } }>{item.time}</span>
                    </Table.TextCell>
                    <Table.TextCell textAlign='end'>
                        <span style={ { color: '#fff', fontSize: 13 } }>{item.txid}</span>
                    </Table.TextCell>
                    <Table.TextCell textAlign='end'>
                        <span style={ { color: '#fff', fontSize: 13 } }>{item.atoms}</span>
                    </Table.TextCell>
                    <Table.TextCell textAlign='end'>
                        <span style={ { color: '#fff', fontSize: 13 } }>{item.gcyb}</span>
                    </Table.TextCell>
                    <Table.TextCell textAlign='end'>
                        <span style={ { color: '#fff', fontSize: 13 } }>{item.price}</span>
                    </Table.TextCell>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
);

class Databases extends Component {
    render() {
        let contentActionBar;

        const Statistics = (
            <Pane
              display='grid'
              gridTemplateColumns='1fr 1fr 1fr'
              justifyItems='center'
              width='100%'
              alignItems='center'
              marginBottom={ 50 }
            >
                <Pane display='flex' flexDirection='column' alignItems='center'>
                    <Text display='inline-block' marginBottom={ 10 } color='#3ab793' fontSize='30px'>
                       {(this.props.statusPage === 'state3') ? 23 : '15%'}
                    </Text>
                    <Text display='inline-block' marginBottom={ 16 } fontSize='20px' color='#3ab793'>
                        { (this.props.statusPage === 'state3') ? 'Final Price' : 'Current discount'}
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
                <CardHover
                  flex={ 1 }
                  paddingY={ 50 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  width='100%'
                  maxWidth='250px'
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#4ed6ae' fontSize='30px'>
                        600 000
                    </Text>
        
                    <Text display='inline-block' fontSize='20px' color='#4ed6ae'>
                       { (this.props.statusPage === 'state3') ? 'Funded' : ' ATOMs left'}
                    </Text>
                </CardHover>
                <Pane display='flex' flexDirection='column' alignItems='center'>
                    <Text display='inline-block' marginBottom={ 10 } color='#3ab793' fontSize='30px'>
                        12%
                    </Text>
                    <Text display='inline-block' marginBottom={ 16 } fontSize='20px' color='#3ab793'>
                        Cyb won
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

        const Content = () => (
            <ScrollContainer>
                <MainContainer style={ { paddingBottom: 90 } }>
                    <Pane display='flex' flexDirection='column' alignItems='center'>
                    {/* {statusPage === 'state1' && (
                                
                                )} */}
                        <Text
                          fontSize='1.5em'
                          letterSpacing={ 1.3 }
                          color='#fff'
                          display='inline-block'
                          marginBottom={ 70 }
                          textAlign='center'
                        >
                            
                           {(this.props.statusPage === 'state3') ?  'Game of links round has been ended in [amount of day/hours/minutes]' : 'The most excited auction of the future web'}
                        </Text>

                       {(this.props.statusPage === 'state1') &&( <Pane>
                        <Text
                          fontSize='1.5em'
                          letterSpacing={ 1.3 }
                          color='#3ab793'
                          display='inline-block'
                          marginBottom={ 70 }
                          marginX={10}
                          textAlign='center'
                        >12</Text>
                        <Text
                          fontSize='1.5em'
                          letterSpacing={ 1.3 }
                          color='#3ab793'
                          display='inline-block'
                          marginBottom={ 70 }
                          marginX={10}
                          textAlign='center'
                        >12</Text>
                        <Text
                          fontSize='1.5em'
                          letterSpacing={ 1.3 }
                          color='#3ab793'
                          display='inline-block'
                          marginBottom={ 70 }
                          marginX={10}
                          textAlign='center'
                        >12</Text>
                        </Pane>
                       )}

                        {Statistics}

                        {Chart}

                        {Tables}
                    </Pane>
                </MainContainer>
            </ScrollContainer>
        );

        const FuckGoogle = () => (
            <Pane display='flex' width='100%' alignItems='center'>
                <Pane
                  display='flex'
                  justifyContent='space-around'
                  alignItems='center'
                  flexGrow={ 1 }
                  marginRight={ 15 }
                >
                    <Text fontSize='20px' color='#fff'>
                        Contribute ATOMs using
                    </Text>
                </Pane>
                   
                <Button paddingX={ 50 } height={ 42 } className='btn' disabled={this.props.disable} whiteSpace='nowrap'>
                    Fuck Google
                </Button>
            </Pane>
        );

        const TrackContribution = () => (
            <Pane display='flex' width='100%' alignItems='center'>
                <Pane
                  display='flex'
                  justifyContent='space-around'
                  alignItems='center'
                  flexGrow={ 1 }
                  marginRight={ 15 }
                >
                    <Text fontSize='20px' color='#fff'>
                        You can send any amount of ATOMs to cyber•Congress multisig
                        cosmos287fhhlgflsef
                    </Text>
                </Pane>
                <Button paddingX={ 50 } height={ 42 } className='btn' whiteSpace='nowrap'>
                    Track Contribution
                </Button>
            </Pane>
        );

        const SaveAddress = () => (
            <Pane display='flex' width='100%' alignItems='center'>
                <Pane
                  display='flex'
                  justifyContent='space-around'
                  alignItems='center'
                  flexGrow={ 1 }
                  marginRight={ 15 }
                >
                    <Text fontSize='20px' color='#fff'>
                        Put address of wrom which you contributed
                    </Text>
                    <TextInput
                  height={ 42 }
                  width='40%'
                  fontSize='18px'
                  placeholder='address'
                  textAlign='left'
                  backgroundColor='transparent'
                  className='input-green'
                />
                </Pane>
                <Button paddingX={ 50 } height={ 42 } className='btn' whiteSpace='nowrap'>
                    Save Address
                </Button>
            </Pane>
        );

        if (this.props.statusActionBar === 'trackContribution') {
            contentActionBar = <TrackContribution />;
        } else if (this.props.statusActionBar === 'saveAddress') {
            contentActionBar = <SaveAddress />;
        } else {
            contentActionBar = <FuckGoogle />;
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
                    {contentActionBar}
                </Pane>
            </Pane>
        );

        return (
            <Application>
                <Content />
                <FooterCyb />
            </Application>
        );
    }
}

storiesOf('Examples', module).add('.cyberauction state1', () => <Databases statusPage='state1' disable />)
.add('.cyberauction state2', () => <Databases state2 />)
.add('.cyberauction ActionBar2', () => <Databases statusActionBar='trackContribution' />)
.add('.cyberauction ActionBar3', () => <Databases statusActionBar='saveAddress' />)
.add('.cyberauction state3', () => <Databases statusPage='state3' />);
