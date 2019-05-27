import React from 'react';
import cx from 'classnames';
import { IconButton } from 'evergreen-ui';

const styles = require('./App.less');

const App = ({ children, openMenu }) => <div className={ styles.app }>{children}</div>;

// TODO: remove inner div fix navigation component
export const AppHeader = ({ isHome, children, isMenuOpen }) => (
    <div
      className={ cx(styles.appHeader, {
            [styles.appHeaderIsHome]: isHome,
        }) }
    >
        <div className={ styles.appHeaderInner }>{children}</div>
    </div>
);

export const AppContent = ({ children }) => <div className={ styles.appContent }>{children}</div>;

export const AppSideBar = ({
    children, onCloseSidebar, openMenu, relative,
}) => (
    <div
      className={ cx(styles.sideBar, {
            [styles.sideBarHide]: !openMenu,
            [styles.sideBarRelative]: relative,
        }) }
    >
       {!relative && (
            <button type='button' onClick={ onCloseSidebar } className={ styles.closeButton }>
                close
            </button>
        )}
        <IconButton
          icon={ relative ? 'unpin' : 'pin'}
          appearance='minimal'
          className='icon-btn color-gray-svg'
          position='absolute'
          top={ 15 }
          right={ relative ? 15 : 40 }
          iconSize={ 16 }
          color='#979797'
          width={ 24 }
          height={ 24 }
        />
        {children}
    </div>
);

export default App;
