import React from "react";
import MessageCard from "./MessageCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { api } from "../../../services/api.js";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";

class MessageList extends React.Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    api.messages.getMessages().then((data) => {
      console.log(data);
      this.setState({ messages: data });
    });
    // }
  };

  renderMessages = () => {
    return this.state.messages.map((soloMessage) => {
      return (
        <MessageCard
          key={soloMessage.id}
          id={soloMessage.id}
          messageText={soloMessage.message_text}
          username={soloMessage.username}
          timestamp={soloMessage.created_at}
        />
      );
    });
  };

  render() {
    return (
      <List className="chatboxMessagesContainer">{this.renderMessages()}</List>
    );
  }
}

export default MessageList;
