import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ClickOutside from 'react-click-outside';
import {
    Pane, Text, Pill, TextInput, Tooltip,
} from 'evergreen-ui';
import {
    Message,
    MenuContainer,
    Bookmarks,
    LogoLink,
    AddMenuItem,
    AddMenuItemReject,
    ReportLinkContainer,
    AddMenuItemContainer,
} from '../..';
// import * as actions from '../../redux/appMenu';
import {
    WaleetAppMenu,
    UserCard,
} from './AppMenu/AppMenu';
class AppMenu extends Component {
    addToFavorites = () => {
        const { props } = this;
        const dura = props.currentDura;
        const name = this.input.value;

        props.addMenuItem(name, dura);
        this.hideInput();
    };

    hideInput = () => {
        const { props } = this;

        props.hideInput();
    };

    rejectFavorite = () => {
        this.input.value = 'New App';
        this.hideInput();
    };

    clickLogo = () => {
        // this.props.toggleMenu();
    };

    render() {
        const { deleteMenuItem, menuItems, pendingAddToFavorites } = this.props;

        return (
            <MenuContainer>
                {/* <WaleetAppMenu marginBottom={ 66 } ethBalance={ 17 } cybBalance={ 10 } /> */}
                {/* <UserCard className='opacityItems' marginBottom={ 20 } /> */}
                <Pane position='relative' width='100%' className='opacityItems' />
                <Bookmarks items={ menuItems } deleteMenuItem={ deleteMenuItem } />

                <Pane
                  width='100%'
                  paddingY={ 10 }
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  className='opacityItemsBefore'
                  flexDirection='column'
                >
                    
                    <ReportLinkContainer>
                        {/* <a target='__blank' href='#'>
                            Files
                        </a> */}
                        {pendingAddToFavorites && (
                        <Pane onClickOutside={ this.rejectFavorite }>
                        <Pane zIndex={ 2 }>
                            <AddMenuItemContainer paddingBottom={ 10 }>
                                <AddMenuItem>
                                    <TextInput
                                      boxSizing='border-box'
                                      paddingRigt={ 40 }
                                      paddingLeft={ 10 }
                                      paddingY={ 10 }
                                      width='80%'
                                      fontSize='14px'
                                      backgroundColor='transparent'
                                      style={ { caretColor: '#36d6ae' } }
                                      ref={ (node) => {
                                            this.input = node;
                                        } }
                                      defaultValue='New App'
                                    />
                                    <AddMenuItemReject onClick={ this.addToFavorites } />
                                </AddMenuItem>
                            </AddMenuItemContainer>
                        </Pane>
                        </Pane>
                    )}
                    </ReportLinkContainer>
                </Pane>
            </MenuContainer>
        );
    }
}

export default AppMenu;
// export default connect(
//     state => ({
//         dura: state.browser.dura,
//         menuItems: state.appMenu.items,
//         currentDura: state.browser.dura,
//         pendingAddToFavorites: state.appMenu.pendingAddToFavorites,
//     }),
//     actions,
// )(AppMenu);
