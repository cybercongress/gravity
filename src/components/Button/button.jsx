import * as React from 'react';
import cx from 'classnames';
import { Link } from 'react-router';
import { ActionLink } from '../..';

const styles = require('./button.css');

export const AddNewRecordButton = ({ children, ...props }) => (
    <button className={ styles.AddNewRecordButton } { ...props }>
        <span>{children}<i /></span>
        
    </button>
);

export const FooterButton = (props) => (
    <Link {...props} className={styles.footerButton}/>
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
    outline,
    ...props
}) => {
    if (to) {
        return (
            <ActionLink
              { ...props }
              to={ to }
              className={ cx(styles.ActionLink, {
                    [styles.ButtonCancel]: color === 'cancel',
                    [styles.ButtonGreen]: color === 'green',
                    [styles.ButtonRed]: color === 'red',
                    [styles.ButtonBlue]: color === 'blue',
                    [styles.ButtonGreenYellow]: color === 'greenyellow',
                    [styles.ButtonOrange]: color === 'ogange',
                    [styles.ButtonOutline]: outline,
                    [styles.TextTransform]: transformtext,
                    [styles.Disabled]: disabled,
                }) }
            >
                {children}
            </ActionLink>
        );
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
                [styles.ButtonOutline]: outline,
                [styles.TextTransform]: transformtext,
                [styles.Transparent]: transparent,
                [styles.Disabled]: disabled,
            }) }
        >
            {children}
        </button>
    );
};
