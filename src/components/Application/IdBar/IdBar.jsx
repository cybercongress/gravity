import React from 'react';
import cx from 'classnames';
import classNames from 'classnames';
import { Pane, Text, Pill } from 'evergreen-ui';
import { CybLink, LinkHash } from '../../..';
import {
    WaleetAppMenu,
    UserCard,
} from '../AppMenu/AppMenu';

const styles = require('./IdBar.less');

const IdBarComponent = ({ children }) => <div className={ styles.id_bar }>{children}</div>;

export const SettingsLink = props => (
    <CybLink { ...props } dura='settings.cyb' className={ styles.id_bar__settings }>
        Settings
    </CybLink>
);

export const WalletLink = props => (
    <CybLink { ...props } dura='wallet.cyb' className={ styles.id_bar__wallet }>
        Wallet
    </CybLink>
);

export const NotificationLink = ({ notificationLinkCounter, ...props }) => (
    <CybLink dura='txq.cyb' { ...props } className={ styles.id_bar__txq }>
        <span>{notificationLinkCounter !== 0 ? notificationLinkCounter : ''}</span>
    </CybLink>
);

const ItemsTimeline = ({ item, deleteAppFromMenu, ...props }) => (
    <Pane
      display='flex'
      paddingY={ 10 }
      alignItems='center'
      className={ `${styles.bookmarks__item} ${styles.activeTL}` }
      key={ item.rootDura }
      style={{ direction: 'ltr' }}
    >
        <Pane
          display='flex'
          width='100%'
          paddingLeft={ 20 }
          paddingRight={ 20 }
          justifyContent='flex-start'
          alignItems='center'
        >
            <Pane alignItems='flex-start' flexDirection='column' display='flex'>
                <Pane alignItems='center' display='flex'>
                <Pane width={ 14 } height={ 14 } alignItems='center' display='flex'>
                        <Pill marginRight={ 7 } width={ 6 } height={ 6 } paddingX={ 0 } isSolid borderRadius='50%' color={
                                            item.status == 'local'
                                                ? 'green'
                                                : item.status == 'fail'
                                                ? 'red'
                                                : 'yellow'
                                        }/>
                   </Pane>
                    {item.address ?
                    <Pane alignItems='center' display='flex'>
                        <LinkHash style={{color: '#fff'}} noCopy noPadding value={ item.address } />
                   </Pane>
                   :
                   <Pane alignItems='center' display='flex'>
                    <CybLink { ...props } dura={ item.rootDura }>
                            {item.name}
                        
                    </CybLink>
                    </Pane>
                 }
                </Pane>

                <Pane>
                    <Text color='#9d9d9d' fontSize='12px'>
                        20 min
                    </Text>
                </Pane>
            </Pane>
        </Pane>
    </Pane>
);

export const BookmarksTimeline = ({ items, ...props }) => (
    <div style={{ direction: 'rtl' }} className={ styles.bookmarks }>
        {items.map(item => (
            <ItemsTimeline { ...props } key={ item.rootDura } item={ item } />
        ))}
    </div>
);

export const CurrentUser = (props) => {
    const {
        defaultEthAccount,
        open,
        toggle,
        favoriteClick,
        ethBalance,
        cybBalance,
        menuItems,
        deleteMenuItem,
    } = props;

    return (
        <div className={ styles.user_popup__container }>
            {defaultEthAccount ? (
                <Pane display='flex' alignItems='center'>
                    <Text marginRight={ 10 } color='#fff' fontSize='1em'>
                        User
                    </Text>
                    <img
                      alt='user'
                      className={ styles.id_bar__user }
                      onClick={ toggle }
                      src={ `https://robohash.org/${defaultEthAccount}` }
                    />
                </Pane>
            ) : (
                <CybLink { ...props } dura='wallet.cyb'>
                    <div
                      className={ classNames({
                            [styles.id_bar__user]: true,
                            [styles.id_bar__user__default]: true,
                        }) }
                      onClick={ toggle }
                    />
                </CybLink>
            )}
            {defaultEthAccount && (
                <div className={ cx(styles.user_popup, { [styles.user_popup__open]: open }) }>
                    <WaleetAppMenu marginBottom={ 46 } ethBalance={ 17 } cybBalance={ 10 } />
                    <UserCard className='opacityItems' marginBottom={ 20 } />
                    <BookmarksTimeline items={ menuItems } />
                    <Pane
                      width='100%'
                      paddingBottom={ 30 }
                      paddingTop={10}
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                      className='opacityItemsBefore'
                      flexDirection='column'
                    >
                        <Text fontSize='16px' color='#fff'>
                            Timeline
                        </Text>
                    </Pane>
                </div>
            )}
        </div>
    );
};

export default IdBarComponent;
