import React from 'react';
// import { connect } from 'react-redux';
// import { toggleMenu as toggleMenuAction } from '../../redux/appMenu';
import { storiesOf } from '@storybook/react';
import { Pane } from 'evergreen-ui';

import {
    App,
    AppHeader,
    AppContent,
    AppSideBar,
    Navigation,
    NavigationLeft,
    NavigationRight,
    NavigationCenter,
    ScrollContainer,
} from '../..';

import IdBar from '../Application/IdBar';
import AppMenu from '../Application/AppMenu';
import Status from '../Application/Status';
import NavigationComponents from '../Application/Navigation';
import ToggleMenu from '../Application/ToggleMenu';
import SignerPopup from '../Application/SignerPopup';
import Login from '../Application/Login';

const img = require('../../img/earth-active.svg');

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
            <SignerPopup
              isSignerPopup={ signerPopup }
              toAddress='sfsdfsfsd'
              fromAddress='sdfjnsfdjndfsjk'
              defaultAccountBalance='10'
            />
            <Status
              IPFS_END_POINT={ textIpfs }
              ethNetworkName='dsf'
              PARITTY_END_POINT={ textEthNode }
              ipfsStatus={ ipfs }
              cyberNodeStatus={ NodeStatus }
            />
            <AppSideBar onCloseSidebar={ toggleMenu } openMenu={ openMenu }>
                <AppMenu pendingAddToFavorites={ newApp } menuItems={ menuItems } />
            </AppSideBar>
            <Pane width='100%' height='100%' position='relative'>
                <AppHeader isHome={ homePage } isMenuOpen={ openMenu }>
                    <Navigation isHome={ homePage }>
                        <NavigationLeft>
                            <ToggleMenu openMenu={ openMenu } />
                        </NavigationLeft>
                        <NavigationCenter>
                            <NavigationComponents
                              dura={ dura }
                              canBack={ activeBttnBack }
                              isFavorited={ activeBttnFavorited }
                            />
                        </NavigationCenter>
                        <NavigationRight>
                            <IdBar menuItems={ menuItems } defaultEthAccount />
                        </NavigationRight>
                    </Navigation>
                </AppHeader>
                <AppContent>{children}</AppContent>
                </Pane>
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
        name: 'Chaingear',
        pill: '7',
        status: 'remote',
    },
    {
        items: '2',
        name: 'cyber•Congress',
        rootDura: 'tbcds',
        status: 'local',
    },
    {
        items: '3',
        name: 'cyb.ai',
        rootDura: 'tyds',
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        status: 'fail',
    },

    {
        items: '4',
        name: '.cyber',
        rootDura: 'tyds',
    },
    {
        items: '5',
        name: '.cyb',
        rootDura: 'tyds',
    },
    {
        items: '6',
        name: 'One day Earth',
        rootDura: 'tyds',
        img: `${img}`,
    },

    {
        items: '7',
        name: 'IPFS',
        rootDura: 'tyds',
    },
    {
        items: '8',
        name: '.root',
        rootDura: 'tyds',
    },
    {
        items: '9',
        name: '.cyber',
        rootDura: 'tyds',
    },
    {
        items: '10',
        name: '.cyb',
        rootDura: 'tyds',
    },
    {
        items: '11',
        name: 'One day Earth',
        rootDura: 'tyds',
        img: `${img}`,
    },

    {
        items: '12',
        name: 'IPFS',
        rootDura: 'tyds',
    },
    {
        items: '13',
        name: '.root',
        rootDura: 'tyds',
    },
];

storiesOf('Examples/cyb', module)
    .add('Application', () => <Application />)
    .add('openMenu', () => <Application openMenu />)
    // .add('NewApp', () => (
    //     <Application openMenu newApp />
    // ))
    .add('homePage', () => <Application homePage />)
    .add('ActiveNavigationComponents', () => (
        <Application activeBttnBack activeBttnFavorited dura='rr.cyb' />
    ))

    .add('StatusIndicator', () => (
        <Application ipfs='local' textIpfs='textIpfs' textEthNode='textEthNode' NodeStatus='fail' />
    ));
// .add('SignerPopup', () => (
//     <Application signerPopup />
// ))
// .add('Create Account', () => (
//     <Application>
//         <Login />
//     </Application>
// ))
// .add('Login', () => (
//     <Application>
//         <Login isUserExist />
//     </Application>
// ));
