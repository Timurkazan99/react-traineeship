import React, {Component} from 'react';
import {debounce} from "../utils/debounce";

type FormProps = {
  textInputRef?: React.Ref<HTMLInputElement>;
  submitHandler: React.FormEventHandler<HTMLFormElement>
}

type FormState = {
  text: string,
  disabled: boolean
}

class Form extends Component<FormProps, FormState> {

  constructor(props: FormProps) {
    super(props);
    this.state = {
      text: '',
      disabled: false
    }

    const bindedChangeHandler = this.changeHandler.bind(this);
    this.changeHandler = debounce(bindedChangeHandler, 500);
  }

  componentDidMount() {
    console.log(this.props.textInputRef);
    if (typeof this.props.textInputRef !== 'function') {
      this.props.textInputRef?.current?.focus();
    }

    console.log('Form did mount');
  }

  componentDidUpdate() {
    console.log('Form did update');
  }

  componentWillUnmount() {
    console.log('Form will unmount');
  }

  changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const newText = e.target.value;
    this.setState({ text: newText, disabled: newText === 'реакт' });
  }

  render() {
    return (
      <form className='form' onSubmit={this.props.submitHandler}>
        <input
          className='input'
          type='text'
          name='text'
          placeholder='Напиши что-нибудь'
          onChange={this.changeHandler}
          ref={this.props.textInputRef}
        />
        <input
          className='button'
          type='submit'
          disabled={this.state.disabled}
        />
      </form>
    );
  }
}

export default Form;