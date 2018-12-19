import * as React from 'react';
const styles = require('./WideInput.css');

export default class WideInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: '',
      valid: true,
    };
  }

  handleUserInput(e) {
    this.setState({
      data: e.target.value,
    });
  }

  handleValidation(data) {
    let error = true;
    if (data.match('^[a-zA-Z ]*$') != null) {
      error = false;
    }
    return error;
  }

  render() {
    const { data } = this.state;
    return (
      <input onChange={e => this.handleUserInput(e)} value={data} className={styles.wideInput} />
    );
  }
}

// export const WideInput = ({ children, inputRef, ...props }) => (
//   <input {...props} ref={inputRef} className={styles.wideInput} />
// );

export const WideSelect = ({ children, inputRef, ...props }) => (
    <select {...props} ref={inputRef} className={styles.wideInput}>
        {children}
    </select>
);
