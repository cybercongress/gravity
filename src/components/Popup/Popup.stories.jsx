import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { ContentLine, LineControl, ContentInput, LineTitle } from '../PopupContent/PopupContent';
import { Popup,PopupButtun, PopupTitle, PopupContent, PopupFooter } from './Popup';

storiesOf('Popup', module)
  .addDecorator(centered)
  .add('FundRegistry', () => (
    <Popup open="claimFundOpen">
      <PopupTitle>Fund registry</PopupTitle>
      <PopupContent>
        <ContentLine>
            <LineTitle>Amount:</LineTitle>
            <LineControl>
              <ContentInput />
            </LineControl>
        </ContentLine>
      </PopupContent>
      <PopupFooter>
        <PopupButtun type="cansel">Cansel</PopupButtun>
        <PopupButtun type="confirm">Confirm</PopupButtun>
      </PopupFooter>
    </Popup>
  ));
