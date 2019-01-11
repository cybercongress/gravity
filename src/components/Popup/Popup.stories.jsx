import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { LinkHash, WideInput, Buttons } from '../..';
import {
  ContentLine,
  ContentLineTextInput,
  LineControl,
  ContentInput,
  LineTitle,
  LineText,
  ContentLineFund,
} from '../PopupContent/PopupContent';
import { Popup, PopupButton, PopupSkillBar, PopupBarButton, PopupNotificationButton, PopupNotification, PopupTitle, PopupContent, PopupFooter, PopupBar,PopupBarFooter } from './Popup';
import  { Status }  from './status';

storiesOf('commponents/Popup', module)
  .addDecorator(centered)
  .add('FundRegistry', () => (
    <Popup open="claimFundOpen">
      <PopupTitle>Fund registry</PopupTitle>
      <PopupContent>
        <ContentLineFund>
          <LineTitle>Amount:</LineTitle>
          <LineControl>
            <WideInput />
          </LineControl>
        </ContentLineFund>
      </PopupContent>
      <PopupFooter>
        <PopupButton type="cancel">cancel</PopupButton>
        <PopupButton type="confirm">Confirm</PopupButton>
      </PopupFooter>
    </Popup>
  ))

  .add('PauseRegistry', () => (
    <Popup open="claimFundOpen">
      <PopupTitle>Pause Registry</PopupTitle>
      <PopupContent>
        <ContentLine>
          <LineText>
            When registry is on pause there will be no ability to operate with records
          </LineText>
        </ContentLine>
      </PopupContent>
      <PopupFooter>
        <PopupButton type="cancel">cancel</PopupButton>
        <PopupButton type="confirm">Confirm</PopupButton>
      </PopupFooter>
    </Popup>
  ))

  .add('ResumeRegistry', () => (
    <Popup open="claimFundOpen">
      <PopupTitle>Resume registry</PopupTitle>
      <PopupContent>
        <ContentLine>
          <LineText>Resume registry to operate with records</LineText>
        </ContentLine>
      </PopupContent>
      <PopupFooter>
        <PopupButton type="cancel">cancel</PopupButton>
        <PopupButton type="confirm">Confirm</PopupButton>
      </PopupFooter>
    </Popup>
  ))

  .add('DeleteRegistry', () => (
    <Popup open="claimFundOpen">
      <PopupTitle>Delete registry</PopupTitle>
      <PopupContent>
        <ContentLine>
          <LineText>
            Your registry will be unlinked from Chaingear, but you still will be able to operate
            with it
          </LineText>
        </ContentLine>
      </PopupContent>
      <PopupFooter>
        <PopupButton type="cancel">cancel</PopupButton>
        <PopupButton type="confirm">Confirm</PopupButton>
      </PopupFooter>
    </Popup>
  ))

  .add('EditRecord', () => (
    <Popup open="claimFundOpen">
      <PopupTitle>Edit record</PopupTitle>
      <PopupContent>
        <ContentLineTextInput>
          <LineTitle>Name:</LineTitle>
          <LineControl>
            <WideInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Address:</LineTitle>
          <LineControl>
            <WideInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Developer:</LineTitle>
          <LineControl>
            <WideInput />
          </LineControl>
        </ContentLineTextInput>
      </PopupContent>
      <PopupFooter>
        <PopupButton type="cancel">cancel</PopupButton>
        <PopupButton type="confirm">Confirm</PopupButton>
      </PopupFooter>
    </Popup>
  ))

  .add('ClaimRegistryFunds', () => (
    <Popup open="claimFundOpen">
      <PopupTitle>Claim registry funds</PopupTitle>
      <PopupContent>
        <ContentLineTextInput>
          <LineTitle>Availiable to claim:</LineTitle>
          <LineControl>
            <LineText>5.00 ETH</LineText>
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Claim amount:</LineTitle>
          <LineControl>
            <WideInput placeholder="0.00 ETH" />
          </LineControl>
        </ContentLineTextInput>
      </PopupContent>
      <PopupFooter>
        <PopupButton type="cancel">cancel</PopupButton>
        <PopupButton type="confirm">Confirm</PopupButton>
      </PopupFooter>
    </Popup>
  ))

  .add('TransferRegistryOwnership', () => (
    <Popup open="claimFundOpen">
      <PopupTitle>Transfer registry ownership</PopupTitle>
      <PopupContent>
        <ContentLineTextInput>
          <LineTitle>Current owner:</LineTitle>
          <LineControl>
            <LinkHash noCopy noPadding value="0x000F3754f028c704FDCe4e8ab9aAdba220f39618" />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>New owner:</LineTitle>
          <LineControl>
            <WideInput />
          </LineControl>
        </ContentLineTextInput>
      </PopupContent>
      <PopupFooter>
        <PopupButton type="cancel">cancel</PopupButton>
        <PopupButton type="confirm">Confirm</PopupButton>
      </PopupFooter>
    </Popup>
  ))

  .add('TransferOwnership', () => (
    <Popup open="claimFundOpen">
      <PopupTitle>Transfer registry ownership</PopupTitle>
      <PopupContent>
        <ContentLineTextInput>
          <LineTitle>Current owner:</LineTitle>
          <LineControl>
            <LinkHash noCopy noPadding value="0x000F3754f028c704FDCe4e8ab9aAdba220f39618" />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>New owner:</LineTitle>
          <LineControl>
            <WideInput />
          </LineControl>
        </ContentLineTextInput>
      </PopupContent>
      <PopupFooter>
        <PopupButton type="cancel">Confirm</PopupButton>
        <PopupButton type="reject">Reject</PopupButton>
      </PopupFooter>
    </Popup>
  ))

  .add('DeleteRecord', () => (
    <Popup type="delete" open="claimFundOpen">
      <PopupTitle>Delete record</PopupTitle>
      <PopupFooter>
        <PopupButton type="cancel">Confirm</PopupButton>
        <PopupButton type="reject">Reject</PopupButton>
      </PopupFooter>
    </Popup>
  ))

  .add('EditRecord', () => (
    <Popup open="claimFundOpen">
      <PopupTitle>Edit record</PopupTitle>
      <PopupContent>
        <ContentLineTextInput>
          <LineTitle>Header 1</LineTitle>
          <LineControl>
            <WideInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Header 2</LineTitle>
          <LineControl>
            <WideInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Header 3</LineTitle>
          <LineControl>
            <WideInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Header 4</LineTitle>
          <LineControl>
            <WideInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Header 5</LineTitle>
          <LineControl>
            <WideInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Header 6</LineTitle>
          <LineControl>
            <WideInput />
          </LineControl>
        </ContentLineTextInput>
      </PopupContent>
      <PopupFooter>
        <PopupButton type="cancel">Confirm</PopupButton>
        <PopupButton type="reject">Reject</PopupButton>
      </PopupFooter>
    </Popup>
  ))

  .add('PopupProgrssBar_2', () => (
    <PopupBar>
      <LineText>To operate with records, please, define schema</LineText>
      <PopupBarFooter>
        <PopupBarButton>complete step</PopupBarButton>
      </PopupBarFooter>
    </PopupBar>
  ))

  .add('PopupProgrssBar_3', () => (
    <PopupBar>
      <LineText>To prevent lose of code, please, save ABI</LineText>
      <PopupBarFooter>
        <PopupBarButton>complete step</PopupBarButton>
      </PopupBarFooter>
    </PopupBar>
  ))

  .add('PopupSkillBar', () => (
    <PopupSkillBar>
      <LineText>600000 of 1000000 left (60%) </LineText>
    </PopupSkillBar>
  ))

  .add('PopupNotification', () => (
      <PopupNotification open='claimFundOpen'>
          <PopupContent>
              <ContentLineFund>
                  <Status type='successfully'>
                      Successfully linked
                  </Status>
              </ContentLineFund>
          </PopupContent>
          <PopupBarFooter>
              <PopupNotificationButton>see results</PopupNotificationButton>
          </PopupBarFooter>
      </PopupNotification>

  ))

  .add('PopupNotification_Error', () => (
    <PopupNotification open="claimFundOpen" type="error">
      <Status type="error">
        Link error
      </Status>
    </PopupNotification>
  ));
