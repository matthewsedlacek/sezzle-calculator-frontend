// src/components/NewMessageForm.js

import React from "react";
import { API_ROOT, HEADERS } from "../constants";
import CalculatorDisplay from "../components/calculator/CalculatorDisplay";
import Keypad from "../components/calculator/Keypad";
import SezzleLogo from "../components/calculator/SezzleLogo";
import Card from "react-bootstrap/Card";

class NewMessageForm extends React.Component {
  state = {
    conversation_id: this.props.conversation_id,
    text: this.props.result,
    username: this.props.username,
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({ conversation_id: nextProps.conversation_id });
    this.setState({ text: nextProps.result });
    this.setState({ username: nextProps.username });
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(this.state),
    });
    this.setState({ text: "" });
  };

  render = () => {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          {/* <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          /> */}
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default NewMessageForm;
