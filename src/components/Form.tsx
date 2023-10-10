import React, {Component} from 'react';

type FormProps = {}

type FormState = {
  text: string,
}

class Form extends Component<FormProps, FormState> {
  protected textInputRef: React.RefObject<HTMLInputElement>;

  private formStyle: React.CSSProperties = {
    width: '300px',
    marginTop: '20px',
  }

  private inputStyle: React.CSSProperties = {
    width: '100%',
    height: '50px',
    border: '1px solid #000',
    borderRadius: '20px',
    padding: '15px',
    boxSizing: 'border-box'
  }

  constructor(props: FormProps) {
    super(props);
    this.state = {
      text: ''
    }
    this.textInputRef = React.createRef();
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    this.textInputRef?.current?.focus();
    console.log('Form did mount');
  }

  componentDidUpdate() {
    console.log('Form did update');
  }

  componentWillUnmount() {
    console.log('Form will unmount');
  }

  changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <form style={this.formStyle}>
        <input
          type='text'
          placeholder='Напиши что-нибудь'
          onChange={this.changeHandler}
          ref={this.textInputRef}
          style={this.inputStyle}
        />
      </form>
    );
  }
}

export default Form;