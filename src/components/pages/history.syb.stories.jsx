import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Table, Pane, IconButton, Menu, Popover, Dialog, Text, TextInput,
} from 'evergreen-ui';
import moment from 'moment';
// import { connect } from 'react-redux';

// import * as actions from '../../redux/settings';
import {
    MainContainer, PageTitle, CybLink, TableCybLink, ScrollContainer,
} from '../..';
import Application from '../Application/Application';

class History extends Component {
    renderItem = (item, index) => {
        const { dura, date } = item;
        let content = <CybLink style={{color: '#1976d2'}} dura={ dura }>{dura}</CybLink>;

        if (dura === 'history.cyb') {
            content = <span>{dura}</span>;
        }

        return (
            <Table.Row paddingLeft={ 20 } isSelectable key={ index }>
                <Table.TextCell>{content}</Table.TextCell>
                <Table.TextCell width={160} flex='none' alginItems='center' isNumber>{moment(date).format('D/MM YYYY h:mm:ss')}</Table.TextCell>
            </Table.Row>
        );
    };

    render() {
        const { history } = this.props;

        const historyWithoutLast = history.slice(0, history.length - 1);

        historyWithoutLast.reverse();

        return (
            <ScrollContainer>
            <MainContainer>
                    <Table>
                        <Table.Head paddingLeft={ 20 }>
                                <Table.TextHeaderCell>Dura</Table.TextHeaderCell>
                                <Table.TextHeaderCell textAlign='center' width={160} flex='none'>Date</Table.TextHeaderCell>
                        </Table.Head>
                        <Table.Body style={ { backgroundColor: '#fff', overflowY: 'hidden' } }>{historyWithoutLast.map(this.renderItem)}</Table.Body>
                    </Table>
            </MainContainer>
            </ScrollContainer>
        );
    }
}
const history = [
    {
        index: 'yyg',
        dura: 'h.cyb',
        date: '12/12/2010 4:26:20',
    },
    {
        index: 'dfgd',
        dura: 'rr.cyb',
        date: '12/12/2010 4:26:20',
    },
    {
        index: 'dfgd',
        dura: 'rr.cyb',
        date: '12/12/2010 4:26:20',
    },
    {
        index: 'dfgd',
        dura: 'rr.cyb',
        date: '12/12/2010 4:26:20',
    },
];

storiesOf('cyb/pages/History', module).add('History', () => (
    <Application>
        <History history={ history } />
    </Application>
));
