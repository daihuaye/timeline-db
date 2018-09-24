import React, { Component } from "react";
import "./App.css";
import Timeline from "./timeline/Timeline";
import FakeService from "./services/fakeService/FakeService";

class App extends Component {
  constructor() {
    super();
    this.serviceApi = new FakeService();
  }

  render() {
    return (
      <div className="App">
        <h1>Timeline :)</h1>
        <Timeline serviceApi={this.serviceApi} />
      </div>
    );
  }
}

export default App;
