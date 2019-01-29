import React from 'react';
// import { connect } from 'react-redux';
// import { toggleMenu as toggleMenuAction } from '../../redux/appMenu';
// import { storiesOf } from '@storybook/react';

import App, {
    AppHeader, AppContent, AppSideBar,
} from '../App/App';
import Navigation, {
    NavigationLeft, NavigationRight, NavigationCenter,
} from '../Navigation/Navigation';

import IdBar from './IdBar';
import AppMenu from './AppMenu';
import Status from './Status';
import NavigationComponents from './Navigation';
import ToggleMenu from './ToggleMenu';
// import SignerPopup from '../Application/SignerPopup';

export const Application = (props) => {
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
    } = props;

    return (
        <App openMenu={ openMenu }>
            {/* <SignerPopup /> */}
            <Status ipfsStatus={ ipfs } cyberNodeStatus={ NodeStatus } />
            <AppSideBar onCloseSidebar={ toggleMenu } openMenu={ openMenu }>
                <AppMenu menuItems={ menuItems } />
            </AppSideBar>
            <AppHeader isHome={ homePage } isMenuOpen={ openMenu }>
                <Navigation isHome={ homePage }>
                    <NavigationLeft>
                        <ToggleMenu />
                    </NavigationLeft>
                    <NavigationCenter>
                        <NavigationComponents dura={dura} canBack={activeBttnBack} isFavorited={activeBttnFavorited} />
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
