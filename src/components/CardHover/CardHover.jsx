import React, { Component } from 'react';

import { 
    Card,
} from 'evergreen-ui';

export class CardHover extends React.Component {
    state = {
        hover: false,
    };

    handleHover() {
        this.setState({ hover: !this.state.hover });
    }

    seeAll = () => {
        this.setState({
            seeAll: !this.state.seeAll,
        });
    };
    
    render(){
        const {
            children,
            indexV2,
        } = this.props;
        return(
            <Card
                boxShadow={ this.state.hover ? '0 0 40px 2px #36d6ae' : indexV2 ? '0 0 10px 1px #36d6ae' : '' }
                onMouseEnter={ () => this.handleHover() }
                onMouseLeave={ () => this.handleHover() }
                {...this.props}
            >
                {children}
            </Card>
        )
    }
}