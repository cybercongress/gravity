import React from 'react';
import { storiesOf } from '@storybook/react';

import IdBar from '../../Application/IdBar';
import { Timeline } from '../../Application/IdBar/IdBar';

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
    return (
        <Timeline open ethBalance='1' cybBalance={2} menuItems={menuItems} />
    );
};

storiesOf('Molecules|timeline', module)
    .add('timeline', () => (
        <Application openMenu />
    ));
