import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane, Heading, TextInput, Button, Text,
} from 'evergreen-ui';
import {
    // Button,
    Title,
    PageTitle,
    MainContainer,
    PopupSkillBar,
    Input,
    CentredPanel,
    Section,
    SectionContent,
    FlexContainer,
    SkillBar,
    SearchItem,
    LinkContainer,
    Vitalick,
    IconLinks,
    IconCIDs,
    IconAccounts,
    IconBlockHeight,
    IconBlockDelay,
    // Text,
    ScrollContainer,
} from '../..';
import Application from '../Application/Application';

class App extends Component {
    state = {
        links: [],
        defaultAddress: null,
        browserSupport: false,
        searchQuery: '',
        seeAll: false,
        balance: 0,
        PopupNotification: false,
    };

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
            PopupNotification,
        } = this.props;

        const searchResults = links.slice(0, seeAll ? links.length : 10).map(
            link => (
                <SearchItem
                  onClick={ e => this.openLink(e, link) }
                  hash={ link.hash }
                  rank={ link.rank }
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
                <ScrollContainer style={ { paddingBottom: 70 } }>
                    <MainContainer>
                        {/* <FlexContainer>
                    <div style={ { width: '30%' } }>
                        <Text style={ { paddingBottom: '10px' } }>Your bandwidth:</Text>
                        <SkillBar value={ 10 }>
                            {PopupNotification && (
                                <PopupSkillBar>
                                    <Text color='white'>600000 of 1000000 left (60%) </Text>
                                </PopupSkillBar>
                            )}
                        </SkillBar>
                    </div>
                </FlexContainer> */}

                        {links.length > 0 && (
                            <div>
                                <Heading size={ 600 } color='#7c7c7c' marginBottom={ 24 }>
                                    The answer for 42 is
                                </Heading>
                                <Pane>{searchResults}</Pane>
                                {links.length > 10 && (
                                    <Pane display='flex' justifyContent='center'>
                                        <Button
                                            //   appearance="primary"
                                          fontSize='1em'
                                          marginY={ 15 }
                                          onClick={ () => this.seeAll() }
                                        >
                                            {!seeAll ? 'see all' : 'top 10'}
                                        </Button>
                                    </Pane>
                                )}
                            </div>
                        )}

                        {index && (
                            <div>
                                <Title
                                  style={ {
                                        marginLeft: '0px',
                                        marginBottom: '30px',
                                        textAlign: 'center',
                                    } }
                                >
                                    Search statistics
                                </Title>
                                <Section>
                                    <SectionContent>
                                        <CentredPanel>
                                            <IconLinks />
                                            <Text uppercase color='blue'>
                                                links
                                            </Text>
                                            <Text color='blue' size='xlg'>
                                                1000
                                            </Text>
                                        </CentredPanel>
                                    </SectionContent>
                                    <SectionContent>
                                        <CentredPanel>
                                            <IconCIDs />
                                            <Text uppercase color='blue'>
                                                CIDs
                                            </Text>
                                            <Text color='blue' size='xlg'>
                                                1000
                                            </Text>
                                        </CentredPanel>
                                    </SectionContent>
                                    <SectionContent>
                                        <CentredPanel>
                                            <IconAccounts />
                                            <Text uppercase color='blue'>
                                                accounts
                                            </Text>
                                            <Text color='blue' size='xlg'>
                                                1000
                                            </Text>
                                        </CentredPanel>
                                    </SectionContent>
                                    <SectionContent>
                                        <CentredPanel>
                                            <IconBlockHeight />
                                            <Text uppercase color='blue'>
                                                last block height
                                            </Text>
                                            <Text color='blue' size='xlg'>
                                                1000
                                            </Text>
                                        </CentredPanel>
                                    </SectionContent>
                                    <SectionContent>
                                        <CentredPanel>
                                            <IconBlockDelay />
                                            <Text uppercase color='blue'>
                                                last block delay
                                            </Text>
                                            <Text color='blue' size='xlg'>
                                                100 sec
                                            </Text>
                                        </CentredPanel>
                                    </SectionContent>
                                </Section>
                            </div>
                        )}

                        {/* {defaultAddress && balance > 0 && searchQuery && links.length > 0 && (
                    <LinkContainer column>
                        <Text size='lg' style={ { marginBottom: '20px' } }>
                            Have your own option for
                            <b>
"
                                {searchQuery}
"
                            </b>
? Link your query and Cyb will understand it!
                        </Text>
                        <FlexContainer>
                            <Input placeholder='type your link her...' ref='cidToInput' />
                            <Button
                              color='ogange'
                              transformtext
                              type='button'
                              style={ { height: '30px', marginLeft: '10px' } }
                              onClick={ () => this.link() }
                            >
                                Link it!
                            </Button>
                        </FlexContainer>
                    </LinkContainer>
                )} */}

                        {defaultAddress && balance > 0 && searchQuery && links.length === 0 && (
                            <Pane display='flex' paddingTop={ 100 }>
                                <Pane width='30%'>
                                    <Vitalick />
                                </Pane>
                                <Pane display='flex' alignItems='center' justifyContent='center' flexDirection='column' width='60%'>
                                    <Pane width={323} textAlign='center' marginBottom={ 25 }>
                                        <Text size={600} color='#7c7c7c'>
                                            You are the first one who are searching for
                                            <b>
                                                {' '}
                                                {searchQuery}
                                                {' '}
                                            </b>
                                        </Text>
                                    </Pane>
                                    <Pane width={323} textAlign='center'>
                                        <Text size={600} color='#7c7c7c'>Cyber your query and Cyb will understand it!</Text>
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
                  height={ 65 }
                  width='100%'
                  backgroundColor='#000000'
                  paddingY={ 12 }
                  zIndex={ 2 }
                >
                    <Pane
                      alignItems='center'
                      justifyContent='space-between'
                      display='flex'
                      width={ 1000 }
                    >
                        <Pane width='35%' display='flex' alignItems='center'>
                            {/* <Text style={ { paddingBottom: '10px' } }>Your bandwidth:</Text> */}
                            <SkillBar value={ 25 } />
                            <Text paddingLeft={ 17 } color='#fff' size={ 500 }>
                                Upgrade
                            </Text>
                        </Pane>
                        {defaultAddress && balance > 0 && searchQuery && links.length >= 0 && (
                            <Pane display='flex' flexDirection='row' marginLeft={ 80 } width='65%'>
                                <TextInput
                                  height={ 42 }
                                  width='100%'
                                  ref='cidToInput'
                                  marginRight={ 15 }
                                  placeholder='Have your own answer?'
                                />
                                <Button
                                  whiteSpace='nowrap'
                                  paddingX={ 50 }
                                  height={ 42 }
                                  onClick={ () => this.link() }
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
        status: 'remote',
    },
    {
        content: 'test',
        hash: 'test',
        rank: '',
        status: 'local',
    },

    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '3',
        status: 'local',
    },
    {
        content: 'test',
        hash: '45412',
        rank: '4',
        status: 'fail',
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
        status: 'local',
    },
    {
        content: 'fotrty two',
        hash: '45412',
        rank: '1',
        status: 'remote',
    },

    {
        content: 'fotrty two',
        hash: '45412',
        rank: '7',
        status: 'remote',
    },
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '2',
        status: 'local',
    },
    {
        content: '312',
        hash: '45412',
        rank: '4',
        status: 'fail',
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
        status: 'remote',
    },

    {
        content: 'fotrty two',
        hash: '45412',
        rank: '7',
        status: 'remote',
    },
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '2',
        status: 'local',
    },
    {
        content: '312',
        hash: '45412',
        rank: '4',
        status: 'fail',
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
        status: 'remote',
    },

    {
        content: 'fotrty two',
        hash: '45412',
        rank: '7',
        status: 'remote',
    },
    {
        content: 'QmbdNXgajo4Hr1pgeWq55uqTnW1Qn13rsC8gConW4Xe1Do',
        hash: '45412',
        rank: '2',
        status: 'local',
    },
    {
        content: '312',
        hash: '45412',
        rank: '4',
        status: 'fail',
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
    .add('anonym no result', () => (
        <Application>
            <App searchQuery='test' links={ links2 } defaultAddress='test' balance='0' />
        </Application>
    ))
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
    .add('anonym there are results', () => (
        <Application>
            <App searchQuery='test' links={ links3 } defaultAddress='test' balance='0' />
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
