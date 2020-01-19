import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SideMenu from "./sidemenu";
import RecentPlay from "./recent-play";
import UserTop from "./user-top";

import "./user-profile.styles.scss";

class UserProfile extends Component {
  render() {
    return (
      <>
        <SideMenu />
        <Switch>
          <Route exact path="/" component={UserTop} />
          <Route exact path="/recent" component={RecentPlay} />
        </Switch>
      </>
    );
  }
}

export default UserProfile;
