import * as React from 'react';
import cx from 'classnames';
import { Pane } from 'evergreen-ui';

const styles = require('./Popup.less');

export const Popup = ({ children, open, onClose, ...props }) => (
    <div className={cx(styles.popup, { [styles.popupOpen]: open })}>
        <div className={cx(styles.popupInner, { [styles.popupInnerDelete]: props.type === 'delete',
              [styles.PopupNotification]: props.type === 'notification',
              [styles.PopupNotificationError]: props.type === 'notification-error',
              })}>
            {onClose&&(<div onClick={onClose} className={styles.PopupClose} />)}
            {children}
        </div>
    </div>
);

export const PopupTitle = ({ children }) => <div className={styles.popupTitle}>{children}</div>;

export const PopupContent = ({ children }) => <div className={styles.popupContent}>{children}</div>;

export const PopupFooter = ({ children }) => <div className={styles.popupFooter}>{children}</div>;

export const PopupBar = ({ children }) => (
  <div className={styles.PopupBar}>
      {children}
  </div>
)

export const PopupSkillBar = ({ children }) => (
  <div className={styles.PopupSkillBar}>
      {children}
  </div>
)

export const PopupBarFooter = ({ children }) => (
  <div className={styles.PopupBarFooter}>{children}</div>);

  export class ToolTip extends React.Component {
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

    render() {
        const { content, children } = this.props;

        return (
            <Pane onMouseEnter={ () => this.handleHover() }
            onMouseLeave={ () => this.handleHover() } position='relative' width='100%'>
                <Pane
                  width='100%'
                >
                    {children}
                </Pane>
                {this.state.hover && (
                    <Pane maxWidth={ 300 } {...this.props} position='absolute'>
                        {content}
                    </Pane>
                )}
            </Pane>
        );
    }
}

