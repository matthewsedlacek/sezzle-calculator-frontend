import React from "react";
import NewMessageForm from "./NewMessageForm";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ChatHeader from "../components/chatbox/ChatHeader";
import User from "../components/chatbox/User";
import MessageList from "../components/chatbox/MessageList";
import Calculator from "../containers/Calculator";

// New Chatbox??

const MessagesArea = (props) => {
  const {
    conversation: { id, messages },
  } = props;

  const { username, userImage } = props;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid className="appMargin">
          {/* <Calculator username={this.state.username} /> */}
          <Calculator
            conversation_id={id}
            username={username}
            // userImage={userImage}
          />
        </Grid>
        <Grid style={{ padding: 20 }} item xs={7}>
          {/* <Chatbox
            username={this.state.username}
            userImage={this.state.userImage}
          /> */}
          <Grid component={Paper}>
            <Grid item xs={12}>
              <ChatHeader />
              <User username={username} userImage={userImage} />
              <MessageList messages={messages} currentUser={username} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      ;
    </div>
  );
};

export default MessagesArea;

// helpers

// const orderedMessages = (messages) => {
//   const sortedMessages = messages.sort(
//     (a, b) => new Date(a.created_at) - new Date(b.created_at)
//   );
//   return sortedMessages.map((message) => {
//     return <li key={message.id}>{message.text}</li>;
//   });
// };
