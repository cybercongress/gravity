import React from 'react';
import { storiesOf } from '@storybook/react';

import {
    AppSideBar,
} from '../../..';

import AppMenu from '../../Application/AppMenu';

const img = require('../../../img/earth-active.svg');

const menuItems = [
    {
        items: '1',
        rootDura: 'ds',
        name: 'Chaingear',
        pill: '7',
        status: 'remote',
    },
    {
        items: '2',
        name: 'cyber•Congress',
        rootDura: 'tbcds',
        status: 'local',
    },
    {
        items: '3',
        name: 'cyb.ai',
        rootDura: 'tyds',
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        status: 'fail',
    },

    {
        items: '4',
        name: '.cyber',
        rootDura: 'tyds',
    },
    {
        items: '5',
        name: '.cyb',
        rootDura: 'tyds',
    },
    {
        items: '6',
        name: 'One day Earth',
        rootDura: 'tyds',
        img: `${img}`,
    },

    {
        items: '7',
        name: 'IPFS',
        rootDura: 'tyds',
    },
    {
        items: '8',
        name: '.root',
        rootDura: 'tyds',
    },
    {
        items: '9',
        name: '.cyber',
        rootDura: 'tyds',
    },
    {
        items: '10',
        name: '.cyb',
        rootDura: 'tyds',
    },
    {
        items: '11',
        name: 'One day Earth',
        rootDura: 'tyds',
        img: `${img}`,
    },

    {
        items: '12',
        name: 'IPFS',
        rootDura: 'tyds',
    },
    {
        items: '13',
        name: '.root',
        rootDura: 'tyds',
    },
];

const Application = (props) => {
    const {
        openMenu,
        toggleMenu,
        newApp,
    } = props;

    return (
        <AppSideBar onCloseSidebar={ toggleMenu } openMenu={ openMenu }>
            <AppMenu pendingAddToFavorites={ newApp } menuItems={ menuItems } />
        </AppSideBar>
    );
};

storiesOf('Components|appBar', module)
    .add('appBar', () => (
        <Application openMenu />
    ));
