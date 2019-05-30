import React from 'react';
import cx from 'classnames';
import classNames from 'classnames';
import { Pane, Text, Pill } from 'evergreen-ui';
import { CybLink, LinkHash, Battery } from '../../..';
import { WaleetAppMenu, UserCard } from '../AppMenu/AppMenu';

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
      style={ { direction: 'ltr' } }
    >
        <Pane
          display='flex'
          width='100%'
          paddingLeft={ 20 }
          paddingRight={ 20 }
          justifyContent='flex-start'
          alignItems='center'
          overflow='hidden'
        >
            <Pane alignItems='flex-start' width='inherit' flexDirection='column' display='flex'>
                <Pane alignItems='center' width='inherit' display='flex'>
                    {/* v2 */}
                    {/* <Pane width={ 14 } height={ 14 } alignItems='center' display='flex'>
                        <Pill marginRight={ 7 } width={ 6 } height={ 6 } paddingX={ 0 } isSolid borderRadius='50%' color={
                                            item.status == 'local'
                                                ? 'green'
                                                : item.status == 'fail'
                                                ? 'red'
                                                : 'yellow'
                                        }/>
                   </Pane> */}

                    {item.address ? (
                        <Pane width='inherit' alignItems='center' display='flex'>
                            <CybLink
                              { ...props }
                              style={ { textOverflow: 'ellipsis', overflow: 'hidden' } }
                              dura={ item.dura }
                            >
                                {item.address}
                            </CybLink>
                        </Pane>
                    ) : (
                        <Pane alignItems='center' display='flex'>
                            <CybLink { ...props } dura={ item.rootDura }>
                                {item.rootDura}
                            </CybLink>
                        </Pane>
                    )}
                </Pane>
                {/* v2 */}
                {/* <Pane>
                    <Text color='#9d9d9d' fontSize='12px'>
                        20 min
                    </Text>
                </Pane> */}
            </Pane>
        </Pane>
    </Pane>
);

export const BookmarksTimeline = ({ items, ...props }) => (
    <div style={ { direction: 'rtl' } } className={ styles.bookmarks }>
        {items.map((item, index) => (
            <ItemsTimeline { ...props } key={ index } item={ item } />
        ))}
    </div>
);

const ContenTooltip = ({ bwRemained, bwMaxValue, linkPrice }) => (
    <Pane minWidth={ 200 } paddingX={ 18 } paddingY={ 14 } borderRadius={ 4 } backgroundColor='#fff'>
        <Pane marginBottom={ 12 }>
            <Text size={ 300 }>
                You have
                {' '}
                {bwRemained}
                {' '}
BP out of
                {' '}
                {bwMaxValue}
                {' '}
BP.
            </Text>
        </Pane>
        <Pane marginBottom={ 12 }>
            <Text size={ 300 }>Full regeneration of bandwidth points or BP happens in 24 hours.</Text>
        </Pane>
        <Pane display='flex' marginBottom={ 12 }>
            <Text size={ 300 }>
                Current rate for 1 cyberlink is
                {linkPrice}
                {' '}
BP.
            </Text>
        </Pane>
    </Pane>
);

export const Timeline = ({
    menuItems,
    cybBalance,
    ethBalance,
    open,
    bwRemained,
    bwMaxValue,
    linkPrice,
    defaultEthAccount,
}) => (
    <div className={ cx(styles.user_popup, { [styles.user_popup__open]: open }) }>
        {defaultEthAccount && (
            <Pane width='100%' marginBottom='1.5em' paddingX='1em'>
                <Battery
                  maxHeight={ 16 }
                  bwPercent={ 10 }
                  bwPercent={ ((bwRemained / bwMaxValue) * 100).toFixed(0) }
                  contentTooltip={ (
                      <ContenTooltip
                        bwRemained={ bwRemained }
                        bwMaxValue={ bwMaxValue }
                        linkPrice={ linkPrice }
                      />
) }
                />
            </Pane>
        )}
        <WaleetAppMenu marginBottom={ 46 } ethBalance={ ethBalance } cybBalance={ cybBalance } />
        <UserCard
          className='opacityItems'
            // marginBottom={ 20 }
        />
        <BookmarksTimeline items={ menuItems } />
        <Pane
          width='100%'
          paddingBottom={ 30 }
          paddingTop={ 10 }
          display='flex'
          justifyContent='center'
          alignItems='center'
          className='opacityItemsBefore'
          flexDirection='column'
        >
            {/* <Text fontSize='16px' color='#fff'>
                Timeline
            </Text> */}
        </Pane>
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
                    <div className={styles.username}>
                        <Text marginX={ 10 } color='#fff' fontSize='1em'>
                            User
                        </Text>
                    </div>
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
            {/* {defaultEthAccount && (
                <Timeline
                  open={ open }
                  ethBalance={ ethBalance }
                  cybBalance={ cybBalance }
                  menuItems={ menuItems }
                  defaultEthAccount={defaultEthAccount}
                />
            )} */}
        </div>
    );
};

export default IdBarComponent;
