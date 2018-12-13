import * as React from 'react';
import styles from '../ProgressBar/ProgressBar.css';

const NumberText =[
    {
        id:1,
        number:'1',
        text:'Registry initialization',
    },
    {
        id:2,
        number:'2',
        text:'Schema definition',
    },
    {
        id:3,
        number:'3',
        text:'Contract code saving',
    }
];

class CircleLable extends React.Component {
    state = {
        visible: false,
      }
     
    render() {
      
      const CircleLableTemplate = this.props.data.map(function(item) {
        return (
            <div key={item.id} className={styles.NumberText}>
            <div className={styles.circle}>
                <span className={styles.label}>{item.number}</span>
            </div>
            <span className={styles.title}>{item.text}</span>
        </div>
        )
      })
      
      return (
        <div className={styles.progress}>
          {CircleLableTemplate}
        </div>
      )
    }
  }
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

class ProgressBar extends React.Component{
    
    render(){
        return(
        <div className={styles.container}>
        <hr/>
        <CircleLable data={NumberText} key></CircleLable>
        {/* <div className={styles.activeCircle}>
            <div className={styles.circle}>
            <span className={styles.label}>1</span>
            </div>
        </div> */}
        
        {/* <div className={styles.progress}> */}

            {/* <div className={styles.circle}>
                <span className={styles.label}>1</span>
            </div>
            <span className={styles.title}>Registry initialization</span>
            <span className={styles.bar} />
            <div className={styles.circle}>
                <span className={styles.label}>2</span>
            </div>
            <span className={styles.title}>Schema definition</span>

            <span className={styles.bar} />
            <div className={styles.done}>
                <span className={styles.label}>3</span>
            </div>
            <span className={styles.title}>Contract code saving</span>
            <span className={styles.bar} /> */}
            
            
        {/* </div> */}
  </div>
        );
    }
}

export default ProgressBar;
