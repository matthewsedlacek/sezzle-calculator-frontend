import React, { Component } from "react";
import "./App.css";
import Calculator from "./containers/Calculator";
import Chatbox from "./containers/Chatbox";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid className="appMargin">
          <Calculator />
        </Grid>
        <Grid style={{ padding: 20 }} item xs={7}>
          <Chatbox />
        </Grid>
      </Grid>
    );
  }
}

export default App;
