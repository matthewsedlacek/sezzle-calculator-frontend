import React from "react";
import MessageCard from "./MessageCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { api } from "../../../services/api.js";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  container: {
    bottom: 0,
    position: "fixed",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
}));

class MessageList extends React.Component {
  state = {
    messages: [],
    // newPortfolio: {
    //   name: "",
    //   value: 0,
    // },
    // errorMessage: 0,
  };

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    // const token = localStorage.getItem("token");
    // if (token) {
    api.messages.getMessages().then((data) => {
      console.log(data);
      this.setState({ messages: data });
    });
    // }
  };

  renderMessages = () => {
    return this.state.messages.map((soloMessage) => {
      return (
        <List className="chatboxMessagesContainer">
          <MessageCard
            key={soloMessage.id}
            messageText={soloMessage.message_text}
            username={soloMessage.username}
            timestamp={soloMessage.created_at}
          />
        </List>
      );
    });
  };

  render() {
    return <div>{this.renderMessages()}</div>;
  }
}

export default MessageList;
