import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

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

const MessageCard = (props) => {
  const classes = useStyles();

  return (
    // <List className={classes.messageArea}>
    <ListItem>
      <Grid item xs={12}>
        <ListItemText align="right" primary={props.messageText}></ListItemText>
        <ListItemText align="right" secondary={props.timestamp}></ListItemText>
      </Grid>
    </ListItem>
    // </List>
  );
};

export default MessageCard;
