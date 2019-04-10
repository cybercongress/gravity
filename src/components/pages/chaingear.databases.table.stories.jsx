import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Table, Pane, Text, Button,
} from 'evergreen-ui';
import moment from 'moment';
// import { connect } from 'react-redux';

// import * as actions from '../../redux/settings';
import { MainContainer, ScrollContainer } from '../..';
import Application from '../Application/Application';

const databases = [
    {
        name: 'database_1',
        symbol: 'DB1',
        entries: '5',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        owner: 'cybervaloper18wn5kyxewwk6qh97493xtj9gufpmqserdykng9',
    },
    {
        name: 'database_2',
        symbol: 'DB1',
        entries: '5',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        owner: 'cybervaloper18wn5kyxewwk6qh97493xtj9gufpmqserdykng9',
    },
    {
        name: 'database_1',
        symbol: 'DB1',
        entries: '5',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        owner: 'cybervaloper18wn5kyxewwk6qh97493xtj9gufpmqserdykng9',
    },
    {
        name: 'database_1',
        symbol: 'DB1',
        entries: '5',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        owner: 'cybervaloper18wn5kyxewwk6qh97493xtj9gufpmqserdykng9',
    },
    {
        name: 'database_1',
        symbol: 'DB1',
        entries: '5',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        owner: 'cybervaloper18wn5kyxewwk6qh97493xtj9gufpmqserdykng9',
    },
    {
        name: 'database_2',
        symbol: 'DB1',
        entries: '5',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        owner: 'cybervaloper18wn5kyxewwk6qh97493xtj9gufpmqserdykng9',
    },
    {
        name: 'database_1',
        symbol: 'DB1',
        entries: '5',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        owner: 'cybervaloper18wn5kyxewwk6qh97493xtj9gufpmqserdykng9',
    },
    {
        name: 'database_1',
        symbol: 'DB1',
        entries: '5',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        owner: 'cybervaloper18wn5kyxewwk6qh97493xtj9gufpmqserdykng9',
    },
    {
        name: 'database_1',
        symbol: 'DB1',
        entries: '5',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        owner: 'cybervaloper18wn5kyxewwk6qh97493xtj9gufpmqserdykng9',
    },
    {
        name: 'database_2',
        symbol: 'DB1',
        entries: '5',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        owner: 'cybervaloper18wn5kyxewwk6qh97493xtj9gufpmqserdykng9',
    },
    {
        name: 'database_1',
        symbol: 'DB1',
        entries: '5',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        owner: 'cybervaloper18wn5kyxewwk6qh97493xtj9gufpmqserdykng9',
    },
    {
        name: 'database_1',
        symbol: 'DB1',
        entries: '5',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        owner: 'cybervaloper18wn5kyxewwk6qh97493xtj9gufpmqserdykng9',
    },
];

class DataBaseTable extends Component {
    renderItem = (item) => {
        const {
            date, owner, name, symbol, entries, version,
        } = item;

        return (
            <Table.Row paddingLeft={ 20 } isSelectable key={ name }>
                <Table.TextCell>{name}</Table.TextCell>
                <Table.TextCell textAlign='end'>{symbol}</Table.TextCell>
                <Table.TextCell textAlign='end'>{entries}</Table.TextCell>
                <Table.TextCell textAlign='end'>{version}</Table.TextCell>
                <Table.TextCell textAlign='center' flexGrow={ 4 }>
                    {owner}
                </Table.TextCell>
                <Table.TextCell textAlign='center' width={ 160 } flex='none' alginItems='center' isNumber>
                    {moment(date).format('D/MM YYYY h:mm:ss')}
                </Table.TextCell>
            </Table.Row>
        );
    };

    render() {
        const { databasesItem } = this.props;

        return (
            <ScrollContainer>
                <MainContainer style={ { paddingBottom: 100, paddingTop: 50 } }>
                    <Table>
                        <Table.Head paddingLeft={ 20 } paddingRight={0}>
                            <Table.TextHeaderCell>Name</Table.TextHeaderCell>
                            <Table.TextHeaderCell textAlign='end'>Symbol</Table.TextHeaderCell>
                            <Table.TextHeaderCell textAlign='end'>Entries</Table.TextHeaderCell>
                            <Table.TextHeaderCell textAlign='end'>Version</Table.TextHeaderCell>
                            <Table.TextHeaderCell textAlign='center' flexGrow={ 4 }>
                                Owner
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell textAlign='center' width={ 160 } flex='none'>
                                Created
                            </Table.TextHeaderCell>
                        </Table.Head>
                        <Table.Body style={ { backgroundColor: '#fff', overflowY: 'hidden' } }>
                            {databasesItem.map(this.renderItem)}
                        </Table.Body>
                    </Table>
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

storiesOf('chaingear', module).add('databases', () => (
    <Application>
        <DataBaseTable databasesItem={ databases } />
        <FooterCyb />
    </Application>
));
