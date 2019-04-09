import React, { Component } from 'react';
import './App.css';

import Greeting from './Greeting/Greeting';

class App extends Component {
  state = {
    greeting: 'No greeting for you'
  };
  render() {
    return (
      <>
        <h2>Hello World</h2>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.bye}>Bye</button>
        <Greeting msg={this.state.greeting} />
      </>
    );
  }

  greet = () => {
    this.setState({ greeting: 'Hello Web XVII' });
  };

  bye = () => {
    this.setState({ greeting: 'Bye Web XVII' });
  };
}

export default App;
