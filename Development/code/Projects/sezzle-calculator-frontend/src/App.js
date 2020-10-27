import React, { Component } from "react";
import "./App.css";
import Calculator from "./containers/Calculator";
import Chatbox from "./containers/Chatbox";
import Grid from "@material-ui/core/Grid";
import { api } from "./services/api.js";

class App extends Component {
  state = {
    username: "",
    userImage: "",
  };

  componentDidMount() {
    this.setUser();
    // const token = localStorage.getItem("token");
    // if (token) {
    //   api.auth.getCurrentUser().then((data) => {
    //     this.setState({
    //       auth: {
    //         ...this.state.auth,
    //         user: { id: data.user.id, username: data.user.username },
    //       },
    //       loggedIn: true,
    //     });
    //   });
    // }
  }

  setUser = (data) => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    api.user.getPet().then((data) => {
      this.setState({
        username:
          data.name +
          " the " +
          data.category.toLowerCase() +
          " " +
          randomNumber,
        userImage: data.photo.thumb,
      });
      // localStorage.setItem(
      //   "username",
      //   data.name + " the " + data.category.toLowerCase() + " " + randomNumber
      // );
      // const token = localStorage.getItem("username");
      // console.log(token);
    });
  };

  render() {
    return (
      <Grid container spacing={3}>
        <Grid className="appMargin">
          <Calculator username={this.state.username} />
        </Grid>
        <Grid style={{ padding: 20 }} item xs={7}>
          <Chatbox
            username={this.state.username}
            userImage={this.state.userImage}
          />
        </Grid>
      </Grid>
    );
  }
}

export default App;
