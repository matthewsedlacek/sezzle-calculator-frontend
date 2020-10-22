import React, { Component } from "react";
import "./App.css";
import Calculator from "./containers/Calculator";
import Message from "./containers/Message";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Calculator />
          <Message />
        </div>
      </div>
    );
  }
}

export default App;
