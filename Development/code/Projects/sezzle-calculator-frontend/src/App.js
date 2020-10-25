import React, { Component } from "react";
import "./App.css";
import Calculator from "./containers/Calculator";
import Message from "./containers/Message";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Calculator />
        </Grid>
        <Grid item xs>
          <Message />
        </Grid>
      </Grid>
    );
  }
}

export default App;
