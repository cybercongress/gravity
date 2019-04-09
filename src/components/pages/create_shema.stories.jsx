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
    IconButton,
} from 'evergreen-ui';
import {
    MainContainer, Code, Message, ScrollContainer, Section,
} from '../..';
import Application from '../Application/Application';
import code from './code';

const itemsTable = [
    {
        name: 'Address1',
        type: 'Address',
        validation: 'None',
    },
    {
        name: 'Address2',
        type: 'Uint256',
        validation: 'Unique',
    },
    {
        name: 'Address3',
        type: 'Uint256',
        validation: 'None',
    },
    {
        name: 'Address4',
        type: 'Bool',
        validation: 'Unique',
    },
    {
        name: 'Address5',
        type: 'Address',
        validation: 'None',
    },
    {
        name: 'Address6',
        type: 'String',
        validation: 'Unique',
    },
];

const canCreate = true;

class Pages extends React.Component {
    state = {
        tab: 'input',
    };

    select = (tab) => {
        this.setState({ tab });
    };

    render() {
        const { message, items } = this.props;

        const { tab } = this.state;

        let content;

        const tableRows = items.reverse().map(item => (
            <Table.Row
              style={ { border: 0 } }
              boxShadow='0px 0px 0.1px 0px #ddd'
              className='validators-table-row'
              paddingLeft='1rem'
            >
                <Table.TextCell flexGrow={ 2 }>
                    {item.name}
                </Table.TextCell>
                <Table.TextCell>{item.type}</Table.TextCell>
                <Table.TextCell>{item.validation}</Table.TextCell>
                <Table.TextCell flex='none' width={ 60 }>
                    <IconButton icon='trash' appearance='minimal' className='icon-btn' />
                </Table.TextCell>
            </Table.Row>
        ));

        const TabInput = () => (
            <Section title='Schema structure'>
                <Table width='100%'>
                    <Table.Head paddingLeft='1rem'>
                        <Table.TextHeaderCell flexGrow={ 2 }>
                            Name
                        </Table.TextHeaderCell>
                        <Table.TextHeaderCell>Type</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Validation</Table.TextHeaderCell>
                        <Table.TextHeaderCell flex='none' width={ 60 } />
                    </Table.Head>
                    <Table.Body style={ { backgroundColor: '#fff', overflowY: 'hidden' } }>
                        <Table.Row
                          paddingLeft='0.5rem'
                          style={ { border: 0 } }
                          boxShadow='0px 0px 0.1px 0px #ddd'
                        >
                            <Table.TextCell flexGrow={ 2 }>
                                <TextInput width='90%' />
                            </Table.TextCell>
                            <Table.TextCell>
                                <Select width='70%'>
                                    <option value='String'>String</option>
                                    <option value='Address'>Address</option>
                                    <option value='Bool'>Bool</option>
                                    <option value='Uint256'>Uint256</option>
                                </Select>
                            </Table.TextCell>
                            <Table.TextCell>
                                <Select width='50%'>
                                    <option value='Unique'>Unique</option>
                                    <option value='None'>None</option>
                                </Select>
                            </Table.TextCell>
                            <Table.TextCell flex='none' width={ 60 }>
                                <IconButton icon='add' appearance='minimal' className='icon-btn' />
                            </Table.TextCell>
                        </Table.Row>

                        <Pane>{tableRows}</Pane>
                    </Table.Body>
                </Table>
            </Section>
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
                        <Message
                          style={ { position: 'sticky', bottom: '10%', maxWidth: '100%' } }
                          type='error'
                        >
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
                    <Button marginX={ 10 } height={ 42 } minWidth={ 215 } className='btn' justifyContent='center' to={ `/schema/${databaseId}` }>
                        Go to schema definition
                    </Button>
                </span>
            ) : (
                <Button paddingX={ 50 } height={ 42 } marginX={ 15 } className='btn' disabled={ disabled }>
                    Deploy schema
                </Button>
            )}
        </Pane>
    </Pane>
);

storiesOf('chaingear/create_shema', module)
    .add('index', () => (
        <Application>
            <Pages items={ itemsTable } />
            <FooterCyb />
        </Application>
    ))
    .add('have_id', () => (
        <Application>
            <Pages items={ itemsTable } />
            <FooterCyb databaseId />
        </Application>
    ))
    .add('error', () => (
        <Application>
            <Pages message='error' items={ itemsTable } />
            <FooterCyb />
        </Application>
    ))
    .add('disabledBttn', () => (
        <Application>
            <Pages items={ itemsTable } />
            <FooterCyb disabled />
        </Application>
    ));
