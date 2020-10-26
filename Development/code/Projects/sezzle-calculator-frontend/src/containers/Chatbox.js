import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChatHeader from "../components/chatbox/ChatHeader";
import User from "../components/chatbox/User";
import MessageCard from "../components/chatbox/messages/MessageCard";
import MessageList from "../components/chatbox/messages/MessageList";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "80vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
});

const Chatbox = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container component={Paper} className={classes.chatSection}>
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
