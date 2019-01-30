import React from 'react';
import { CybLink } from '../../..';
// import './AppMenu.css';

const styles = require('./AppMenu.css');

const Logo = props => (
    <CybLink { ...props } className={styles.logo}>logo</CybLink>
);

export const LogoLink = ({ onClick, ...props  }) => (
    <div className={styles.menu_logo}>
        <Logo { ...props } dura='' onClick={ onClick } />
    </div>
);

export const AppStoreLink = ( ...props ) => (
    <CybLink { ...props } dura='apps.cyb' className={styles.app_store_link}>
        App Store
    </CybLink>
);

const Items = ({ item, deleteAppFromMenu, ...props  }) => (
    <span className={styles.bookmarks__item} key={ item.rootDura }>
        <CybLink { ...props } dura={ item.rootDura }>
            {item.name}
        </CybLink>
        <button
          type='button'
          className={styles.bookmarks__remove_btn}
          onClick={ () => deleteAppFromMenu(item.rootDura) }
        >
        &#128465;
        </button>
    </span>
);

export const Bookmarks = ({ items, deleteMenuItem, ...props  }) => (
    <div className={styles.bookmarks}>
        {items.map(item => (
            <Items
            { ...props }
              key={ item.rootDura }
              item={ item }
              deleteAppFromMenu={ deleteMenuItem }
            />
        ))}
    </div>
);

export const CloseButton = props => (
    <button type='button' { ...props } className={styles.CloseButton}>close</button>
);


export const ReportLinkContainer = ({ children }) => (
    <div className={styles.ReportLinkContainer}>
        {children}
    </div>
);

const MenuContainer = ({ children }) => (
    <div className={styles.menuContainer2}>
        {children}
    </div>
);


export const AddMenuItem = ({ children }) => (
    <span className={styles.AddMenuItem}>
        {children}
    </span>
);


export const AddMenuItemReject = ({ onClick }) => (
    <button
      type='button'
      onClick={ onClick }
      className={styles.AddMenuItem__reject}
    >
    &#10004;
    </button>
);

export const AddMenuItemContainer = props => (
    <div { ...props } className={styles.AddMenuItemContainer} />
);

export default MenuContainer;
