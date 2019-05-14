import React from 'react';
// import { connect } from 'react-redux';
// import { toggleMenu as toggleMenuAction } from '../../redux/appMenu';

import { MenuButton } from '../..';

class Menu extends React.Component {
    render() {
        const { openMenu, toggleMenu } = this.props;
        const ipfsStatus = 'fail';
        const ethNodeStatus = 'fail';
        const cyberNodeStatus = 'remote';
        let status = '';
        if (ipfsStatus === 'fail' && ethNodeStatus === 'fail' && cyberNodeStatus === 'fail'){
          status='fail'
        }else if(ipfsStatus === 'local' && ethNodeStatus === 'local' && cyberNodeStatus === 'local'){
          status='local'
        }else {
          status='remote'
        }
        console.log(status);
        return (
            <MenuButton
              openMenu={ openMenu }
              onClick={ toggleMenu }
             status={ status } //  status indicator
            />
        );
    }
}

export default Menu;

// export default connect(
//     state => ({
//         openMenu: state.appMenu.openMenu,
//     }),
//     { toggleMenu: toggleMenuAction },
// )(Menu);
