import React, {Component} from 'react';
import Button from "./components/Button";
import Form from "./components/Form";
import List from "./components/List";
import "./style/App.css";

export type Item = {
  text: string,
  uniqId: number,
}

type AppProps = {}

type AppState = {
  show: boolean
  items: Item[]
}

class App extends Component<AppProps, AppState> {

  private textInputRef = React.createRef<HTMLInputElement>();

  constructor(props: AppProps) {
    super(props);
    this.state = {
      show: false,
      items: []
    }

    this.showHandler = this.showHandler.bind(this);
    this.focusHandler = this.focusHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    console.log('App did mount');
  }

  componentDidUpdate() {
    console.log(this.state.items);
    console.log('App did update');
  }

  componentWillUnmount() {
    console.log('App will unmount');
  }

  showHandler() {
    this.setState({ show: !this.state.show });
  }

  focusHandler() {
    this.textInputRef.current?.focus();
  }

  submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    this.setState(({ items }) => ({
      items: [
        ...items,
        { text: String(data.text), uniqId: Date.now() }
      ]}));
  }

  render() {
    return (
      <div className='container'>
        <div>
          <Button
            show={this.state.show}
            clickHandler={this.showHandler}
            title='Показать'
            altTitle='Скрыть'
          />
          { this.state.show && (
            <>
              <Button clickHandler={this.focusHandler} title='Сфокусироваться' />
              <Form textInputRef={this.textInputRef} submitHandler={this.submitHandler}/>
            </>
          ) }
        </div>
        <List items={this.state.items} />
      </div>
    )
  }
}

export default App;
