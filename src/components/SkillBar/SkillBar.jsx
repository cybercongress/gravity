import * as React from 'react';
import styles from './SkillBar.css';
//import cx from 'classnames';

export const SkillBar = (props) => {
  return (
      <div className={ styles.progressBar}>
        <div className={styles.filler} style={{ width: `${props.value}%` }} />
      </div>
    )
};