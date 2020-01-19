import React from "react";
import { Link } from "react-router-dom";

import { getUserInfo, logout } from "./spotify";

import "./user.styles.scss";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const { user } = await getUserInfo();
    this.setState({ loading: false, user });
  }

  render() {
    const { loading, user } = this.state;
    console.log(user);

    return (
      <>
        {!loading ? (
          <div className="user-wrapper">
            <div className="user-profile">
              <div className="user-avatar">
                {user.images.length > 0 ? (
                  <img src={user.images[0].url} alt={user.display_name} />
                ) : (
                  "no avatar"
                )}
              </div>

              <div className="info-wrapper">
                <h4 className="display-name">
                  <a
                    href={user.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.display_name}
                  </a>
                </h4>
                <h4 className="type">
                  {user.product === "open" ? "free" : user.product}
                </h4>
              </div>
            </div>

            <div className="account-stats">
              <div className="followers">Followers: {user.followers.total}</div>
              <div className="following">Following: 1</div>
              <div className="playlist">Playlists: 2</div>
            </div>
            {/* <button onClick={logout}>Logout</button> */}
            <div className="menu-link">
              <Link to="/">
                <i className="fa fa-fw fa-user"></i> profile
              </Link>
              <Link to="/recent">
                <i className="fa fa-fw fa-play"></i> recently played
              </Link>
              <Link to="" onClick={logout}>
                <i className="fa fa-fw fa-sign-out"></i>Logout
              </Link>
            </div>
          </div>
        ) : (
          "loadering animation . . . . ."
        )}
      </>
    );
  }
}

export default UserProfile;
