import React from 'react';
import { CybLink } from '../..';
import cx from 'classnames';

const styles = require('./Home.less');

export const Home = props => (
    <div { ...props } className={styles.home} />
);


export const Items = ({ children }) => (
    <div className={styles.items}>
        {children}
    </div>
);

export const Item = ({ children, dura, ...props }) => (
    props.disabled ? (
        <span className={styles.item} { ...props }>{children}</span>
    ) : (
        <CybLink dura={ dura } className={styles.item} { ...props }>
            {children}
        </CybLink>
    )
);

export const Arrow = () => (
    <span className={styles.arrow} />
);

export const ItemTitle = ({ children, gray }) => {
    return (
        <span className={ cx(styles.itemTitle, {[styles.itemTitleGray]: gray })}>
            {children}
        </span>
    );
};

export const Image = ({ type }) => (
    <div className={cx (styles.image, {
                            [styles.imageappStore]: type ==='appStore',
                            [styles.imagecreateRegistry]: type ==='createRegistry',
                            [styles.imagecreateApp]: type ==='createApp',
                            [styles.imagechaingear]: type ==='chaingear',
                            [styles.imagedragonereum]: type ==='dragonereum',
                            [styles.imagewallet]: type ==='wallet',
                            [styles.imageipfs]: type ==='ipfs'
                        })} />
);

export const LinkList = ({ children }) => (
    <nav className={styles.linkList}>
        {children}
    </nav>
);

// export const LinkItem = ({ children, to, icon, ...props}) => (
//     <Link to={to} className={`linkItem linkItem${icon}`} {...props}>
//         {children}
//     </Link>
// );

export const LinkItem = ({
    children, to, icon, ...props
}) => (
    <a href={ to } className={ cx(styles.linkItem, {
                                    [styles.linkItemgithub]: icon === 'github',
                                    [styles.linkItemroadmap]: icon === 'roadmap',
                                    [styles.linkItemcybernode]: icon === 'cybernode',
                                    [styles.linkItemdashboard]: icon === 'dashboard',
                                    [styles.linkItemknowledge]: icon === 'knowledge',
                                    [styles.linkItemblog]: icon === 'blog',
                            } )} { ...props }>
        {children}
    </a>
);
