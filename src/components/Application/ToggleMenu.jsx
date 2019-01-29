import React from 'react';
// import { connect } from 'react-redux';
// import { toggleMenu as toggleMenuAction } from '../../redux/appMenu';

import {
    MenuButton,
} from '../..';

const Menu = ({ openMenu, toggleMenu }) => (
    <MenuButton
      openMenu={ openMenu }
      onClick={ toggleMenu }
    />
);

export default Menu;

// export default connect(
//     state => ({
//         openMenu: state.appMenu.openMenu,
//     }),
//     { toggleMenu: toggleMenuAction },
// )(Menu);
