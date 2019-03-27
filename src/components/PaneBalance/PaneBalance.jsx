import React, { Component } from 'react';

export class PaneBalance extends React.Component {
    state = {
        iconCopy: false,
    };

    handleiconCopy() {
        this.setState({ iconCopy: !this.state.iconCopy });
    }

    render() {
        const { children } = this.props;

        return (
            <Pane
              onMouseEnter={ () => this.handleiconCopy() }
              onMouseLeave={ () => this.handleiconCopy() }
              { ...this.props }
            >
                {children}
                {this.state.iconCopy && (
                    <Pane top={ -20 } right={ -7 } position='absolute'>
                        <IconButton appearance='minimal' icon='duplicate' />
                    </Pane>
                )}
            </Pane>
        );
    }
}