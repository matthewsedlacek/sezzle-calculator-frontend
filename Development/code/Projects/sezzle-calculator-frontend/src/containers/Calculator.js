import React, { Component } from "react";
import CalculatorDisplay from "../components/calculator/CalculatorDisplay";
import Keypad from "../components/calculator/Keypad";
import Card from "react-bootstrap/Card";

class Calculator extends Component {
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
    return ["Primary"].map((variant, idx) => (
      <Card style={{ width: "50%" }} bg={variant.toLowerCase()}>
        <Card.Body>
          <Card.Text>
            <CalculatorDisplay result={this.state.result} />
          </Card.Text>
          <Card.Text>
            <Keypad onClick={this.onClick} />
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  }
}

export default Calculator;
