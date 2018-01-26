import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <List />
        </p>
      </div>
    );
  }
}

export default App;
