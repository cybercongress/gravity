import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    Input, ContainerRegister, Control, Content, Panel, SideBar,
} from '../..';

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    background: '#eff3f6',
};
const CenterDecorator = storyFn => <div style={ styles }>{storyFn()}</div>;

storiesOf('Elements/ContainerRegister', module)
    .addDecorator(CenterDecorator)
    .add('ContainerRegister', () => (
        <ContainerRegister title='title'>
            <SideBar title='title'>
                <Panel title='title'>
                    <Control title='title'>
                        <Input />
                    </Control>
                    <Control title='title'>
                        <Input />
                    </Control>
                    <Control title='title'>
                        <Input />
                    </Control>
                </Panel>
            </SideBar>
            <Content title='title'>
                <Panel title='title'>
                    <Control title='title'>
                        <Input />
                    </Control>
                    <Control title='title'>
                        <Input />
                    </Control>
                    <Control title='title'>
                        <Input />
                    </Control>
                </Panel>
            </Content>
        </ContainerRegister>
    ));
