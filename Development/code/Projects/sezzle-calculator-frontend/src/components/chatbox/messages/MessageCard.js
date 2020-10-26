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

const MessageCard = () => {
  const classes = useStyles();

  return (
    <List className={classes.messageArea}>
      <ListItem key="1">
        <Grid container>
          <Grid item xs={12}>
            <ListItemText align="right">2 *4 = 8</ListItemText>
            <ListItemText align="right" secondary="09:30"></ListItemText>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </ListItem>
      <ListItem key="2">
        <Grid container>
          <Grid item xs={12}>
            <ListItemText align="left" primary="5 + 5 = 10"></ListItemText>
            <ListItemText align="left" secondary="09:31"></ListItemText>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem key="3">
        <Grid container>
          <Grid item xs={12}>
            <ListItemText align="right" primary="2 /2 = 1"></ListItemText>
            <ListItemText align="right" secondary="10:30"></ListItemText>
            <Divider />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </ListItem>
    </List>
  );
};

export default MessageCard;
