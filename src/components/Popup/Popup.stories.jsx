import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import {
    LinkHash,
    Input,
    Button,
    Text,

    ContentLine,
    ContentLineTextInput,
    LineControl,
    LineTitle,
    ContentLineFund,

    Popup,
    PopupSkillBar,
    PopupNotification,
    PopupTitle,
    PopupContent,
    PopupFooter,
    PopupBar,
    PopupBarFooter,

    Status
} from '../..';



storiesOf('Elements/Popup', module)
    .addDecorator(centered)
    .add('FundRegistry', () => (
        <Popup open='claimFundOpen'>
            <PopupTitle>Fund registry</PopupTitle>
            <PopupContent>
                <ContentLineFund>
                    <LineTitle>Amount:</LineTitle>
                    <LineControl>
                        <Input />
                    </LineControl>
                </ContentLineFund>
            </PopupContent>
            <PopupFooter>
                <Button style={ { marginRight: '20px' } } color='cancel'>
                    cancel
                </Button>
                <Button color='green'>Confirm</Button>
            </PopupFooter>
        </Popup>
    ))

    .add('PauseRegistry', () => (
        <Popup open='claimFundOpen'>
            <PopupTitle>Pause Registry</PopupTitle>
            <PopupContent>
                <ContentLine>
                    <Text lineheight='true'>
                        When registry is on pause there will be no ability to operate with records
                    </Text>
                </ContentLine>
            </PopupContent>
            <PopupFooter>
                <Button style={ { marginRight: '20px' } } color='cancel'>
                    cancel
                </Button>
                <Button color='green'>Confirm</Button>
            </PopupFooter>
        </Popup>
    ))

    .add('ResumeRegistry', () => (
        <Popup open='claimFundOpen'>
            <PopupTitle>Resume registry</PopupTitle>
            <PopupContent>
                <ContentLine>
                    <Text lineheight='true'>Resume registry to operate with records</Text>
                </ContentLine>
            </PopupContent>
            <PopupFooter>
                <Button style={ { marginRight: '20px' } } color='cancel'>
                    cancel
                </Button>
                <Button color='green'>Confirm</Button>
            </PopupFooter>
        </Popup>
    ))

    .add('DeleteRegistry', () => (
        <Popup open='claimFundOpen'>
            <PopupTitle>Delete registry</PopupTitle>
            <PopupContent>
                <ContentLine>
                    <Text lineheight='true'>
                        Your registry will be unlinked from Chaingear, but you still will be able to
                        operate with it
                    </Text>
                </ContentLine>
            </PopupContent>
            <PopupFooter>
                <Button style={ { marginRight: '20px' } } color='cancel'>
                    cancel
                </Button>
                <Button color='green'>Confirm</Button>
            </PopupFooter>
        </Popup>
    ))

    .add('EditRecord_v1', () => (
        <Popup open='claimFundOpen'>
            <PopupTitle>Edit record</PopupTitle>
            <PopupContent>
                <ContentLineTextInput>
                    <LineTitle>Name:</LineTitle>
                    <LineControl>
                        <Input />
                    </LineControl>
                </ContentLineTextInput>
                <ContentLineTextInput>
                    <LineTitle>Address:</LineTitle>
                    <LineControl>
                        <Input />
                    </LineControl>
                </ContentLineTextInput>
                <ContentLineTextInput>
                    <LineTitle>Developer:</LineTitle>
                    <LineControl>
                        <Input />
                    </LineControl>
                </ContentLineTextInput>
            </PopupContent>
            <PopupFooter>
                <Button style={ { marginRight: '20px' } } color='cancel'>
                    cancel
                </Button>
                <Button color='green'>Confirm</Button>
            </PopupFooter>
        </Popup>
    ))

    .add('ClaimRegistryFunds', () => (
        <Popup open='claimFundOpen'>
            <PopupTitle>Claim registry funds</PopupTitle>
            <PopupContent>
                <ContentLineTextInput>
                    <LineTitle>Availiable to claim:</LineTitle>
                    <LineControl>
                        <Text>5.00 ETH</Text>
                    </LineControl>
                </ContentLineTextInput>
                <ContentLineTextInput>
                    <LineTitle>Claim amount:</LineTitle>
                    <LineControl>
                        <Input placeholder='0.00 ETH' />
                    </LineControl>
                </ContentLineTextInput>
            </PopupContent>
            <PopupFooter>
                <Button style={ { marginRight: '20px' } } color='cancel'>
                    cancel
                </Button>
                <Button color='green'>Confirm</Button>
            </PopupFooter>
        </Popup>
    ))

    .add('TransferRegistryOwnership', () => (
        <Popup open='claimFundOpen'>
            <PopupTitle>Transfer registry ownership</PopupTitle>
            <PopupContent>
                <ContentLineTextInput>
                    <LineTitle>Current owner:</LineTitle>
                    <LineControl>
                        <LinkHash
                          noCopy
                          noPadding
                          value='0x000F3754f028c704FDCe4e8ab9aAdba220f39618'
                        />
                    </LineControl>
                </ContentLineTextInput>
                <ContentLineTextInput>
                    <LineTitle>New owner:</LineTitle>
                    <LineControl>
                        <Input />
                    </LineControl>
                </ContentLineTextInput>
            </PopupContent>
            <PopupFooter>
                <Button style={ { marginRight: '20px' } } color='cancel'>
                    cancel
                </Button>
                <Button color='green'>Confirm</Button>
            </PopupFooter>
        </Popup>
    ))

    .add('TransferOwnership', () => (
        <Popup open='claimFundOpen'>
            <PopupTitle>Transfer registry ownership</PopupTitle>
            <PopupContent>
                <ContentLineTextInput>
                    <LineTitle>Current owner:</LineTitle>
                    <LineControl>
                        <LinkHash
                          noCopy
                          noPadding
                          value='0x000F3754f028c704FDCe4e8ab9aAdba220f39618'
                        />
                    </LineControl>
                </ContentLineTextInput>
                <ContentLineTextInput>
                    <LineTitle>New owner:</LineTitle>
                    <LineControl>
                        <Input />
                    </LineControl>
                </ContentLineTextInput>
            </PopupContent>
            <PopupFooter>
                <Button style={ { marginRight: '20px' } } color='cancel'>
                    Confirm
                </Button>
                <Button color='red'>Reject</Button>
            </PopupFooter>
        </Popup>
    ))

    .add('DeleteRecord', () => (
        <Popup type='delete' open='claimFundOpen'>
            <PopupTitle>Delete record</PopupTitle>
            <PopupFooter>
                <Button style={ { marginRight: '20px' } } color='cancel'>
                    Confirm
                </Button>
                <Button color='red'>Reject</Button>
            </PopupFooter>
        </Popup>
    ))

    .add('EditRecord', () => (
        <Popup open='claimFundOpen'>
            <PopupTitle>Edit record</PopupTitle>
            <PopupContent>
                <ContentLineTextInput>
                    <LineTitle>Header 1</LineTitle>
                    <LineControl>
                        <Input />
                    </LineControl>
                </ContentLineTextInput>
                <ContentLineTextInput>
                    <LineTitle>Header 2</LineTitle>
                    <LineControl>
                        <Input />
                    </LineControl>
                </ContentLineTextInput>
                <ContentLineTextInput>
                    <LineTitle>Header 3</LineTitle>
                    <LineControl>
                        <Input />
                    </LineControl>
                </ContentLineTextInput>
                <ContentLineTextInput>
                    <LineTitle>Header 4</LineTitle>
                    <LineControl>
                        <Input />
                    </LineControl>
                </ContentLineTextInput>
                <ContentLineTextInput>
                    <LineTitle>Header 5</LineTitle>
                    <LineControl>
                        <Input />
                    </LineControl>
                </ContentLineTextInput>
                <ContentLineTextInput>
                    <LineTitle>Header 6</LineTitle>
                    <LineControl>
                        <Input />
                    </LineControl>
                </ContentLineTextInput>
            </PopupContent>
            <PopupFooter>
                <Button style={ { marginRight: '20px' } } color='cancel'>
                    Confirm
                </Button>
                <Button color='red'>Reject</Button>
            </PopupFooter>
        </Popup>
    ))

    .add('PopupProgrssBar_2', () => (
        <PopupBar>
            <Text lineheight='true'>To operate with records, please, define schema</Text>
            <PopupBarFooter>
                <Button transparent='true' style={ { color: '#b00020' } }>
                    complete step
                </Button>
            </PopupBarFooter>
        </PopupBar>
    ))

    .add('PopupProgrssBar_3', () => (
        <PopupBar>
            <Text lineheight='true'>To prevent lose of code, please, save ABI</Text>
            <PopupBarFooter>
                <Button transparent='true' style={ { color: '#b00020' } }>
                    complete step
                </Button>
            </PopupBarFooter>
        </PopupBar>
    ))

    .add('PopupSkillBar', () => (
        <PopupSkillBar>
            <Text style={ { color: '#ffffff' } }>600000 of 1000000 left (60%) </Text>
        </PopupSkillBar>
    ))

    .add('PopupNotification', () => (
        <Popup type='notification' onClose open='claimFundOpen'>
            <PopupContent>
                <ContentLineFund>
                    <Status type='successfully'>Successfully linked</Status>
                </ContentLineFund>
            </PopupContent>
            <PopupBarFooter>
                <Button transparent='true' style={ { color: '#4a90e2', marginRight: '10px' } }>
                    see results
                </Button>
            </PopupBarFooter>
        </Popup>
    ))

    .add('PopupNotification_Error', () => (
        <Popup open='claimFundOpen' onClose type='notification-error'>
            <Status type='error'>Link error</Status>
        </Popup>
    ));
