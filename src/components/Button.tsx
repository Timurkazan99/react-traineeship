import React, {Component} from 'react';

type ButtonProps = {
  show: boolean,
  clickHandler: React.MouseEventHandler<HTMLButtonElement>
}

class Button extends Component<ButtonProps> {

  private style: React.CSSProperties = {
    width: '300px',
    height: '50px',
    border: '1px solid #000',
    borderRadius: '20px',
    cursor: 'pointer'
  }

  static defaultProps = {
    show: true
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
    const text = this.props.show ? 'Скрыть' : 'Показать';
    return (
      <button
        style={this.style}
        onClick={this.props.clickHandler}
      >
        {text}
      </button>
    );
  }
}

export default Button;

