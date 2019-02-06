import * as React from 'react';
import cx from 'classnames';
import ClickOutside from 'react-click-outside';

const styles = require('./DbMenu.less');

export class DbMenu extends React.Component {
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
        const less = cx(styles.dbMenuPopup, { [styles.dbMenuPopupOpen]: open });

        return (
            <div className={ styles.dbMenu }>
                <ClickOutside onClickOutside={ this.onClickOutside }>
                    <button
                      onClick={ this.onClick }
                      className={
                          cx(styles.dbMenuButton, {
                              [styles.dbMenuButtonTriangle]: open,
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
