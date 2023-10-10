import React, {Component} from 'react';
import Button from "./components/Button";
import Form from "./components/Form";

type AppProps = {}

type AppState = {
  show: boolean
}

class App extends Component<AppProps, AppState> {

  private style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }

  constructor(props: AppProps) {
    super(props);
    this.state = {
      show: false
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    console.log('App did mount');
  }

  componentDidUpdate() {
    console.log('App did update');
  }

  componentWillUnmount() {
    console.log('App will unmount');
  }

  clickHandler() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div style={this.style}>
        <Button show={this.state.show} clickHandler={this.clickHandler}/>
        { this.state.show && <Form /> }
      </div>
    )
  }
}

export default App;
