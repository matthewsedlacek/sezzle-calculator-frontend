import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ChatHeader from "../components/chatbox/ChatHeader";
import User from "../components/chatbox/User";
import MessageList from "../components/chatbox/messages/MessageList";

const Chatbox = () => {
  return (
    <div>
      <Grid component={Paper}>
        <Grid item xs={12}>
          <ChatHeader />
          <User />
          <MessageList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Chatbox;
