import React from "react";

import "./login.styles.scss";

const Login = () => {
  return (
    <div className="login-wrapper">
      <a href="https://your-spotify.herokuapp.com/login">
        Login to your spotify
      </a>
      {/* <a href="http://localhost:8888/login">login to spotify to begin</a> */}
    </div>
  );
};

export default Login;
