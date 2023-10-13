import React, {Component} from 'react';

type ButtonProps = {
  show?: boolean,
  clickHandler: React.MouseEventHandler<HTMLButtonElement>,
  title: string,
  altTitle?: string,
}

class Button extends Component<ButtonProps> {

  static defaultProps = {
    show: true,
  };

  componentDidMount() {
    console.log('Button did mount');
  }

  componentDidUpdate() {
    console.log('Button did update');
  }

  componentWillUnmount() {
    console.log('Button will unmount');
  }

  render() {
    const text = this.props.show ? this.props.title : this.props.altTitle;
    return (
      <button
        className='button'
        onClick={this.props.clickHandler}
      >
        {text}
      </button>
    );
  }
}

export default Button;

