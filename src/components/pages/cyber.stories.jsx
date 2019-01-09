import React, {Component} from 'react';
import {Buttons, Title} from '../..';
import styles from './app.css';
import { storiesOf } from '@storybook/react';

function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

class App extends Component {

    state = {
        links: [],
        defaultAddress: null,
        browserSupport: false,
        searchQuery: '',
        seeAll: false,
        balance: 0
    };

    search(_query) {
        const query =  _query || this.refs.searchInput.value ;

        console.log('search');
        console.log(query);
        console.log(this.refs.searchInput.value);
        console.log(getQueryStringValue('query'));
        console.log();

        // if (this.refs.searchInput.value === getQueryStringValue('query')) {
            window.cyber.search(query).then((result) => {

                console.log('result: ', result);
                this.setState({
                    links: result,
                    searchQuery: query
                })
            })
        // } else {
        //     window.location = 'cyb://' + query;            
        // }
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.search();
        }
    };

    link() {
        const address = this.state.defaultAddress;
        const cidFrom = this.refs.searchInput.value;
        const cidTo = this.refs.cidToInput.value;
        console.log("from: " + cidFrom + " to: " + cidTo);

        window.cyber.link(cidFrom, cidTo, address);
    }

    componentDidMount() {
        if (!window.cyber) {
            return
        } else {

            this.setState({
                browserSupport: true,
                searchQuery: getQueryStringValue('query')
            }, () => {
                window.cyber.getDefaultAddress(({ address, balance }) => {
                    this.setState({
                        defaultAddress: address,
                        balance
                    })
                    this.search(getQueryStringValue('query'));
                });
            });
        }
    }

    seeAll = () => {
        this.setState({
            seeAll: !this.state.seeAll
        })
    }

    openLink = (e, link) => {
        // e.preventDefault();
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

        const { searchQuery, links, defaultAddress, balance } = this.props;

        const searchResults = links.slice(0, seeAll ? links.length : 10).map(link =>
            <div key={link.hash} className={styles.searchItem}>
                <a onClick={(e) => this.openLink(e, link)} href={`cyb://${link.content}`}> {link.content} </a><span>{link.Rank}</span>
            </div>
        );


        console.log(' defaultAddress ', this.state.defaultAddress)

        return (
          <div className={styles.searchContainer}>
          <Title>/Cyberd search12</Title>
          <input className={styles.input} defaultValue={searchQuery} ref='searchInput' onKeyPress={this._handleKeyPress}/>
          <Buttons 
            //className={styles.button} 
            type="button" 
            color='blue'
            onClick={() => this.search()}>
            search
          </Buttons>

          {links.length > 0 && <div>
              <h3 className={styles.title}>Search results:</h3>
              {searchResults}
              {links.length > 10 &&  <button className={styles.button} type="button" onClick={() => this.seeAll()}>{!seeAll ? 'see all' : 'top 10'}</button>}
          </div>}


          {(defaultAddress && (balance > 0) && searchQuery && links.length > 0) &&
              <div className={styles.linkContainer}>
                  <p>Have your own option for <b>"{searchQuery}"</b>? Link your query and Cyb will understand it!</p>
                  <input placeholder='type your link her...' className={styles.input} ref='cidToInput'/>
                  <Buttons 
                    //className={styles.button + ' ' + styles.yellow} 
                    color='greenyellow'
                    transformtext
                    type="button"
                    onClick={() => this.link()}
                  >
                    Link it!
                  </Buttons>
              </div>
          }

          {(defaultAddress && (balance > 0) && searchQuery && links.length === 0) &&
              <div className={styles.linkContainer}>
                  <img className={styles.vitalick }  src={require('./buterin-02.svg')} alt='vitalick'/>
                  <p className={styles.notFoundFirstLine}>Seems that you are first one who are searching for <b>"{searchQuery}"</b></p>
                  <p><b>Link your query</b> and Cyb will understand it!</p>
                  <input placeholder='type your link her...' className={styles.input+ ' ' + styles.noResult} ref='cidToInput'/>
                  <Buttons 
                    //className={styles.button+ ' ' + styles.green}
                    color='greenyellow'
                    transformtext
                    type='button'
                    onClick={() => this.link()}
                  >
                    Link it!
                  </Buttons>
              </div>
          }
      </div>
        )
    }

};
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

];

const links1=[];
storiesOf('pages/cyber', module)
    .add('index', () => <App  searchQuery='test' links={links1} defaultAddress='test' balance='0' />)
    .add('index2', () => <App  searchQuery='test' links={links} defaultAddress='test' balance='1000' />)
    .add('index3', () => <App  searchQuery='test' links={links1} defaultAddress='test' balance='1' />);