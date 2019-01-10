import React, {Component} from 'react';
import {Buttons, Title, PageTitle, MainContainer, WideInput, CentredPanel, Section, FundContainer, SectionContent, BoxTitle, FlexContainer, Description, SkillBar} from '../..';
import styles from './app.css';
import { storiesOf } from '@storybook/react';
import { LinkContainer } from '../LinkContainer/LinkContainer';

class App extends Component {

    state = {
        links: [],
        defaultAddress: null,
        browserSupport: false,
        searchQuery: '',
        seeAll: false,
        balance: 0
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

        const { searchQuery, links, defaultAddress, balance, index } = this.props;

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
                        <SkillBar value={10} />
                    </div>

                </FlexContainer>
                <FlexContainer>
                    <WideInput defaultValue={searchQuery} ref='searchInput' onKeyPress={this._handleKeyPress} />
                    <Buttons
                        type="button"
                        color='blue'
                        transformtext
                        style={{ height: '30px', marginLeft: '10px' }}
                    >
                        search
                </Buttons>
                </FlexContainer>
                {links.length > 0 && <div>
                    <Title style={{ marginLeft: '0px', marginBottom: '30px' }}>Search results:</Title>
                    {searchResults}
                    {links.length > 10 && <Buttons color='blue' style={{ marginLeft: '0px' }} transformtext type="button" onClick={() => this.seeAll()}>{!seeAll ? 'see all' : 'top 10'}</Buttons>}
                </div>}

                {index && <div>
                    <Title style={{ marginLeft: '0px', marginBottom: '30px' }}>Search statistic:</Title>
                    <Section>
                        <SectionContent style={{ width: '25%' }}>
                            <CentredPanel>
                                <BoxTitle>FUNDED:</BoxTitle>

                                <FundContainer>
                                    <span>
                                        {12}
                                        ETH
                        </span>
                                </FundContainer>
                            </CentredPanel>
                        </SectionContent>
                        <SectionContent style={{ width: '25%' }}>
                            <CentredPanel>
                                <BoxTitle>FUNDED:</BoxTitle>

                                <FundContainer>
                                    <span>
                                        {23}
                                        ETH
                        </span>
                                </FundContainer>
                            </CentredPanel>
                        </SectionContent>
                        <SectionContent style={{ width: '25%' }}>
                            <CentredPanel>
                                <BoxTitle>FUNDED:</BoxTitle>

                                <FundContainer>
                                    <span>
                                        {32}
                                        ETH
                        </span>
                                </FundContainer>
                            </CentredPanel>
                        </SectionContent>
                    </Section>
                </div>}

                {(defaultAddress && (balance > 0) && searchQuery && links.length > 0) &&
                    <LinkContainer column>
                        <Description style={{ fontSize: '16px' }}>Have your own option for <b>"{searchQuery}"</b>? Link your query and Cyb will understand it!</Description>
                        <FlexContainer>
                            <WideInput placeholder='type your link her...' ref='cidToInput' />
                            <Buttons
                                color='ogange'
                                transformtext
                                type="button"
                                style={{ height: '30px', marginLeft: '10px' }}
                                onClick={() => this.link()}
                            >
                                Link it!
                        </Buttons>
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
                                <Buttons
                                    color='greenyellow'
                                    transformtext
                                    type='button'
                                    style={{ height: '30px', marginLeft: '10px' }}
                                    onClick={() => this.link()}
                                >
                                    Link it!
                            </Buttons>
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

const links=[
  {
  content:'dds',
  hash: 'sds12',
  Rank: '2',
},
{
  content:'312',
  hash: '45412',
  Rank: '1',
},
{
    content: 'test',
    hash: 'test',
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
    .add('index', () => <App  searchQuery='test' links={links2} defaultAddress='test' balance='0' index='1' />)
    .add('anonym there are results', () => <App  searchQuery='test' links={links3} defaultAddress='test' balance='0' />)
    .add('few results', () => <App  searchQuery='test' links={links3} defaultAddress='test' balance='1000' />)
    .add('lot result', () => <App  searchQuery='test' links={links} defaultAddress='test' balance='1000' />)
    .add('no result', () => <App  searchQuery='test' links={links2} defaultAddress='test' balance='1' />);