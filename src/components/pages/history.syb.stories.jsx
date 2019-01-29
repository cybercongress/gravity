import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
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
        let content = <CybLink dura={ dura }>{dura}</CybLink>;

        if (dura === 'history.cyb') {
            content = <span>{dura}</span>;
        }

        return (
            <tr key={ index }>
                <td>{content}</td>
                <td>{moment(date).format('D/MM YYYY h:mm:ss')}</td>
            </tr>
        );
    };

    render() {
        const { history } = this.props;

        const historyWithoutLast = history.slice(0, history.length - 1);

        historyWithoutLast.reverse();

        return (
            <ScrollContainer>
            <MainContainer>
                <PageTitle>History</PageTitle>
                    <TableCybLink>
                        <thead>
                            <tr>
                                <th>Address</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>{historyWithoutLast.map(this.renderItem)}</tbody>
                    </TableCybLink>
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
