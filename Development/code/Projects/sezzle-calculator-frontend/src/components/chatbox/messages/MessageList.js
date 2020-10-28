import React from "react";
import MessageCard from "./MessageCard";
import { api } from "../../../services/api.js";
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
          messageText={soloMessage.text}
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
