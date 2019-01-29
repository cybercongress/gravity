import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Button,
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
    Text,
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
                <SearchItem onClick={ e => this.openLink(e, link) } hash={ link.hash } rank={ link.rank }>
                    {link.content}
                </SearchItem>
            ),
            // <div key={link.hash} className={styles.searchItem}>
            //     <a onClick={(e) => this.openLink(e, link)} href={`cyb://${link.content}`}> {link.content} </a><span>{link.rank}</span>
            // </div>
        );

        console.log(' defaultAddress ', this.state.defaultAddress);

        return (
            <MainContainer>
                <FlexContainer>
                    <PageTitle>Cyberd search</PageTitle>
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
                </FlexContainer>
                <FlexContainer>
                    <Input
                      defaultValue={ searchQuery }
                      ref='searchInput'
                      onKeyPress={ this._handleKeyPress }
                    />
                    <Button
                      type='button'
                      color='blue'
                      transformtext
                      style={ { height: '30px', marginLeft: '10px' } }
                    >
                        search
                    </Button>
                </FlexContainer>
                {links.length > 0 && (
                    <div>
                        <Title style={ { marginLeft: '0px', marginBottom: '0px' } }>
                            Search results:
                        </Title>
                        <LinkContainer column>{searchResults}</LinkContainer>
                        {links.length > 10 && (
                            <Button
                              color='blue'
                              style={ { marginLeft: '0px' } }
                              transformtext
                              type='button'
                              onClick={ () => this.seeAll() }
                            >
                                {!seeAll ? 'see all' : 'top 10'}
                            </Button>
                        )}
                    </div>
                )}

                {index && (
                    <div>
                        <Title
                          style={ { marginLeft: '0px', marginBottom: '30px', textAlign: 'center' } }
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

                {defaultAddress && balance > 0 && searchQuery && links.length > 0 && (
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
                )}

                {defaultAddress && balance > 0 && searchQuery && links.length === 0 && (
                    <LinkContainer style={ { paddingTop: '100px' } } center>
                        <div style={ { width: '60%' } }>
                            <Text size='lg' style={ { marginBottom: '10px' } }>
                                Seems that you are first one who are searching for
                                <b>
"
                                    {searchQuery}
"
                                </b>
                            </Text>

                            <Text size='lg' style={ { marginBottom: '20px' } }>
                                <b>Link your query</b>
                                and Cyb will understand it!
                            </Text>

                            <FlexContainer>
                                <Input placeholder='type your link her...' ref='cidToInput' />
                                <Button
                                  color='greenyellow'
                                  transformtext
                                  type='button'
                                  style={ { height: '30px', marginLeft: '10px' } }
                                  onClick={ () => this.link() }
                                >
                                    Link it!
                                </Button>
                            </FlexContainer>
                        </div>

                        <div style={ { width: '30%' } }>
                            <Vitalick />
                        </div>
                    </LinkContainer>
                )}
            </MainContainer>
        );
    }
}

const links = [
    {
        content: '312',
        hash: '45412',
        rank: 1,
    },
    {
        content: 'test',
        hash: 'test',
        rank: 2,
    },

    {
        content: 'test',
        hash: '45412',
        rank: '1',
    },
    {
        content: 'test',
        hash: '45412',
        rank: '1',
    },
    {
        content: 'test',
        hash: '45412',
        rank: '1',
    },
    {
        content: '312',
        hash: '45412',
        rank: '1',
    },
    {
        content: 'test',
        hash: '45412',
        rank: '1',
    },

    {
        content: 'test',
        hash: '45412',
        rank: '12',
    },
    {
        content: 'test',
        hash: '45412',
        rank: '12',
    },
    {
        content: '312',
        hash: '45412',
        rank: '14',
    },
    {
        content: 'test',
        hash: '45412',
        rank: '1',
    },

    {
        content: 'test',
        hash: '45412',
        rank: '16',
    },
    {
        content: 'test',
        hash: '45412',
        rank: '1',
    },
];

const links2 = [];
const links3 = [
    {
        content: 'dds',
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
