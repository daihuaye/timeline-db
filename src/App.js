import React, { Component } from 'react';
import './App.css';
import Timeline from './timeline/Timeline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Timeline :)</h1>
        <Timeline />
      </div>
    );
  }
}

export default App;
