import React from 'react';
import { storiesOf } from '@storybook/react';
import { PageTitle } from '../..';

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    background: '#eff3f6',
};
const CenterDecorator = storyFn => <div style={ styles }>{storyFn()}</div>;

storiesOf('commponents/PageTitle', module)
    .addDecorator(CenterDecorator)

    .add('PageTitle', () => (
        <PageTitle> Title </PageTitle>
    ))