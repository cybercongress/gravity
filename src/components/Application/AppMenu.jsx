import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ClickOutside from 'react-click-outside';
import { Pane, Text, Pill } from 'evergreen-ui';
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
const imgEth = require('./AppMenu/eth.svg');

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
                {/* <LogoLink onClick={ this.clickLogo } /> */}

                {/* <Message
                  style={ {
                    margin: 15,
                  } }
                  type='error'
                >
                Cyb in Ethereum Mainnet may not be secure yet. We recommend to operate accounts with small balance at your own risk.
                </Message> */}
                <Pane
                  flexDirection='column'
                  alignItems='flex-start'
                  display='flex'
                  marginBottom={ 66 }
                  flexShrink={0}
                >
                    <Pane marginBottom={ 20 } display='flex' alignItems='center'>
                        <Pane marginRight={ 13 }>
                            <Text color='#fff' fontSize='24px'>
                                7
                            </Text>
                        </Pane>

                        <Pane display='flex' alignItems='center'>
                            <Pane width={ 32 } height={ 32 }>
                                <img src={ imgEth } />
                            </Pane>
                            <Pane width={ 32 } height={ 32 }>
                                <img src={ imgEth } />
                            </Pane>
                        </Pane>
                    </Pane>
                    <Pane display='flex' alignItems='center'>
                        <Pane marginRight={ 13 }>
                            <Text color='#fff' fontSize='24px'>
                                7
                            </Text>
                        </Pane>

                        <Pane display='flex' alignItems='center'>
                            <Pane paddingX={ 7 }>
                                <Pill
                                  height={ 7.8 }
                                  width={ 7.8 }
                                  borderRadius='50%'
                                  paddingX={ 0 }
                                  isSolid
                                  boxShadow='0 0 9px 1.5px #4ed6ae'
                                  backgroundColor='#36d6ae'
                                />
                            </Pane>
                            <Pane paddingX={ 7 }>
                                <Pill
                                  height={ 7.8 }
                                  width={ 7.8 }
                                  borderRadius='50%'
                                  paddingX={ 0 }
                                  isSolid
                                  boxShadow='0 0 9px 1.5px #4ed6ae'
                                  backgroundColor='#36d6ae'
                                />
                            </Pane>
                            <Pane paddingX={ 7 }>
                                <Pill
                                  height={ 7.8 }
                                  width={ 7.8 }
                                  borderRadius='50%'
                                  paddingX={ 0 }
                                  isSolid
                                  boxShadow='0 0 9px 1.5px #4ed6ae'
                                  backgroundColor='#36d6ae'
                                />
                            </Pane>
                            <Pane paddingX={ 7 }>
                                <Pill
                                  height={ 7.8 }
                                  width={ 7.8 }
                                  borderRadius='50%'
                                  paddingX={ 0 }
                                  isSolid
                                  boxShadow='0 0 9px 1.5px #4ed6ae'
                                  backgroundColor='#36d6ae'
                                />
                            </Pane>
                        </Pane>
                    </Pane>
                </Pane>
                <Pane className='opacityItems' width='100%' flexShrink={0} display='flex' justifyContent='center' marginBottom={ 20 }>
                    <Pane display='flex' alignItems='center'>
                        <Pane marginX={ 5 } width={ 32 } height={ 32 }>
                            <img src={ imgEth } />
                        </Pane>
                        <Pane marginX={ 5 } width={ 32 } height={ 32 }>
                            <img src={ imgEth } />
                        </Pane>
                    </Pane>
                </Pane>
                {/* <Pane overflow='auto' flexGrow={1} width='100%'> */}
                    <Bookmarks items={ menuItems } deleteMenuItem={ deleteMenuItem } />
                {/* </Pane> */}
                {pendingAddToFavorites && (
                    <div onClickOutside={ this.rejectFavorite }>
                        <AddMenuItemContainer>
                            <AddMenuItem>
                                <input
                                  ref={ (node) => {
                                        this.input = node;
                                    } }
                                  defaultValue='New App'
                                />
                                <AddMenuItemReject onClick={ this.addToFavorites } />
                            </AddMenuItem>
                        </AddMenuItemContainer>
                    </div>
                )}
                <Pane width='100%' paddingY={10} display='flex' justifyContent='center' className='opacityItemsBefore'>
                <ReportLinkContainer>
                    <a target='__blank' href='https://github.com/cybercongress/cyb'>
                        Find a bug?
                    </a>
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
