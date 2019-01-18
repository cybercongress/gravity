import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    Control,
    SideBar,
    Content,
    ContainerRegister,
    PageTitle,
    RemoveButton,
    AddButton,
} from './index';
import { Input, Panel } from '../..';

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    background: '#eff3f6',
};
const CenterDecorator = storyFn => <div style={ styles }>{storyFn()}</div>;

storiesOf('commponents/newregistry', module)
    .addDecorator(CenterDecorator)

    .add('Content', () => (
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
    ))
    .add('ContainerRegister', () => (
        <ContainerRegister title='title'>
            <Control title='title'>
                <Input />
            </Control>
            <Control title='title'>
                <Input />
            </Control>
            <Control title='title'>
                <Input />
            </Control>
        </ContainerRegister>
    ))
    .add('PageTitle', () => (
        <div>
            <PageTitle>Title Title</PageTitle>
        </div>
    ))
    .add('RemoveButton AddButton', () => (
        <div>
            <RemoveButton />
            <AddButton />
        </div>
    ))
    .add('Control', () => (
        <Control title='title'>
            <Input />
        </Control>
    ));
