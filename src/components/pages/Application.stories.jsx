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
// import SignerPopup from '../Application/SignerPopup';

const Application = (props) => {
    const {
        homePage,
        openMenu,
        children,
        toggleMenu,
    } = props;

    return (
        <App openMenu={ openMenu }>
            {/* <SignerPopup /> */}
            <Status />
            <AppSideBar onCloseSidebar={ toggleMenu } openMenu={ openMenu }>
                <AppMenu menuItems={menuItems} />
            </AppSideBar>
            <AppHeader isHome={ homePage } isMenuOpen={ openMenu }>
                <Navigation isHome={ homePage }>
                    <NavigationLeft>
                        <ToggleMenu />
                    </NavigationLeft>
                    <NavigationCenter>
                        <NavigationComponents />
                    </NavigationCenter>
                    <NavigationRight>
                        <IdBar />
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
        items: '2',
        rootDura: 'ds',
        name: 'dffd',
    },
    {
        items: 'weds2',
    },
    {
        items: '222',
    },
]

storiesOf('cyb/pages/Application', module)
.add('Application', () => (
        <Application openMenu />

))