import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { navigate, goBack, canBack } from '../../redux/browser';
import {
    Popover, Button, Pane, TextInput, IconButton, Text,
} from 'evergreen-ui';
import {
    SearchInput,
    BackButton,
    ForwardButton,
    NavigationContainer,
    FavoriteButton,
    FavoriteButtonContainer,
    SearchIcon,
} from '../..';
// import { isFavoritedPage, toggleFavorited } from '../../redux/appMenu';

class Navigation extends Component {
    componentWillReceiveProps(nextProps) {
        if (this.props.dura !== nextProps.dura) {
            this.input.value = nextProps.dura;
        }
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const { value } = this.input;

            this.props.navigate(value);
        }
    };

    render() {
        const { dura, canBack, isFavorited } = this.props;
        const homePage = dura === '';

        const AddNewApp = () => (
            <Pane
              paddingY={ 20 }
              paddingX={ 20 }
              display='flex'
              flexDirection='column'
            >
            <Text display='inline-block' marginBottom={10}>New App</Text>
            <Pane display='flex'>
                <TextInput autoFocus width='100%' defaultValue='New App' />
                <IconButton marginLeft={10} paddingX={6} icon='tick' intent="success" />
            </Pane>
            </Pane>
        );

        const RenameApp = () => (
            <Pane
              paddingY={ 20 }
              paddingX={ 20 }
              display='flex'
              flexDirection='column'
            >
            <Text display='inline-block' marginBottom={6}>Rename App</Text>
            <Pane display='flex'>
                <TextInput autoFocus width='100%' defaultValue={ dura } />
                <IconButton marginLeft={10} paddingX={6} icon='tick' intent="success" />
            </Pane>
            <Button marginTop={20} iconBefore="trash" width='fit-content' intent="danger">Delete App</Button>
            </Pane>
        );

        return (
            <NavigationContainer>
                {!homePage && <BackButton disabled={ !canBack } onClick={ this.props.goBack } />}
                <FavoriteButtonContainer>
                    {!!homePage && <SearchIcon />}
                    <SearchInput
                      textAlign='center'
                      width='100%'
                      height={ 41 }
                      fontSize='35px'
                      inputRef={ (node) => {
                            this.input = node;
                        } }
                      defaultValue={ dura }
                      onKeyPress={ this._handleKeyPress }
                    />
                    {!homePage && (
                        <Popover
                          bringFocusInside
                          content={ isFavorited ? <RenameApp /> : <AddNewApp /> }
                        >
                            <FavoriteButton
                              isFavorited={ isFavorited }
                              onClick={ this.props.toggleFavorited }
                            />
                        </Popover>
                    )}
                </FavoriteButtonContainer>
                {!homePage && <ForwardButton disabled />}
            </NavigationContainer>
        );
    }
}

export default Navigation;

// export default connect(
//     state => ({
//         dura: state.browser.dura,
//         canBack: canBack(state),
//         isFavorited: isFavoritedPage(state),
//     }),
//     {
//         navigate,
//         goBack,
//         toggleFavorited,
//     },
// )(Navigation);
