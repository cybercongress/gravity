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
        entries: '15',
        version: 'v1',
        date: '12/12/2010 00:26:20',
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
        entries: '555',
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
    renderItem = (item, index) => {
        const {
            date, owner, name, symbol, entries, version,
        } = item;

        return (
            <Table.Row paddingLeft={ 10 } isSelectable key={ index } borderBottom={0}>
                <Table.TextCell><sapn style={{color: '#fff', fontSize: 13}}>{name}</sapn></Table.TextCell>
                <Table.TextCell textAlign='start'><sapn style={{color: '#fff', fontSize: 13}}>{symbol}</sapn></Table.TextCell>
                <Table.TextCell textAlign='end'><sapn style={{color: '#fff', fontSize: 13}}>{entries}</sapn></Table.TextCell>
                <Table.TextCell textAlign='end'><sapn style={{color: '#fff', fontSize: 13}}>{version}</sapn></Table.TextCell>
                <Table.TextCell textAlign='end' flexGrow={ 5 }>
                    <sapn style={{color: '#fff', fontSize: 13}}>{owner}</sapn>
                </Table.TextCell>
                <Table.TextCell textAlign='end' width={ 140 } flex='none' alginItems='center' isNumber>
                    <sapn style={{color: '#fff'}}>{moment(date).format('D/MM YYYY h:mm:ss')}</sapn>
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
                        <Table.Head style={ { backgroundColor: '#000', borderBottom: '1px solid #ffffff80'}} paddingLeft={ 10 } paddingRight={0}>
                            <Table.TextHeaderCell><sapn style={{color: '#fff', fontSize: 15}}>Name</sapn></Table.TextHeaderCell>
                            <Table.TextHeaderCell textAlign='start'><sapn style={{color: '#fff', fontSize: 15}}>Symbol</sapn></Table.TextHeaderCell>
                            <Table.TextHeaderCell textAlign='end'><sapn style={{color: '#fff', fontSize: 15}}>Entries</sapn></Table.TextHeaderCell>
                            <Table.TextHeaderCell textAlign='end'><sapn style={{color: '#fff', fontSize: 15}}>Version</sapn></Table.TextHeaderCell>
                            <Table.TextHeaderCell textAlign='end' flexGrow={ 5 }>
                                <sapn style={{color: '#fff', fontSize: 15}}>Owner</sapn>
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell textAlign='end' width={ 140 } flex='none'>
                                <sapn style={{color: '#fff', fontSize: 15}}>Created</sapn>
                            </Table.TextHeaderCell>
                        </Table.Head>
                        <Table.Body style={ { backgroundColor: '#000', overflowY: 'hidden' } }>
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

storiesOf('Examples/.chaingear', module).add('databases', () => (
    <Application>
        <DataBaseTable databasesItem={ databases } />
        <FooterCyb />
    </Application>
));
