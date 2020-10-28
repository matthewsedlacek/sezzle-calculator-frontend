import React, { Component } from "react";
import CalculatorDisplay from "../components/calculator/CalculatorDisplay";
import Keypad from "../components/calculator/Keypad";
import SezzleLogo from "../components/calculator/SezzleLogo";
import Card from "react-bootstrap/Card";
// import { api } from "./../services/api.js";
import { API_ROOT, HEADERS } from "../constants";

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
      this.setState(
        {
          result:
            this.state.result + " = " + (eval(this.state.result) || "") + "",
        },
        () => {
          this.handleSubmit();
        }
      );
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_ROOT}/messages`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        text: this.state.result,
        username: this.props.username,
        conversation_id: 1,
      }),
    });
    this.setState({ text: "" });
  };

  // handleSubmit = () => {
  // // console.log(e);
  // // e.preventDefault();
  // api.messages
  //   .newMessage(this.state.result, this.props.username)
  //   .then((res) => {
  //     if (res.id === null) {
  //       this.setState({
  //         result: "Must be < 30 characters",
  //       });
  //     }
  //   });
  // //   this.fetchMessages();
  // // } else {
  // //   this.fetchMessages();
  // // }
  // // });
  // // use reset method?
  // // this.setState({
  // //   result: "",
  // //   errorMessage: 0,
  // // });
  // };

  // fetchMessages = () => {
  //   api.messages.getMessages().then((data) => {
  //     this.setState({ messages: data });
  //   });
  // };

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
      <Card className="calculatorContainer" bg={variant.toLowerCase()}>
        <Card.Body>
          <Card.Text>
            <SezzleLogo />
          </Card.Text>
          <Card.Text>
            <CalculatorDisplay result={this.state.result} />
          </Card.Text>
          <Card.Text>
            <Keypad onClick={this.onClick} onSubmit={this.handleSubmit} />
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  }
}

export default Calculator;
