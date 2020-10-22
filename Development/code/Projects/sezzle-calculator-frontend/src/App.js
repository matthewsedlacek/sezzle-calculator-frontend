import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import Calculator from "./containers/Calculator";

class App extends Component {
  state = {
    result: "",
    errorMessage: 0,
  };

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "←") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        result:
          this.state.result + " = " + (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Calculator />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
