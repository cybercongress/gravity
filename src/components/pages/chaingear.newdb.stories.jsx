import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane,
    Button,
    Table,
    TextInput,
    Select,
    Tablist,
    Tab,
    Text,
    IconButton,
} from 'evergreen-ui';
import {
    MainContainer, Code, Message, ScrollContainer, Section,
} from '../..';
import Application from '../Application/Application';

import code from './code';

const beneficiaries = [
    {
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        stake: 1,
        share: 100,
    },
    {
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        stake: 51,
        share: 1,
    },
    {
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        stake: 23,
        share: 1,
    },
    {
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        stake: 1,
        share: 100,
    },
    {
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        stake: 1,
        share: 100,
    },
    {
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        stake: 1,
        share: 20,
    },
];

class Pages extends React.Component {
    state = {
        tab: 'input',
    };

    select = (tab) => {
        this.setState({ tab });
    };

    render() {
        const { message, beneficiariesItem } = this.props;

        const { tab } = this.state;

        let content;

        const beneficiariesRows = beneficiariesItem.map(item => (
            <Table.Row
              style={ { border: 0 } }
            //   boxShadow='0px 0px 0.1px 0px #ddd'
              className='validators-table-row'
              paddingLeft='1rem'
              borderBottom='none'
            >
                <Table.TextCell textAlign='start' flexGrow={ 2 }>
                <span style={{ color: '#fff'}}>
                    {item.address}
                    </span>
                </Table.TextCell>
                <Table.TextCell textAlign='end'>
                <span style={{ color: '#fff'}}>
                {item.stake}
                </span>
                </Table.TextCell>
                <Table.TextCell textAlign='center' flexGrow={ 1 }>
                <span style={{ color: '#fff'}}>
                    {item.share}
%
</span>
                </Table.TextCell>
                <Table.TextCell flex='none' width={ 48 }>
                    <IconButton icon='trash' appearance='minimal' className='icon-btn color-white-svg' />
                </Table.TextCell>
            </Table.Row>
        ));
        const TabInput = () => (
            <Pane>
                <Section title='General database parameters'>
                    <Pane
                      backgroundColor='#000'
                      display='grid'
                      gridTemplateColumns='1fr 1fr'
                      gridGap={ 30 }
                      paddingX='2rem'
                      paddingY='2rem'
                      borderRadius={ 5 }
                      boxShadow='0 0 2px #36d6ae'
                    >
                        <Pane>
                            <TextInput
                              placeholder='Name'
                              defaultValue=''
                              width='100%'
                              marginBottom='1rem'
                              className='input-green'
                            />
                            <TextInput
                              defaultValue=''
                              placeholder='Symbol'
                              width='100%'
                              marginBottom='1rem'
                              className='input-green'
                            />
                            <Select className='select-green' width='100%'>
                                <option value=''>Version</option>
                                <option value='V1'>V1 (Basic Database)</option>
                            </Select>
                        </Pane>
                        <Pane textAlign='justify'>
                            <Text
                              fontSize='14px'
                              lineHeight={ 1.5 }
                              color='#dedede'
                              
                            >
                                <b>Description: </b>
                                One morning, when Gregor Samsa woke from troubled dreams, he found
                                himself transformed in his bed into a horrible vermin. He lay on his
                                armour-like back, and if he lifted his head a little he could see
                                his brown belly, slightly domed and divided by arches.
                            </Text>
                        </Pane>
                    </Pane>
                </Section>
                <Section title='Beneficiaries and shares (optional)'>
                    <Pane width='100%'>
                        <Table>
                            <Table.Head style={ { backgroundColor: '#000', borderBottom: '1px solid #ffffff80' } } paddingLeft='1rem'>
                                <Table.TextHeaderCell textAlign='start' flexGrow={ 2 }>
                                <span style={{ color: '#fff'}}>
                                    Address
                                    </span>
                                </Table.TextHeaderCell>
                                <Table.TextHeaderCell textAlign='end' flexGrow={ 1 }>
                                <span style={{ color: '#fff'}}>
                                    Stake
                                    </span>
                                </Table.TextHeaderCell>
                                <Table.TextHeaderCell textAlign='center' flexGrow={ 1 }>
                                <span style={{ color: '#fff'}}>
                                    Share
                                    </span>
                                </Table.TextHeaderCell>
                                <Table.TextHeaderCell flex='none' width={ 48 } />
                            </Table.Head>
                            <Table.Body style={ { backgroundColor: '#000', overflowY: 'hidden' } }>
                                <Table.Row
                                  paddingLeft='1rem'
                                  style={ { border: 0 } }
                                //   boxShadow='0px 0px 0.1px 0px #ddd'
                                >
                                    <Table.TextCell textAlign='start' flexGrow={ 2 }>
                                        <TextInput width='80%' className='input-green-no-focus' />
                                    </Table.TextCell>
                                    <Table.TextCell>
                                        <TextInput width='100%' className='input-green-no-focus' />
                                    </Table.TextCell>
                                    <Table.TextCell textAlign='center' flexGrow={ 1 }>
                                    <span style={{ color: '#fff'}}>
                                        0%
                                        </span>
                                    </Table.TextCell>
                                    <Table.TextCell flex='none' width={ 48 }>
                                        <IconButton
                                          icon='add'
                                          appearance='minimal'
                                          className='icon-btn color-white-svg'
                                        />
                                    </Table.TextCell>
                                </Table.Row>

                                <Pane>{beneficiariesRows}</Pane>
                            </Table.Body>
                        </Table>
                    </Pane>
                </Section>
            </Pane>
        );

        const TabOutput = () => (
            <Pane
              maxHeight={ 560 }
              height='60vh'
              paddingLeft='2rem'
              paddingRight='0.1rem'
              paddingY='1.5rem'
              borderRadius={ 4 }
              boxShadow='0px 0px 10px #36d6ae'
              marginBottom='2rem'
            >
                <Pane overflow='auto' height='100%'>
                    <Code>{code}</Code>
                </Pane>
            </Pane>
        );

        if (tab === 'input') {
            content = <TabInput />;
        }

        if (tab === 'output') {
            content = <TabOutput />;
        }

        return (
            <ScrollContainer>
                <MainContainer
                  style={ {
                        paddingTop: '2.5rem',
                        paddingBottom: '6rem',
                    } }
                >
                    <Pane
                      display='flex'
                      flexDirection='column'
                      alignItems='center'
                      justifyContent='center'
                    >
                        <Tablist marginBottom={ 24 }>
                            <Tab
                              key='Input'
                              id='Input'
                              isSelected={ tab === 'input' }
                              onClick={ () => this.select('input') }
                              paddingX={ 50 }
                              paddingY={ 20 }
                              marginX={ 3 }
                              borderRadius={ 4 }
                              color='#36d6ae'
                              boxShadow='0px 0px 10px #36d6ae'
                              fontSize='16px'
                            >
                                Input
                            </Tab>
                            <Tab
                              key='Output'
                              id='Output'
                              isSelected={ tab === 'output' }
                              onClick={ () => this.select('output') }
                              paddingX={ 50 }
                              paddingY={ 20 }
                              marginX={ 3 }
                              borderRadius={ 4 }
                              color='#36d6ae'
                              boxShadow='0px 0px 10px #36d6ae'
                              fontSize='16px'
                            >
                                Output
                            </Tab>
                        </Tablist>
                    </Pane>

                    {content}

                    {message && (
                        <Message style={ { position: 'sticky', bottom: '12%' } } type='error'>
                            {message}
                        </Message>
                    )}
                </MainContainer>
            </ScrollContainer>
        );
    }
}

const FooterCyb = ({ disabled, databaseId }) => (
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
            {databaseId ? (
                <span>
                    <Button
                      className='btn'
                      marginX={ 10 }
                      height={ 42 }
                      minWidth={ 215 }
                      justifyContent='center'
                      to={ `/databases/${databaseId}` }
                    >
                        Go to database
                    </Button>
                    <Button marginX={ 10 } minWidth={ 215 } justifyContent='center' height={ 42 } className='btn' to={ `/schema/${databaseId}` }>
                        Go to schema definition
                    </Button>
                </span>
            ) : (
                <Button paddingX={ 50 } height={ 42 } className='btn' disabled={ disabled }>
                    Create database
                </Button>
            )}
        </Pane>
    </Pane>
);

storiesOf('Examples/.chaingear', module)
    .add('newdb/index', () => (
        <Application>
            <Pages beneficiariesItem={ beneficiaries } />
            <FooterCyb />
        </Application>
    ))
    .add('newdb/have_id', () => (
        <Application>
            <Pages beneficiariesItem={ beneficiaries } />
            <FooterCyb databaseId />
        </Application>
    ))
    .add('newdb/disabledBttn', () => (
        <Application>
            <Pages beneficiariesItem={ beneficiaries } />
            <FooterCyb disabled />
        </Application>
    ))
    .add('newdb/error', () => (
        <Application>
            <Pages message='error' beneficiariesItem={ beneficiaries } />
            <FooterCyb />
        </Application>
    ));
