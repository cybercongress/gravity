import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import {EthAccounts} from '../Wallet/EthAccounts';
import {ETHImport} from '../Wallet/ETHImport';
import {EthSend} from '../Wallet/EthSend';
import {CyberAccounts} from '../Wallet/CyberAccounts';
import {CyberImport} from '../Wallet/CyberImport';
import {CyberSend} from '../Wallet/CyberSend';
import {ChangePassword} from '../Wallet/ChangePassword';
import {PageTitle, MainContainer, WalletTabs, WalletTab, WalletLauout, WalletSidebar, WalletContent } from '../..';

class Page extends Component {
    state = {
        tab: 'eth',
        menu: 'accounts',
    };

    select = (tab) => {
        this.setState({ tab });
    };

    selectMenu = (menu) => {
        this.setState({ menu });
    };

    render() {
       // const { password } = this.props;

        // if (!password) {
        //     return (
        //         <RequirePassword />
        //     );
        // }

        const { tab, menu } = this.state;

        let content;

        if (tab === 'eth' && menu === 'import') {
            content = (
                <ETHImport importCompleted={ () => this.selectMenu('accounts') } />
            );
        }

        if (tab === 'eth' && menu === 'accounts') {
            content = (
                <EthAccounts accounts={accounts}/>
            );
        }

        if (tab === 'eth' && menu === 'send') {
            content = (
                <EthSend defaultAccount='1adsjnald56dajsandDNDlkmsdfmkkKM' defaultAccountBalance='1' />
            );
        }

        if (tab === 'cyb' && menu === 'accounts') {
            content = (
                <CyberAccounts accounts={accounts} />
            );
        }

        if (tab === 'cyb' && menu === 'import') {
            content = (
                <CyberImport importCompleted={ () => this.selectMenu('accounts') } />
            );
        }

        if (tab === 'cyb' && menu === 'send') {
            content = (
                <CyberSend />
            );
        }

        if (menu === 'changePassword') {
            content = (
                <ChangePassword />
            );
        }

        return (
            <MainContainer>
                    <PageTitle>Wallet</PageTitle>
                    <WalletLauout style={{paddingTop: 45}}>
                        <WalletSidebar>
                            <div>
                                <WalletTabs>
                                    <WalletTab
                                      onClick={ () => this.select('eth') }
                                      isActive={ tab === 'eth' }
                                    >
    eth
                                    </WalletTab>
                                    <WalletTab
                                      onClick={ () => this.select('cyb') }
                                      isActive={ tab === 'cyb' }
                                    >
    cyb
                                    </WalletTab>
                                </WalletTabs>
                            </div>
                            <div>

                                <WalletTabs vertical>
                                    <WalletTab
                                      onClick={ () => this.selectMenu('accounts') }
                                      isActive={ menu === 'accounts' }
                                    >
    accounts
                                    </WalletTab>
                                    <WalletTab
                                      onClick={ () => this.selectMenu('import') }
                                      isActive={ menu === 'import' }
                                    >
    import account
                                    </WalletTab>
                                    <WalletTab
                                      onClick={ () => this.selectMenu('send') }
                                      isActive={ menu === 'send' }
                                    >
    send tokens
                                    </WalletTab>
                                    <WalletTab
                                      onClick={ () => this.selectMenu('changePassword') }
                                      isActive={ menu === 'changePassword' }
                                    >
                                        Change password
                                    </WalletTab>
                                </WalletTabs>

                            </div>
                        </WalletSidebar>
                        <WalletContent>
                            {content}
                        </WalletContent>
                    </WalletLauout>
              
            </MainContainer>
        );
    }
}

// export default connect(state => ({
//     password: state.wallet.password,
// }))(Page);



const account = {
    balance: '10',
    address:'1adsjnald56dajsandDNDlkmsdfmkkKM',
}
const accounts = [
{
    balance: '10',
    address:'1adsjnald56dajsandDNDlkmsdfmkkKM',
},
{
    balance: '1',
    address:'1adsjnald56dajsandDNDlkmsdfmkkKM',

},
];

storiesOf('cyb/pages/Wallet', module)
.add('Wallet', () => (
        <Page accounts={accounts} />

))
