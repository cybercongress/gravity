import * as React from 'react';
const styles = require('./WideInput.css');

class WideInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      valid: true, //false error message
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
      <div className={styles.inutText}>
        <input
          onChange={e => this.handleUserInput(e)}
          {...this.props}
          value={data}
          className={this.state.valid ? styles.wideInput : styles.wideInputError}
        />
        <span className={this.state.valid ? styles.textErrorDisplayNone : styles.textError}>
          letters,digits and dash only
        </span>
      </div>
    );
  }
}
export default WideInput;

// export const WideInput = ({ children, inputRef, ...props }) => (
//   <input {...props} ref={inputRef} className={styles.wideInput} />
// );

export const WideSelect = ({ children, inputRef, ...props }) => (
  <select {...props} ref={inputRef} className={styles.wideInput}>
    {children}
  </select>
);
