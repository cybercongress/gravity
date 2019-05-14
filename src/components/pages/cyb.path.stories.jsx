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
            <Table.Row borderBottom='none' paddingLeft={ 20 } isSelectable key={ index }>
                <Table.TextCell><span style={{color: '#fff', fontSize: 16}}>{content}</span></Table.TextCell>
                <Table.TextCell width={200} flex='none' textAlign='end' isNumber><span style={{color: '#fff', fontSize: 16}}>{moment(date).format('D/MM YYYY h:mm:ss')}</span></Table.TextCell>
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
                        <Table.Head style={{backgroundColor: '#000', borderBottom: '1px solid #ffffff80'}} paddingLeft={ 20 }>
                                <Table.TextHeaderCell><span style={{color: '#fff', fontSize: 17}}>Dura</span></Table.TextHeaderCell>
                                <Table.TextHeaderCell textAlign='end' width={200} flex='none'><span style={{color: '#fff', fontSize: 17}}>Date</span></Table.TextHeaderCell>
                        </Table.Head>
                        <Table.Body style={ { backgroundColor: '#000', overflowY: 'hidden' } }>{historyWithoutLast.map(this.renderItem)}</Table.Body>
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

storiesOf('Examples/id', module).add('path.cyb', () => (
    <Application>
        <History history={ history } />
    </Application>
));
