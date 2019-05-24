import React from 'react';
// import { connect } from 'react-redux';
// import { toggleMenu as toggleMenuAction } from '../../redux/appMenu';
// import { storiesOf } from '@storybook/react';
import {
    Pane,
} from 'evergreen-ui';
import {
    App,
    AppHeader, AppContent, AppSideBar,
    Navigation,
    NavigationLeft, NavigationRight, NavigationCenter,
} from '../..';

import IdBar from './IdBar';
import AppMenu from './AppMenu';
import Status from './Status';
import NavigationComponents from './Navigation';
import ToggleMenu from './ToggleMenu';
import SignerPopup from './SignerPopup';

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

const Application = (props) => {
    const {
        homePage,
        openMenu,
        children,
        toggleMenu,
    } = props;

    return (
        <App openMenu={ openMenu }>
            <SignerPopup />
            {/* <Status /> */}
            
            <AppHeader isHome={ homePage } isMenuOpen={ openMenu }>
                <Navigation isHome={ homePage }>
                    <NavigationLeft>
                        <ToggleMenu />
                    </NavigationLeft>
                    <NavigationCenter>
                        <NavigationComponents />
                    </NavigationCenter>
                    <NavigationRight>
                        <IdBar menuItems={menuItems} defaultEthAccount />
                    </NavigationRight>
                </Navigation>
            </AppHeader>
            <Pane
              width='100%'
              height='100%'
              display='flex'
              backgroundColor='#000'
            >
            <AppSideBar onCloseSidebar={ toggleMenu } openMenu={ openMenu }>
                <AppMenu menuItems={ menuItems } />
            </AppSideBar>


            <AppContent>
                {children}
            </AppContent>
            </Pane>
        </App>
    );
};

export default Application;

// export default connect(
//     state => ({
//         homePage: state.browser.dura === '',
//         openMenu: state.appMenu.openMenu,
//     }),
//     { toggleMenu: toggleMenuAction },
// )(Application);
