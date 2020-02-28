import * as React from 'react';
import cx from 'classnames';
import { CybLink } from '../..';

const styles = require('./button.less');

export const AddNewRecordButton = ({ children, ...props }) => (
    <button className={ styles.AddNewRecordButton } { ...props }>
        <span>{children}<i /></span>

    </button>
);

export const FooterButton = props => (
    <CybLink {...props} className={styles.footerButton} />
);
// export const ButtonIcon = ({children, ...props}) => (
//   <i {...props} className={cx(styles.BttnIcon, styles.BttnIconAdd)}>
//       {children}
//   </i>
// );

export const Button = ({
    children,
    to,
    color,
    transformtext,
    disabled,
    transparent,
    sizeSm,
    outline,
    dura,
    ...props
}) => {
    const durl = to || dura;

    if (durl) {
        return (
            <CybLink
              dura={dura}
                { ...props }
                className={ cx(styles.ActionLink, {
                    [styles.ButtonCancel]: color === 'cancel',
                    [styles.ButtonGreen]: color === 'green',
                    [styles.ButtonRed]: color === 'red',
                    [styles.ButtonBlue]: color === 'blue',
                    [styles.ButtonGreenYellow]: color === 'greenyellow',
                    [styles.ButtonOrange]: color === 'ogange',
                    [styles.ButtonTurquoise]: color === 'turquoise',
                    [styles.ButtonOutline]: outline,
                    [styles.ButtonSize]: sizeSm,
                    [styles.TextTransform]: transformtext,
                    [styles.Disabled]: disabled,
                }) }
            >
                {children}
            </CybLink>
        )
    }
    return (
        <button
          { ...props }
          className={ cx(styles.Button, {
                [styles.ButtonCancel]: color === 'cancel',
                [styles.ButtonGreen]: color === 'green',
                [styles.ButtonRed]: color === 'red',
                [styles.ButtonBlue]: color === 'blue',
                [styles.ButtonGreenYellow]: color === 'greenyellow',
                [styles.ButtonOrange]: color === 'ogange',
                [styles.ButtonTurquoise]: color === 'turquoise',
                [styles.ButtonOutline]: outline,
                [styles.ButtonSize]: sizeSm,
                [styles.TextTransform]: transformtext,
                [styles.Transparent]: transparent,
                [styles.Disabled]: disabled,
            }) }
        >
            {children}
        </button>
    );
};
