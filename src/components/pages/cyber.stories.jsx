import React, {Component} from 'react';
import {Button, Title, PageTitle, MainContainer, PopupSkillBar,  LineText,  WideInput, CentredPanel, Section, FundContainer, SectionContent, BoxTitle, FlexContainer, Description, SkillBar} from '../..';
import styles from './app.css';
import { storiesOf } from '@storybook/react';
import { LinkContainer } from '../LinkContainer/LinkContainer';
import { Text } from '../Text/Text';
 
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
            seeAll: !this.state.seeAll
        })
    }

    openLink = (e, link) => {
        const { balance, defaultAddress: address } = this.state;
        const cidFrom = this.refs.searchInput.value;
        const cidTo = link.content;
        console.log("from: " + cidFrom + " to: " + cidTo, address, balance);

        window.cyber.link(cidFrom, cidTo, address);        
    }


    render() {
        const { seeAll} = this.state;
        if (this.state.browserSupport) {
            return <div>
                Browser not supported. Download latest CYB!
            </div>
        }

        const { searchQuery, links, defaultAddress, balance, index, PopupNotification } = this.props;

        const searchResults = links.slice(0, seeAll ? links.length : 10).map(link =>
            <div key={link.hash} className={styles.searchItem}>
                <a onClick={(e) => this.openLink(e, link)} href={`cyb://${link.content}`}> {link.content} </a><span>{link.Rank}</span>
            </div>
        );


        console.log(' defaultAddress ', this.state.defaultAddress)

        return (
            <MainContainer>
                <FlexContainer>
                    <PageTitle>Cyberd search</PageTitle>
                    <div style={{ width: '30%' }}>
                        <Description style={{ fontSize: '14px', paddingBottom: '10px' }}>Your bandwidth:</Description>
                        <SkillBar value={10}>
                        {PopupNotification&&
                            <PopupSkillBar>
                                <LineText>600000 of 1000000 left (60%) </LineText>
                            </PopupSkillBar>
                        }
                        

                        </SkillBar>
                    </div>

                </FlexContainer>
                <FlexContainer>
                    <WideInput defaultValue={searchQuery} ref='searchInput' onKeyPress={this._handleKeyPress} />
                    <Button
                        type="button"
                        color='blue'
                        transformtext
                        style={{ height: '30px', marginLeft: '10px' }}
                    >
                        search
                </Button>
                </FlexContainer>
                {links.length > 0 && <div>
                    <Title style={{ marginLeft: '0px', marginBottom: '30px' }}>Search results:</Title>
                    {searchResults}
                    {links.length > 10 && <Button color='blue' style={{ marginLeft: '0px' }} transformtext type="button" onClick={() => this.seeAll()}>{!seeAll ? 'see all' : 'top 10'}</Button>}
                </div>}

                {index && 
                 <div>
                     <div style={{ textAlign: 'center'}}>
                     <Title style={{ marginLeft: '0px', 
                                    marginBottom: '30px'
                                 }}
                    >
                        Search statistic:
                    </Title>
                     </div>
                    
                    <Section>
                        <SectionContent style={{ width: '25%' }}>
                            <CentredPanel>
                               <Text fontSize={36} bold color={'#4a90e2'}>1000</Text>
                               <Text fontSize={26} color={'#4a90e2'} NoPadding>link</Text>
                            </CentredPanel>
                        </SectionContent>
                        <SectionContent style={{ width: '25%' }}>
                            <CentredPanel>
                                <Text fontSize={36} bold color={'#4a90e2'} >1000</Text>
                                <Text fontSize={26} color={'#4a90e2'} NoPadding>CIDs</Text>
                            </CentredPanel>
                        </SectionContent>
                        <SectionContent style={{ width: '25%' }}>
                            <CentredPanel>
                                <Text fontSize={36} bold color={'#4a90e2'}>1000</Text>
                                <Text fontSize={26} color={'#4a90e2'} NoPadding>accounts</Text>
                            </CentredPanel>
                        </SectionContent>
                    </Section>
                </div>}

                {(defaultAddress && (balance > 0) && searchQuery && links.length > 0) &&
                    <LinkContainer column>
                        <Description style={{ fontSize: '16px' }}>Have your own option for <b>"{searchQuery}"</b>? Link your query and Cyb will understand it!</Description>
                        <FlexContainer>
                            <WideInput placeholder='type your link her...' ref='cidToInput' />
                            <Button
                                color='ogange'
                                transformtext
                                type="button"
                                style={{ height: '30px', marginLeft: '10px' }}
                                onClick={() => this.link()}
                            >
                                Link it!
                        </Button>
                        </FlexContainer>
                    </LinkContainer>
                }

                {(defaultAddress && (balance > 0) && searchQuery && links.length === 0) &&
                    <LinkContainer center>
                        <div style={{ width: '60%' }}>

                            <Description style={{ fontSize: '16px' }} >Seems that you are first one who are searching for <b>"{searchQuery}"</b></Description>

                            <Description style={{ fontSize: '16px' }}><b>Link your query</b> and Cyb will understand it!</Description>


                            <FlexContainer>
                                <WideInput placeholder='type your link her...' ref='cidToInput' />
                                <Button
                                    color='greenyellow'
                                    transformtext
                                    type='button'
                                    style={{ height: '30px', marginLeft: '10px' }}
                                    onClick={() => this.link()}
                                >
                                    Link it!
                            </Button>
                            </FlexContainer>
                        </div>

                        <div style={{ width: '30%' }}>
                            <img className={styles.vitalick} src={require('./buterin-02.svg')} alt='vitalick' />
                        </div>

                    </LinkContainer>
                }
            </MainContainer>
        )
    }

}

const links = [
    {
        content: '312',
        hash: '45412',
        Rank: 1,
    },
    {
        content: 'test',
        hash: 'test',
        Rank: 2,
    },

    {
        content: 'test',
        hash: '45412',
        Rank: '1',
    },
    {
        content: 'test',
        hash: '45412',
        Rank: '1',
    },
    {
        content: 'test',
        hash: '45412',
        Rank: '1',
    },
    {
        content: '312',
        hash: '45412',
        Rank: '1',
    },
    {
        content: 'test',
        hash: '45412',
        Rank: '1',
    },

    {
        content: 'test',
        hash: '45412',
        Rank: '12',
    },
    {
        content: 'test',
        hash: '45412',
        Rank: '12',
    },
    {
        content: '312',
        hash: '45412',
        Rank: '14',
    },
    {
        content: 'test',
        hash: '45412',
        Rank: '1',
    },

    {
        content: 'test',
        hash: '45412',
        Rank: '16',
    },
    {
        content: 'test',
        hash: '45412',
        Rank: '1',
    },
];

const links2=[];
const links3=[ 
    {
    content:'dds',
    hash: 'sds12',
    Rank: '2',
  },
  {
    content:'312',
    hash: '45412',
    Rank: '1',
  },];
storiesOf('cyber/pages', module)
    .add('anonym no result', () => <App  searchQuery='test' links={links2} defaultAddress='test' balance='0' />)
    .add('index', () => <App  searchQuery='test' links={links2} defaultAddress='test' PopupNotification={ true } balance='0' index='1' />)
    .add('anonym there are results', () => <App  searchQuery='test' links={links3} defaultAddress='test' balance='0' />)
    .add('few results', () => <App  searchQuery='test' links={links3} defaultAddress='test' balance='1000' />)
    .add('lot result', () => <App  searchQuery='test' links={links} defaultAddress='test' balance='1000' />)
    .add('no result', () => <App  searchQuery='test' links={links2} defaultAddress='test' balance='1' />);