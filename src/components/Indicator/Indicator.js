import React from 'react';
import cx from 'classnames';
// import './Indicator.css';
const styles = require('./Indicator.css');

const Indicator = ({ children }) => {
    const style = {
        background: '#fff',
    };

    if (status) {
        style.background = status === 'fail' ? '#d0021b' : status === 'local' ? '#7ed321' : '#f8e71c';
    }

    return (
        <span style={ style } className={styles.indicator}>{children}</span>
    );
};

export const SettingsIndicator = ({ status }) => {
    // const style = {
    //     background: '#fff',
    // };

    // if (status) {
    //     // style.background = status === 'fail' ? '#d0021b' : status === 'local' ? '#7ed321' : '#f8e71c';
    // }

    let placeholder;

    switch (status) {
    case 'local': {
        placeholder = 'Local';
        break;
    }
    case 'remote': {
        placeholder = 'Remote';
        break;
    }
    case 'fail': {
        placeholder = 'No connection';
        break;
    }
    default: {
        placeholder = 'Unknown';
    }
    }

    return (
        <span className={ cx(styles.settings_indicator, {
                    [styles.statusFail]: status === 'fail',
                    [styles.statusLocal]: status === 'local',
                })
            }
        >
            {placeholder}
        </span>
    );
};

export const StatusContainer = ({ children }) => (
    <div className={styles.StatusContainer}>
        {children}
    </div>
);

export default Indicator;
