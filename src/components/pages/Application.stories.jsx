import React from 'react';
// import { connect } from 'react-redux';
// import { toggleMenu as toggleMenuAction } from '../../redux/appMenu';
import { storiesOf } from '@storybook/react';

import App, {
    AppHeader, AppContent, AppSideBar,
} from '../App/App';
import Navigation, {
    NavigationLeft, NavigationRight, NavigationCenter,
} from '../Navigation/Navigation';

import IdBar from '../Application/IdBar';
import AppMenu from '../Application/AppMenu';
import Status from '../Application/Status';
import NavigationComponents from '../Application/Navigation';
import ToggleMenu from '../Application/ToggleMenu';
import SignerPopup from '../Application/SignerPopup';

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
    } = props;

    return (
        <App openMenu={ openMenu }>
            <SignerPopup isSignerPopup={signerPopup} toAddress='sfsdfsfsd' fromAddress='sdfjnsfdjndfsjk' defaultAccountBalance='10' />
            <Status ipfsStatus={ ipfs } cyberNodeStatus={ NodeStatus } />
            <AppSideBar onCloseSidebar={ toggleMenu } openMenu={ openMenu }>
                <AppMenu menuItems={ menuItems } />
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
    .add('homePage', () => (
        <Application homePage />
    ))
    .add('ActiveNavigationComponents', () => (
        <Application activeBttnBack activeBttnFavorited dura='rr.cyb' />
    ))

    .add('StatusIndicator', () => (
        <Application ipfs='local' NodeStatus='fail' />
    ))
    .add('SignerPopup', () => (
        <Application signerPopup />
    ));
