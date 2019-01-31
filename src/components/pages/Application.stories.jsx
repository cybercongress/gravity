import React from 'react';
// import { connect } from 'react-redux';
// import { toggleMenu as toggleMenuAction } from '../../redux/appMenu';
import { storiesOf } from '@storybook/react';

import {
    App,
    AppHeader, AppContent, AppSideBar,
    Navigation,
    NavigationLeft, NavigationRight, NavigationCenter,
    ScrollContainer,
} from '../..';

import IdBar from '../Application/IdBar';
import AppMenu from '../Application/AppMenu';
import Status from '../Application/Status';
import NavigationComponents from '../Application/Navigation';
import ToggleMenu from '../Application/ToggleMenu';
import SignerPopup from '../Application/SignerPopup';
import Login from '../Application/Login';

const Application = (props) => {
    const {
        homePage,
        openMenu,
        children,
        toggleMenu,
        dura,
        activeBttnBack,
        activeBttnFavorited,
        ipfs,
        NodeStatus,
        signerPopup,
        newApp,
        textIpfs,
        textEthNode,
    } = props;

    return (
        <App openMenu={ openMenu }>
            <SignerPopup isSignerPopup={signerPopup} toAddress='sfsdfsfsd' fromAddress='sdfjnsfdjndfsjk' defaultAccountBalance='10' />
            <Status IPFS_END_POINT={textIpfs} ethNetworkName='dsf' PARITTY_END_POINT={textEthNode} ipfsStatus={ ipfs } cyberNodeStatus={ NodeStatus } />
            <AppSideBar onCloseSidebar={ toggleMenu } openMenu={ openMenu }>
                <AppMenu pendingAddToFavorites={newApp} menuItems={ menuItems } />
            </AppSideBar>
            <AppHeader isHome={ homePage } isMenuOpen={ openMenu }>
                <Navigation isHome={ homePage }>
                    <NavigationLeft>
                        <ToggleMenu openMenu={ openMenu } />
                    </NavigationLeft>
                    <NavigationCenter>
                        <NavigationComponents dura={dura} canBack={activeBttnBack} isFavorited={activeBttnFavorited} />
                    </NavigationCenter>
                    <NavigationRight>
                        <IdBar defaultEthAccount />
                    </NavigationRight>
                </Navigation>
            </AppHeader>
            <AppContent>
                {children}
            </AppContent>
        </App>
    );
};

// export default connect(
//     state => ({
//         homePage: state.browser.dura === '',
//         openMenu: state.appMenu.openMenu,
//     }),
//     { toggleMenu: toggleMenuAction },
// )(Application);

const menuItems = [
    {
        items: '1',
        rootDura: 'ds',
        name: 'dffd',
    },
    {
        items: '2',
        name: 'dffd.dsd',
        rootDura: 'tbcds',
    },
    {
        items: '3',
        name: 'lhitv',
        rootDura: 'tyds',
    },
]

storiesOf('cyb/pages/Application', module)
    .add('Application', () => (
        <Application />
    ))
    .add('openMenu', () => (
            <Application openMenu />
    ))
    .add('NewApp', () => (
        <Application openMenu newApp />
    ))
    .add('homePage', () => (
        <Application homePage />
    ))
    .add('ActiveNavigationComponents', () => (
        <Application activeBttnBack activeBttnFavorited dura='rr.cyb' />
    ))

    .add('StatusIndicator', () => (
        <Application ipfs='local' textIpfs='textIpfs' textEthNode='textEthNode' NodeStatus='fail' />
    ))
    .add('SignerPopup', () => (
        <Application signerPopup />
    ))
    .add('Create Account', () => (
        <Application>
            <Login />
        </Application>
    ))
    .add('Login', () => (
        <Application>
            <Login isUserExist />
        </Application>
    ));
    
