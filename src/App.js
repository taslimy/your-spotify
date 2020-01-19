import React from "react";

import token from "./component/spotify";
import UserProfile from "./component/user-profile";
import Login from "./component/login";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: ""
    };
  }

  componentDidMount() {
    this.setState({ token: token });
  }

  render() {
    return <>{token ? <UserProfile /> : <Login />}</>;
  }
}

export default App;
