import * as React from 'react';
import styles from './ProgressBar.less';

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

// class CircleLable extends React.Component {
//   constructor(props) {
//     super(props);
//     self = this;
//     this.state = {
//       visible: true, // visible: false | color swap add circle
//     };
//   }

//   render() {
//     const CircleLableTemplate = this.props.data.map(item => (
//       <div key={item.id} className={styles.NumberText}>
//         <div className={self.state.visible ? styles.circle : styles.done}>
//           <span className={self.state.visible ? styles.label : styles.doneGreen}>
//             {item.number}
//           </span>
//         </div>
//         <span className={styles.title}>{item.text}</span>
//       </div>
//     ));

//     return <div className={styles.progress}>{CircleLableTemplate}</div>;
//   }
// }
// export const CircleLable = this.props.data.map(function(items){
//     <div key={items.id}>
//         <div className={styles.circle}>
//             <span className={styles.label}>{items.number}</span>
//         </div>
//         <span className={styles.title}>{items.text}</span>
//     </div>
//     return(
//         <div className="qwe">
//         {CircleLable}
//       </div>
//     )
//  });
export const ProgressBar = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.progress}>
      {children}
    </div>
  </div>
);
