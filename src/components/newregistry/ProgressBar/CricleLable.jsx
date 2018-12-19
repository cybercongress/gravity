import * as React from 'react';
import styles from './ProgressBar.css';

// const NumberText = [
//   {
//     id: 1,
//     number: '1',
//     text: 'Registry initialization',
//   },
//   {
//     id: 2,
//     number: '2',
//     text: 'Schema definition',
//   },
//   {
//     id: 3,
//     number: '3',
//     text: 'Contract code saving',
//   },
// ];

export default class CircleLable extends React.Component {
  constructor(props) {
    super(props);
    self = this;
    this.state = {
      visible: true // visible: false | color swap add circle
    };
  }

  render() {
    return (
      <div key={self.props.number} className={styles.NumberText}>
        <div className={self.state.visible ? styles.circle : styles.done}>
          <span className={self.state.visible ? styles.label : styles.doneGreen}>
            {self.props.number}
          </span>
        </div>
        <span className={styles.title}>{self.props.text}</span>
      </div>
    );
  }
}
