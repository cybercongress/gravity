import * as React from 'react';
import cx from 'classnames';
import ClickOutside from 'react-click-outside';

const styles = require('./DbMenuPoints.less');

export class DbMenuPoints extends React.Component {
    state = {
        open: false,
    };

    onClick = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    onClickOutside = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        const { open } = this.state;
        const less = cx(styles.dbMenuPoints, { [styles.dbMenuPointsOpen]: open });

        return (
            <div className={ styles.dbMenuP }>
                <ClickOutside onClickOutside={ this.onClickOutside }>
                    <button
                      onClick={ this.onClick }
                      className={ cx(styles.dbMenuPointsButton, {
                          [styles.dbMenuPointsButtonTriangle]: open,
                      }) }
                    />
                </ClickOutside>
                <div className={ less }>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
