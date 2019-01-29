import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
// import { connect } from 'react-redux';

// import * as actions from '../../redux/settings';
import {
    Button,
    Input,
    MainContainer,
    FlexContainer,
    FlexContainerLeft,
    FlexContainerRight,
    Section,
    SectionContent,
    Control,
    PageTitle,
    FormControl,
} from '../..';
import { SettingsIndicator } from '../Indicator/Indicator';
import Application from '../Application/Application';

class Settings extends Component {
    render() {
        const {
            IPFS_END_POINT,
            PARITY_END_POINT,
            CYBERD_END_POINT,
            CYBERD_WS_END_POINT,

            ipfsStatus,
            parityStatus,
            cyberdStatus,

            resetAllSettings,
            ipfsWriteUrl,
        } = this.props;

        return (
            <MainContainer>
                <PageTitle>Settings</PageTitle>
                <Section>
                    <SectionContent title='CONNECTION' grow={ 3 }>
                        <FormControl blockRow flex_basis_auto>
                            <Control title='IPFS read:'>
                                <div style={ { width: '200px' } }>
                                    <Input
                                      inputRef={ node => (this.ipfsInput = node) }
                                      defaultValue={ IPFS_END_POINT }
                                    />
                                </div>

                                <Button
                                  color='blue'
                                  style={ { height: '30px' } }
                                  onClick={ this.updateIPFS }
                                >
                                    update
                                </Button>
                            </Control>
                            <Control title='IPFS write:'>
                                <div style={ { width: '200px' } }>
                                    <Input
                                      inputRef={ node => (this.ipfsWriteInput = node) }
                                      defaultValue={ ipfsWriteUrl }
                                    />
                                </div>
                                <Button
                                  color='blue'
                                  style={ { height: '30px' } }
                                  onClick={ this.updateIpfsWrite }
                                >
                                    update
                                </Button>
                            </Control>
                        </FormControl>

                        <FormControl blockRow flex_basis_auto>
                            <Control title='ETH node:'>
                                <div style={ { width: '200px' } }>
                                    <Input
                                      inputRef={ node => (this.ethInput = node) }
                                      defaultValue={ PARITY_END_POINT }
                                    />
                                </div>
                                <Button
                                  color='blue'
                                  style={ { height: '30px' } }
                                  onClick={ this.setEthCustom }
                                >
                                    update
                                </Button>
                            </Control>
                            <Control noText style={ { marginTop: 10 } }>
                                <Button
                                  color='blue'
                                  style={ { height: '30px' } }
                                  onClick={ this.setEthMain }
                                >
                                    Main
                                </Button>
                                <Button
                                  color='blue'
                                  style={ { height: '30px' } }
                                  onClick={ this.setEthRinkeby }
                                >
                                    Rikenby
                                </Button>
                                <Button
                                  color='blue'
                                  style={ { height: '30px' } }
                                  onClick={ this.setEthKovan }
                                >
                                    Kovan
                                </Button>
                            </Control>
                        </FormControl>

                        <FormControl blockRow flex_basis_auto>
                            <Control title='cyberd node:'>
                                <div style={ { width: '200px' } }>
                                    <Input
                                      inputRef={ node => (this.cyberdInput = node) }
                                      defaultValue={ CYBERD_END_POINT }
                                    />
                                </div>
                                <Button
                                  color='blue'
                                  style={ { height: '30px' } }
                                  onClick={ this.updateCyberd }
                                >
                                    update
                                </Button>
                            </Control>
                            <Control title='cyberd ws:'>
                                <div style={ { width: '200px' } }>
                                    <Input
                                      inputRef={ node => (this.cyberdWSInput = node) }
                                      defaultValue={ CYBERD_WS_END_POINT }
                                    />
                                </div>
                                <Button
                                  color='blue'
                                  style={ { height: '30px' } }
                                  onClick={ this.updateCyberdWS }
                                >
                                    update
                                </Button>
                            </Control>
                        </FormControl>
                    </SectionContent>
                    <SectionContent flex direction='column' title='STATUS'>
                        <FormControl blockRow>
                            <SettingsIndicator status={ ipfsStatus } />
                        </FormControl>
                        <FormControl blockRow>
                            <SettingsIndicator status={ parityStatus } />
                        </FormControl>
                        <FormControl blockRow>
                            <SettingsIndicator status={ cyberdStatus } />
                        </FormControl>
                    </SectionContent>
                </Section>

                <FlexContainer>
                    <FlexContainerLeft>
                        <Button color='greenyellow' dura='rr.cyb'>
                            CYB ROOT REGISTRY
                        </Button>
                    </FlexContainerLeft>
                    <FlexContainerRight style={{paddingRight: 20}}>
                        <Button color='blue' onClick={ resetAllSettings }>
                            RESET SETTINGS
                        </Button>
                    </FlexContainerRight>
                </FlexContainer>
            </MainContainer>
        );
    }
}

storiesOf('cyb/pages/Settings', module).add('Settings', () => (
    <Application>
        <Settings
            IPFS_END_POINT
            PARITY_END_POINT
            CYBERD_END_POINT
            CYBERD_WS_END_POINT
            ipfsStatus='local'
            parityStatus='fail'
            cyberdStatus
            resetAllSettings
            ipfsWriteUrl
        />
    </Application>
    
));
