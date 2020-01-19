import React from "react";

const login_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8888/login"
    : "https://your-spotify.taslim.now.sh/login";

const Login = () => {
  return (
    <div>
      <a href={login_url}>login to spotify to begin</a>
    </div>
  );
};

export default Login;
