import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { LinkHash } from '../..';
import {
  ContentLine,
  ContentLineTextInput,
  LineControl,
  ContentInput,
  LineTitle,
  LineText,
  ContentLineFund,
} from '../PopupContent/PopupContent';
import { Popup, Buttun, PopupBarButtun, PopupTitle, PopupContent, PopupFooter, PopupBar,PopupBarFooter } from './Popup';

storiesOf('Popup', module)
  .addDecorator(centered)
  .add('FundRegistry', () => (
    <Popup open="claimFundOpen">
      <PopupTitle>Fund registry</PopupTitle>
      <PopupContent>
        <ContentLineFund>
          <LineTitle>Amount:</LineTitle>
          <LineControl>
            <ContentInput />
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
            <ContentInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Address:</LineTitle>
          <LineControl>
            <ContentInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Developer:</LineTitle>
          <LineControl>
            <ContentInput />
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
            <ContentInput placeholder="0.00 ETH" />
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
            <ContentInput />
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
            <ContentInput />
          </LineControl>
        </ContentLineTextInput>
      </PopupContent>
      <PopupFooter>
        <PopupButtun type="cansel">Confirm</PopupButtun>
        <PopupButtun type="reject">Reject</PopupButtun>
      </PopupFooter>
    </Popup>
  ))

  .add('DeleteRecord', () => (
    <Popup type="delete" open="claimFundOpen">
      <PopupTitle>Delete record</PopupTitle>
      <PopupFooter>
        <PopupButtun type="cansel">Confirm</PopupButtun>
        <PopupButtun type="reject">Reject</PopupButtun>
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
            <ContentInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Header 2</LineTitle>
          <LineControl>
            <ContentInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Header 3</LineTitle>
          <LineControl>
            <ContentInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Header 4</LineTitle>
          <LineControl>
            <ContentInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Header 5</LineTitle>
          <LineControl>
            <ContentInput />
          </LineControl>
        </ContentLineTextInput>
        <ContentLineTextInput>
          <LineTitle>Header 6</LineTitle>
          <LineControl>
            <ContentInput />
          </LineControl>
        </ContentLineTextInput>
      </PopupContent>
      <PopupFooter>
        <PopupButtun type="cansel">Confirm</PopupButtun>
        <PopupButtun type="reject">Reject</PopupButtun>
      </PopupFooter>
    </Popup>
  ))

  .add('PopupProgrssBar_2', () => (
    <PopupBar>
      <LineText>To operate with records, please, define schema</LineText>
      <PopupBarFooter>
        <PopupBarButtun>complete step</PopupBarButtun>
      </PopupBarFooter>
    </PopupBar>
  ))

  .add('PopupProgrssBar_3', () => (
    <PopupBar>
      <LineText>To prevent lose of code, please, save ABI</LineText>
      <PopupBarFooter>
        <PopupBarButtun>complete step</PopupBarButtun>
      </PopupBarFooter>
    </PopupBar>
  ))
