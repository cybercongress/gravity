import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import {
    Home,
    Items,
    Item,
    ItemTitle,
    Image,
    Arrow,
    LinkList, LinkItem,
} from '../..';

const HomePage = props => (
    <div>

    
    <div style={{height: 200, backgroundColor:'#438cef'}}></div>
    <Home>
        <Items>
            <Item dura='.chaingear'>
                <ItemTitle>Chaingear</ItemTitle>
                <Image type='chaingear' />
                <Arrow />
            </Item>

            <Item dura='.dragons'>
                <ItemTitle>Dragonereum</ItemTitle>
                <Image type='dragonereum' />
                <Arrow />
            </Item>

            <Item dura='.ipfsview'>
                <ItemTitle>IPFS web UI</ItemTitle>
                <Image type='ipfs' />
                <Arrow />
            </Item>
        </Items>

        <LinkList>

            <LinkItem
              target='_blank'
              to='https://github.com/cybercongress'
              icon='github'
            >
                GitHub
            </LinkItem>
            <LinkItem
              target='_blank'
              to='https://github.com/orgs/cybercongress/projects/1'
              icon='roadmap'
            >
                Roadmap
            </LinkItem>
            <LinkItem
              target='_blank'
              to='https://wiki.cybercongress.ai'
              icon='knowledge'
            >
                Knowledge
            </LinkItem>
            <LinkItem target='_blank' to='https://steemit.com/@cybercongress' icon='blog'>Blog</LinkItem>

        </LinkList>
    </Home>
    </div>
);

storiesOf('cyb/pages/HomePage', module).add('HomePage', () => <HomePage />);
