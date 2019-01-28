import React from 'react';
import cx from 'classnames';
import classNames from 'classnames';
import { CybLink } from '../..';

const styles = require('./IdBar.css');

const IdBarComponent = ({ children }) => <div className={ styles.id_bar }>{children}</div>;

export const SettingsLink = () => (
    <CybLink dura='settings.cyb' className={ styles.id_bar__settings }>
        Settings
    </CybLink>
);

export const WalletLink = () => (
    <CybLink dura='wallet.cyb' className={ styles.id_bar__wallet }>
        Wallet
    </CybLink>
);

export const CurrentUser = (props) => {
    const {
        defaultEthAccount, open, toggle, favoriteClick, ethBalance, cybBalance,
    } = props;

    return (
        <div className={ styles.user_popup__container }>
            {defaultEthAccount ? (
                <img
                  alt='user'
                  className={ styles.id_bar__user }
                  onClick={ toggle }
                  src={ `https://robohash.org/${defaultEthAccount}` }
                />
            ) : (
                <CybLink dura='wallet.cyb'>
                    <div
                      className={ classNames({
                            [styles.id_bar__user]: true,
                            [styles.id_bar__user__default]: true,
                        }) }
                      onClick={ toggle }
                    />
                </CybLink>
            )}
            {defaultEthAccount && (
                <div className={ cx(styles.user_popup, { [styles.user_popup__open]: open }) }>
                    <div>Username</div>
                    <div className={ styles.id_bar_img_container }>
                        <img
                          alt='user'
                          className={ classNames({
                                [styles.id_bar__user]: true,
                                [styles.id_bar__user__big]: true,
                            }) }
                          src={ `https://robohash.org/${defaultEthAccount}` }
                        />
                    </div>
                    <div>
                        <span className={ styles.tokenName }>
                            {ethBalance}
                            {' '}
ETH
                        </span>
                    </div>
                    <hr className={ styles.separator } />
                    <div>
                        <span className={ styles.tokenName }>
                            {cybBalance}
                            {' '}
CYB
                        </span>
                    </div>
                    <div className={ styles.id_bar_link_container }>
                        <WalletLink />
                        <CybLink dura='history.cyb' className={ styles.id_bar__history }>
                            history
                        </CybLink>
                        <a className={ styles.id_bar__favorite } href='/' onClick={ favoriteClick }>
                            favorite
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IdBarComponent;
