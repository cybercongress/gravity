import React from 'react';
import { Pane, Pill } from 'evergreen-ui';
import { CybLink } from '../../..';

const img = require('../cyb.svg');
// import './AppMenu.less';

const styles = require('./AppMenu.less');

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
    <Pane display='flex' width='100%' paddingLeft={20} paddingRight={20} justifyContent='space-between' alignItems='center'>
        <Pane alignItems='center' display='flex'>
            <Pane className={ styles.imgItems } marginRight={ 17 } width={ 24 } height={ 24 }>
                <img src={ item.img ? item.img : img } />
            </Pane>
            <CybLink { ...props } dura={ item.rootDura }>
                {item.name}
            </CybLink>
        </Pane>
        <Pill
        //   position='absolute'
          isSolid
          width={ 22 }
          height={ 16 }
            //   className={ styles.pillItems }
        //   right={ 50 }
          boxShadow='0px 0px 17px 2px #36d6ae'
          style={{ backgroundColor: '#36d6ae', color: '#000' }}
        >
            3
        </Pill>
        </Pane>
        {/* <button
          type='button'
          className={styles.bookmarks__remove_btn}
          onClick={ () => deleteAppFromMenu(item.rootDura) }
        >
        &#128465;
        </button> */}
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

export const AddMenuItem = ({ children }) => <span className={ styles.AddMenuItem }>{children}</span>;

export const AddMenuItemReject = ({ onClick }) => (
    <button type='button' onClick={ onClick } className={ styles.AddMenuItem__reject }>
        &#10004;
    </button>
);

export const AddMenuItemContainer = props => (
    <div { ...props } className={ styles.AddMenuItemContainer } />
);

export default MenuContainer;
