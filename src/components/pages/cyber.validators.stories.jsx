import React, { Component } from 'react';
import { Provider, Subscribe } from 'unstated';
import { storiesOf } from '@storybook/react';
import {
    Pane,
    Text,
    Table,
    Tablist,
    Tab,
    Pill,
    Tooltip,
} from 'evergreen-ui';
import {
    MainContainer, ScrollContainer,
} from '../..';
import Application from '../Application/Application';

import validatorsContainer from './validatorsContainer';
import validatorsData from './validatorsData';

class Validators extends React.Component {
    async componentWillMount() {
        await validatorsContainer.getValidators();
    }

    render() {
        return (
            <Provider>
                <Subscribe to={ [validatorsContainer] }>
                    {(container) => {
                        const {
                            //    validators,
                            showJailed,
                        } = container.state;
                        const { validators } = this.props;

                        const validatorRows = validators
                            .filter(validator => validator.jailed === showJailed)
                            .map((validator, index) => {
                                const height = validator.jailed
                                    ? validator.unbonding_height
                                    : validator.bond_height || 0;
                                const commission = (validator.commission.rate * 100).toFixed(0);
                                const powerFloat = validator.tokens / 1000000000;
                                const power = Math.round(powerFloat * 1) / 1;

                                let statusColor;

                                switch (validator.status) {
                                    case 0:
                                        statusColor = 'red';
                                        break;
                                    case 1:
                                        statusColor = 'yellow';
                                        break;
                                    case 2:
                                        statusColor = 'green';
                                        break;
                                    default:
                                        statusColor = 'neutral';
                                        break;
                                }

                                const statusTooltip = (
                                    <Pane display='flex' alignItems='center'>
                                        <Tooltip
                                          appearance='card'
                                          content={ (
                                              <Pane
                                                display='flex'
                                                alignItems='center'
                                                paddingX={ 18 }
                                                paddingY={ 18 }
                                              >
                                                  <Text>
                                                        Validator status:&nbsp;
                                                      {validator.status === 0 && 'unbonded'}
                                                      {validator.status === 1 && 'unbonding'}
                                                      {validator.status === 2 && 'bonded'}
                                                  </Text>
                                              </Pane>
) }
                                        >
                                            <Pill
                                              height={ 7 }
                                              width={ 7 }
                                              borderRadius='50%'
                                              paddingX={ 4 }
                                              paddingY={ 0 }
                                              marginX={ 20 }
                                              isSolid
                                              color={ statusColor }
                                            />
                                        </Tooltip>
                                    </Pane>
                                );

                                return (
                                    <Table.Row
                                      style={ { border: 0 } }
                                      boxShadow='0px 0px 0.1px 0px #ddd'
                                      className='validators-table-row'
                                      isSelectable
                                      key={ validator.description.moniker }
                                    >
                                        <Table.TextCell textAlign='center' width={ 70 } flex='none'>
                                            {statusTooltip}
                                        </Table.TextCell>
                                        <Table.TextCell
                                          textAlign='center'
                                          flexBasis={ 60 }
                                          flexShrink={ 0 }
                                          flexGrow={ 0 }
                                          isNumber
                                        >
                                            {index + 1}
                                        </Table.TextCell>
                                        <Table.TextCell>
                                            {validator.description.moniker}
                                        </Table.TextCell>
                                        <Table.TextCell
                                          textAlign='center'
                                          flexBasis={ 80 }
                                          flexShrink={ 0 }
                                          flexGrow={ 0 }
                                          isNumber
                                        >
                                            {power}
                                        </Table.TextCell>
                                        <Table.TextCell textAlign='center' flexGrow={ 1 }>
                                            {commission}
                                        </Table.TextCell>
                                        <Table.TextCell textAlign='center' flexGrow={ 2 }>
                                            {validator.operator_address}
                                        </Table.TextCell>
                                        <Table.TextCell
                                          textAlign='center'
                                          flexShrink={ 0 }
                                          flexGrow={ 1 }
                                          isNumber
                                        >
                                            {height}
                                        </Table.TextCell>
                                    </Table.Row>
                                );
                            });

                        return (
                            <ScrollContainer style={ { width: '100%' } }>
                                <MainContainer>
                                    <Pane
                                      display='flex'
                                      flexDirection='column'
                                      alignItems='center'
                                      justifyContent='center'
                                    >
                                        <Tablist marginBottom={ 24 }>
                                            <Tab
                                              key='Active'
                                              id='Active'
                                              isSelected={ !showJailed }
                                              onSelect={ container.showActive }
                                              paddingX={ 50 }
                                              paddingY={ 20 }
                                              marginX={ 3 }
                                              borderRadius={ 4 }
                                              color='#36d6ae'
                                              boxShadow='0px 0px 10px #36d6ae'
                                              fontSize='16px'
                                            >
                                                Active
                                            </Tab>
                                            <Tab
                                              key='Jailed'
                                              id='Jailed'
                                              isSelected={ showJailed }
                                              onSelect={ container.showJailed }
                                              paddingX={ 50 }
                                              paddingY={ 20 }
                                              marginX={ 3 }
                                              borderRadius={ 4 }
                                              color='#36d6ae'
                                              boxShadow='0px 0px 10px #36d6ae'
                                              fontSize='16px'
                                            >
                                                Jailed
                                            </Tab>
                                        </Tablist>
                                    </Pane>

                                    <Table>
                                        <Table.Head>
                                            <Table.TextHeaderCell
                                              textAlign='center'
                                              width={ 70 }
                                              flex='none'
                                            />
                                            <Table.TextHeaderCell
                                              textAlign='center'
                                              flexBasis={ 60 }
                                              flexShrink={ 0 }
                                              flexGrow={ 0 }
                                            >
                                                Rank
                                            </Table.TextHeaderCell>
                                            <Table.TextHeaderCell flexGrow={ 1 }>
                                                Name
                                            </Table.TextHeaderCell>
                                            <Table.TextHeaderCell
                                              textAlign='center'
                                              flexBasis={ 80 }
                                              flexShrink={ 0 }
                                              flexGrow={ 0 }
                                            >
                                                Power (GCYB)
                                            </Table.TextHeaderCell>
                                            <Table.TextHeaderCell flexGrow={ 1 } textAlign='center'>
                                                Commission (%)
                                            </Table.TextHeaderCell>
                                            <Table.TextHeaderCell textAlign='center' flexGrow={ 2 }>
                                                Address
                                            </Table.TextHeaderCell>
                                            <Table.TextHeaderCell
                                              textAlign='center'
                                              flexShrink={ 1 }
                                              flexGrow={ 1 }
                                            >
                                                {showJailed ? 'Unbonding height' : 'Bond height'}
                                            </Table.TextHeaderCell>
                                        </Table.Head>
                                        <Table.Body
                                          style={ { backgroundColor: '#fff', overflowY: 'hidden' } }
                                        >
                                            {validatorRows}
                                        </Table.Body>
                                    </Table>
                                </MainContainer>
                            </ScrollContainer>
                        );
                    }}
                </Subscribe>
            </Provider>
        );
    }
}

storiesOf('Examples/cyber', module)
    .add('validators', () => (
        <Application>
            <Validators validators={ validatorsData } />
        </Application>
    ));
