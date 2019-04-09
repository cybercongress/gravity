import React, { Component } from 'react';
import { Provider, Subscribe } from 'unstated';
import { storiesOf } from '@storybook/react';
import {
    Pane,
    Heading,
    TextInput,
    Button,
    Text,
    Link,
    Icon,
    Table,
    Tablist,
    Tab,
    Pill,
    Tooltip,
} from 'evergreen-ui';
import {
    MainContainer, SearchItem, Vitalick, ScrollContainer, CardHover, SkillBar,
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

const Index = () => (
    <Pane>
        <Pane marginBottom={ 50 }>
            <Heading size={ 600 } color='#7c7c7c' marginBottom={ 24 }>
                Network load
            </Heading>
            <CardHover paddingY={ 20 } paddingX={ 24 } backgroundColor='#000000'>
                <Text color='#fff' lineHeight={ 2 }>
                    Current network capacity is 4 877 888 399 888 347 BP per 24 hours. Last day load
                    is 834 883 888 883 or 17%. Given that link price is 400 BP fractional reserve
                    coefficient is around 5.8. So you can bring 5 time more cyberlinks! Dont waste
                    your time!
                </Text>
            </CardHover>
        </Pane>
        <Pane marginBottom={ 50 }>
            <Heading size={ 600 } color='#7c7c7c' marginBottom={ 24 }>
                Search stats
            </Heading>
            <Pane display='flex' marginX={ -8 }>
                <CardHover
                  flex={ 1 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  paddingY={ 50 }
                  marginX={ 8 }
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#fff' fontSize='30px'>
                        674 555
                    </Text>
                    <Text display='inline-block' color='#5f7385'>
                        cyberlinks
                    </Text>
                </CardHover>
                <CardHover
                  flex={ 1 }
                  paddingY={ 50 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  marginX={ 8 }
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#fff' fontSize='30px'>
                        267 582
                    </Text>
                    <Text display='inline-block' color='#5f7385'>
                        content ids
                    </Text>
                </CardHover>
                <CardHover
                  flex={ 1 }
                  paddingY={ 50 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  marginX={ 8 }
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#fff' fontSize='30px'>
                        132 331
                    </Text>
                    <Text display='inline-block' color='#5f7385'>
                        accounts
                    </Text>
                </CardHover>
                <CardHover
                  flex={ 1 }
                  paddingY={ 50 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  marginX={ 8 }
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#fff' fontSize='30px'>
                        13 M
                    </Text>
                    <Text display='inline-block' color='#5f7385'>
                        transactions
                    </Text>
                </CardHover>
            </Pane>
        </Pane>
        <Pane marginBottom={ 50 }>
            <Heading size={ 600 } color='#7c7c7c' marginBottom={ 24 }>
                Consensus stats
            </Heading>
            <Pane display='flex' marginX={ -8 }>
                <CardHover
                  flex={ 1 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000'
                  paddingY={ 50 }
                  marginX={ 8 }
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#fff' fontSize='30px'>
                        155
                    </Text>
                    <Text display='inline-block' color='#5f7385'>
                        supply
                    </Text>
                </CardHover>
                <CardHover
                  flex={ 1 }
                  paddingY={ 50 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  marginX={ 8 }
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#4caf50' fontSize='30px'>
                        12
                    </Text>
                    <Link cursor='pointer' textDecoration='none'>
                        {' '}
                        <Pane display='flex' alignItems='center'>
                            {' '}
                            <Text color='#4caf50'>active validators</Text>
                            <Icon icon='arrow-right' color='#4caf50' marginLeft={ 5 } />
                            {' '}
                        </Pane>
                    </Link>
                </CardHover>
                <CardHover
                  flex={ 1 }
                  paddingY={ 50 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  marginX={ 8 }
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#fff' fontSize='30px'>
                        15%
                    </Text>

                    <Text display='inline-block' color='#5f7385'>
                        validating stake
                    </Text>
                </CardHover>
                <CardHover
                  flex={ 1 }
                  paddingY={ 50 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  marginX={ 8 }
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#fff' fontSize='30px'>
                        789 900
                    </Text>

                    <Text display='inline-block' color='#5f7385'>
                        last block
                    </Text>
                </CardHover>
            </Pane>
        </Pane>
    </Pane>
);

const IndexV2 = () => (
    <Pane>
        <Pane marginBottom={ 56 }>
            <Heading size={ 600 } color='#fff' marginBottom={ 24 }>
                My bandwidth
            </Heading>
            <SkillBar style={ { height: 16 } } value={ 80 } />
        </Pane>
        <Pane marginBottom={ 50 }>
            <Heading size={ 600 } color='#fff' marginBottom={ 24 }>
                Knowledge grapth
            </Heading>
            <Pane display='flex' marginX={ -15 }>
                <CardHover
                  indexV2
                  flex={ 1 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  paddingY={ 50 }
                  marginX={ 15 }
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#4ed6ae' fontSize='30px'>
                        674 555
                    </Text>

                    <Text display='inline-block' color='#4ed6ae'>
                        cyberlinks
                    </Text>
                </CardHover>
                <CardHover
                  indexV2
                  flex={ 1 }
                  paddingY={ 50 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  marginX={ 15 }
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#4ed6ae' fontSize='30px'>
                        267 582
                    </Text>

                    <Text display='inline-block' color='#4ed6ae'>
                        content ids
                    </Text>
                </CardHover>
                <CardHover
                  flex={ 1 }
                  paddingY={ 50 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  marginX={ 15 }
                  indexV2
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#4ed6ae' fontSize='30px'>
                        132 331
                    </Text>

                    <Text display='inline-block' color='#4ed6ae'>
                        accounts
                    </Text>
                </CardHover>
            </Pane>
        </Pane>
        <Pane marginBottom={ 50 }>
            <Heading size={ 600 } color='#fff' marginBottom={ 24 }>
                Cybernomics
            </Heading>
            <Pane display='flex' marginX={ -15 }>
                <CardHover
                  flex={ 1 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000'
                  paddingY={ 50 }
                  marginX={ 15 }
                  indexV2
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#4ed6ae' fontSize='30px'>
                        155 874
                    </Text>

                    <Text display='inline-block' color='#4ed6ae'>
                        Total CYB
                    </Text>
                </CardHover>
                <CardHover
                  flex={ 1 }
                  paddingY={ 50 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  marginX={ 15 }
                  indexV2
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#4ed6ae' fontSize='30px'>
                        12 %
                    </Text>

                    <Text display='inline-block' color='#4ed6ae'>
                        Staked CYB
                        {' '}
                    </Text>
                </CardHover>
                <CardHover
                  flex={ 1 }
                  paddingY={ 50 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  marginX={ 15 }
                  indexV2
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#4ed6ae' fontSize='30px'>
                        400
                    </Text>

                    <Text display='inline-block' color='#4ed6ae'>
                        Price of cyberlink
                        {' '}
                    </Text>
                </CardHover>
            </Pane>
        </Pane>
        <Pane marginBottom={ 50 }>
            <Heading size={ 600 } color='#fff' marginBottom={ 24 }>
                Consensus
            </Heading>
            <Pane display='flex' marginX={ -15 }>
                <CardHover
                  flex={ 1 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000'
                  paddingY={ 50 }
                  marginX={ 15 }
                  indexV2
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#4ed6ae' fontSize='30px'>
                        12
                    </Text>

                    <Text display='inline-block' color='#4ed6ae'>
                        active validators
                    </Text>
                </CardHover>
                <CardHover
                  flex={ 1 }
                  paddingY={ 50 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  marginX={ 15 }
                  indexV2
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#4ed6ae' fontSize='30px'>
                        13 M
                    </Text>

                    <Text display='inline-block' color='#4ed6ae'>
                        transactions
                        {' '}
                    </Text>
                </CardHover>
                <CardHover
                  flex={ 1 }
                  paddingY={ 50 }
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  backgroundColor='#000000'
                  marginX={ 15 }
                  indexV2
                >
                    <Text display='inline-block' marginBottom={ 15 } color='#4ed6ae' fontSize='30px'>
                        789 900
                    </Text>

                    <Text display='inline-block' color='#4ed6ae'>
                        {' '}
                        last block
                        {' '}
                    </Text>
                </CardHover>
            </Pane>
        </Pane>
    </Pane>
);

class App extends React.Component {
    state = {
        links: [],
        defaultAddress: null,
        browserSupport: false,
        searchQuery: '',
        seeAll: false,
        balance: 0,
        PopupNotification: false,
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

    openLink = (e, link) => {
        const { balance, defaultAddress: address } = this.state;
        const cidFrom = this.refs.searchInput.value;
        const cidTo = link.content;

        console.log(`from: ${cidFrom} to: ${cidTo}`, address, balance);

        window.cyber.link(cidFrom, cidTo, address);
    };

    render() {
        const { seeAll } = this.state;

        if (this.state.browserSupport) {
            return <div>Browser not supported. Download latest CYB!</div>;
        }

        const {
            searchQuery,
            links,
            defaultAddress,
            balance,
            index,
            indexV2,
            PopupNotification,
        } = this.props;

        const grade = {
            from: 0.0001,
            to: 0.1,
            value: 4,
        };

        const searchResults = links.slice(0, seeAll ? links.length : 10).map(
            link => (
                <SearchItem
                  onClick={ e => this.openLink(e, link) }
                  hash={ link.hash }
                  rank={ link.rank }
                  grade={ grade }
                  status={ link.status }
                >
                    {link.content}
                </SearchItem>
            ),
            // <div key={link.hash} className={styles.searchItem}>
            //     <a onClick={(e) => this.openLink(e, link)} href={`cyb://${link.content}`}> {link.content} </a><span>{link.rank}</span>
            // </div>
        );

        console.log(' defaultAddress ', this.state.defaultAddress);

        return (
            <div>
                <ScrollContainer style={ { height: 'calc(100vh - 140px)' } }>
                    <MainContainer>
                        {links.length > 0 && (
                            <div>
                                <Heading size={ 600 } color='#7c7c7c' marginBottom={ 24 }>
                                    The answer for 42 is
                                </Heading>
                                <Pane>{searchResults}</Pane>
!
                                {' '}
                                {links.length > 10 && (
                                    <Pane display='flex' justifyContent='center'>
                                        <Button
                                            //   appearance="primary"
                                          fontSize='1em'
                                          marginY={ 15 }
                                          className='btn'
                                          onClick={ () => this.seeAll() }
                                        >
                                            {!seeAll ? 'see all' : 'top 10'}
                                        </Button>
                                    </Pane>
                                )}
                            </div>
                        )}

                        {index && <Index />}
                        {indexV2 && <IndexV2 />}

                        {defaultAddress && balance > 0 && searchQuery && links.length === 0 && (
                            <Pane display='flex' justifyContent='space-around' paddingTop='5%'>
                                <Pane>
                                    <Vitalick />
                                </Pane>
                                <Pane
                                  display='flex'
                                  alignItems='center'
                                  justifyContent='center'
                                  flexDirection='column'
                                >
                                    <Pane width={ 323 } textAlign='center' marginBottom={ 25 }>
                                        <Text size={ 600 } color='#fff'>
                                            You are the first one who are searching for
                                            <b>
                                                {' '}
                                                {searchQuery}
                                                {' '}
                                            </b>
                                        </Text>
                                    </Pane>
                                    <Pane width={ 323 } textAlign='center'>
                                        <Text size={ 600 } color='#fff'>
                                            Cyber your query and Cyb will understand it!
                                        </Text>
                                    </Pane>
                                </Pane>
                            </Pane>
                        )}
                    </MainContainer>
                </ScrollContainer>
                <Pane
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  position='absolute'
                  bottom={ 0 }
                  width='100%'
                  backgroundColor='#000000'
                  paddingY={ 11 }
                  zIndex={ 2 }
                >
                    <Pane alignItems='center' justifyContent='center' display='flex' width={ 1000 }>
                        {defaultAddress && balance > 0 && searchQuery && links.length >= 0 && (
                            <Pane
                              display='flex'
                              justifyContent='center'
                              flexDirection='row'
                              width='100%'
                            >
                                <TextInput
                                  height={ 42 }
                                  width='40%'
                                  ref='cidToInput'
                                  marginRight={ 15 }
                                  fontSize='18px'
                                  placeholder='Have your own answer?'
                                  textAlign='left'
                                  backgroundColor='transparent'
                                  className='input-green'
                                />
                                <Button
                                  whiteSpace='nowrap'
                                  paddingX={ 50 }
                                  height={ 42 }
                                  fontSize='18px'
                                  borderRadius={ 3 }
                                  className='btn'
                                    //   onClick={ () => this.link() }
                                >
                                    Cyber it
                                </Button>
                            </Pane>
                        )}
                        {(index || indexV2) && (
                            <Pane display='flex' flexDirection='row' marginLeft={ 80 } width='65%'>
                                <TextInput
                                  height={ 42 }
                                  width='100%'
                                  ref='cidToInput'
                                  marginRight={ 15 }
                                  placeholder='Question'
                                  fontSize='18px'
                                  backgroundColor='transparent'
                                  className='input-green'
                                />
                                <TextInput
                                  height={ 42 }
                                  width='100%'
                                  ref='cidToInput'
                                  marginRight={ 15 }
                                  placeholder='Answer'
                                  fontSize='18px'
                                  backgroundColor='transparent'
                                  className='input-green'
                                />
                                <Button
                                  whiteSpace='nowrap'
                                  paddingX={ 50 }
                                  height={ 42 }
                                  fontSize='18px'
                                  className='btn'
                                  borderRadius={ 3 }
                                    //   onClick={ () => this.link()}
                                >
                                    Cyber it
                                </Button>
                            </Pane>
                        )}
                    </Pane>
                </Pane>
            </div>
        );
    }
}

const links = [
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: 1,
        status: 'success',
    },
    {
        content: 'test',
        hash: 'test',
        rank: '',
        status: 'loading',
    },

    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '3',
        status: 'loading',
    },
    {
        content: 'test',
        hash: '45412',
        rank: '4',
        status: 'failed',
    },
    {
        content: 'fotrty two',
        hash: '45412',
        rank: '5',
    },
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '6',
        status: 'loading',
    },
    {
        content: 'fotrty two',
        hash: '45412',
        rank: '1',
        status: 'success',
    },

    {
        content: 'fotrty two',
        hash: '45412',
        rank: '7',
        status: 'success',
    },
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '2',
        status: 'loading',
    },
    {
        content: '312',
        hash: '45412',
        rank: '4',
        status: 'failed',
    },
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '1',
    },

    {
        content: 'test',
        hash: '45412',
        rank: '16',
    },
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '1',
    },
    {
        content: 'fotrty two',
        hash: '45412',
        rank: '1',
        status: 'success',
    },

    {
        content: 'fotrty two',
        hash: '45412',
        rank: '7',
        status: 'success',
    },
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '2',
        status: 'loading',
    },
    {
        content: '312',
        hash: '45412',
        rank: '4',
        status: 'failed',
    },
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '1',
    },

    {
        content: 'test',
        hash: '45412',
        rank: '16',
    },
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '1',
    },
    {
        content: 'fotrty two',
        hash: '45412',
        rank: '1',
        status: 'success',
    },

    {
        content: 'fotrty two',
        hash: '45412',
        rank: '7',
        status: 'success',
    },
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '2',
        status: 'loading',
    },
    {
        content: '312',
        hash: '45412',
        rank: '4',
        status: 'failed',
    },
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '1',
    },

    {
        content: 'test',
        hash: '45412',
        rank: '16',
    },
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '1',
    },
];

const links2 = [];
const links3 = [
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: 'sds12',
        rank: '2',
    },
    {
        content: '312',
        hash: '45412',
        rank: '1',
    },
];

storiesOf('cyber/pages', module)
    .add('index', () => (
        <Application>
            <App
              searchQuery='test'
              links={ links2 }
              defaultAddress='test'
              PopupNotification
              balance='0'
              index='1'
            />
        </Application>
    ))
    .add('indexV2', () => (
        <Application>
            <App
              searchQuery='test'
              links={ links2 }
              defaultAddress='test'
              PopupNotification
              balance='0'
              indexV2
            />
        </Application>
    ))
    .add('validators', () => (
        <Application>
            <Validators validators={ validatorsData } />
        </Application>
    ))
    .add('few results', () => (
        <Application>
            <App searchQuery='test' links={ links3 } defaultAddress='test' balance='1000' />
        </Application>
    ))
    .add('lot result', () => (
        <Application>
            <App searchQuery='test' links={ links } defaultAddress='test' balance='1000' />
        </Application>
    ))
    .add('no result', () => (
        <Application>
            <App searchQuery='test' links={ links2 } defaultAddress='test' balance='1' />
        </Application>
    ));
