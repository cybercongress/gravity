import React from 'react';
import { storiesOf } from '@storybook/react';
import { TotalCost } from '../..';

storiesOf('Elements/TotalCost', module).add('TotalCost', () => <TotalCost value={ 4 } />);
