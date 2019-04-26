import React from 'react';
import { Pane, Pill, Button, IconButton, Text, Tooltip } from 'evergreen-ui';
import { CybLink } from '../../..';

const img = require('../cyb.svg');
// import './AppMenu.less';

const styles = require('./AppMenu.less');

const imgEth = require('./eth.svg');
const imggroup3= require('./group-3.svg');
const imginfinity2 = require('./infinity-2.svg');
const imgbody = require('./body.svg');

export const WaleetAppMenuEth = ({ ethBalance }) => (
    <Pane marginBottom={ 20 } display='flex' alignItems='center'>
        <Pane marginRight={ 13 }>
            <Text color='#fff' fontSize='24px'>
                {ethBalance} ETH
            </Text>
        </Pane>

        {/* <Pane display='flex' alignItems='center'>
            <Pane width={ 32 } height={ 32 }>
                <img src={ imgEth } />
            </Pane>
            <Pane width={ 32 } height={ 32 }>
                <img src={ imgEth } />
            </Pane>
        </Pane> */}
    </Pane>
);

export const WaleetAppMenuCyb = ({ cybBalance }) => (
    <Tooltip
      position='left'
      content={ (
          <Pane paddingY={ 16 } paddingX={ 16 }>
              <Text lineHeight={ 1.33 } fontSize='12px' color='#fff'>
                    142 76483221311 explanation of number scales
              </Text>
          </Pane>
) }
    >
        <Pane display='flex' alignItems='center'>
            <Pane marginRight={ 13 }>
                <Text color='#fff' fontSize='24px'>
                    {cybBalance} GCYB
                </Text>
            </Pane>
{/* 
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
            </Pane> */}
        </Pane>
    </Tooltip>
);

export const WaleetAppMenu = ({ ethBalance, cybBalance, ...props }) => (
    <Pane { ...props } flexDirection='column' alignItems='flex-start' display='flex' flexShrink={ 0 }>
        <WaleetAppMenuEth ethBalance={ ethBalance ? ethBalance : 0 } />
        <WaleetAppMenuCyb cybBalance={ cybBalance ? cybBalance : 0 } />
    </Pane>
);

export const UserCard = ({ ...props }) => (
    <Pane { ...props } width='100%' flexShrink={ 0 } display='flex' justifyContent='center'>
        <Pane display='flex' alignItems='center'>
            <Pane marginX={ 5 } width={ 32 } height={ 40 }>
                <img src={ imginfinity2 } />
            </Pane>
            <Pane marginX={ 5 } width={ 32 } height={ 40 }>
                <img src={ imgbody } />
            </Pane>
            <Pane marginX={ 5 } width={ 32 } height={ 40 }>
                <img src={ imggroup3 } />
            </Pane>
        </Pane>
    </Pane>
);

const Logo = props => (
    <CybLink { ...props } className={ styles.logo }>
        logo
    </CybLink>
);

export const LogoLink = ({ onClick, ...props }) => (
    <div className={ styles.menu_logo }>
        <Logo { ...props } dura='' onClick={ onClick } />
    </div>
);

export const AppStoreLink = (...props) => (
    <CybLink { ...props } dura='apps.cyb' className={ styles.app_store_link }>
        App Store
    </CybLink>
);

const Items = ({ item, deleteAppFromMenu, ...props }) => (
    <Pane
      display='flex'
      paddingY={ 10 }
      alignItems='center'
      className={ `${styles.bookmarks__item} ${styles.active}` }
      key={ item.rootDura }
    >
    <Pane display='flex' width='100%' paddingLeft={20} paddingRight={10} justifyContent='space-between' alignItems='center'>
        <Pane alignItems='center' flexGrow={1} display='flex'>
            {/* <Pane className={ styles.imgItems } marginRight={ 17 } width={ 24 } height={ 24 }>
                <img src={ item.img ? item.img : img } />
            </Pane> */}
            <CybLink { ...props } dura={ item.rootDura }>
                {item.name}
            </CybLink>
        </Pane>
        {item.pill &&
        <Pill
          isSolid
          width={ 22 }
          height={ 16 }
          boxShadow='0px 0px 17px 2px #36d6ae'
          style={{ backgroundColor: '#36d6ae', color: '#000' }}
        >
            {item.pill}
        </Pill>
        }
        <div className={styles.bookmarks__group_btn}>
        <button
          type='button'
          className={styles.bookmarks__edit_btn}
          onClick={ () => deleteAppFromMenu(item.rootDura) }
        />
        <button
          type='button'
          className={styles.bookmarks__remove_btn}
          onClick={ () => deleteAppFromMenu(item.rootDura) }
        />
        </div>
    </Pane>
    </Pane>
);

export const Bookmarks = ({ items, deleteMenuItem, ...props }) => (
    <div className={ styles.bookmarks }>
        {items.map(item => (
            <Items { ...props } key={ item.rootDura } item={ item } deleteAppFromMenu={ deleteMenuItem } />
        ))}
    </div>
);

export const CloseButton = props => (
    <button type='button' { ...props } className={ styles.CloseButton }>
        close
    </button>
);

export const ReportLinkContainer = ({ children }) => (
    <div className={ styles.ReportLinkContainer }>{children}</div>
);

const MenuContainer = ({ children }) => <div className={ styles.menuContainer2 }>{children}</div>;

export const AddMenuItem = ({ children, ...props }) => <Pane {...props} className={ styles.AddMenuItem }>{children}</Pane>;

export const AddMenuItemReject = ({ onClick }) => (
    <Button
    type='button'
    position='absolute'
    width={34}
    right={20}
    top={0}
    fontSize='16px'
    bottom={0}
    paddingX={13}
    onClick={ onClick }
    className='btn'
    >
        &#10004;
    </Button>
);

export const AddMenuItemContainer = props => (
    <Pane { ...props } className={ styles.AddMenuItemContainer } />
);

export default MenuContainer;
