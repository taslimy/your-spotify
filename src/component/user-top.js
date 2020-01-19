import React from "react";

import { getUserInfo } from "./spotify";

import "./user-top.styles.scss";
import RecentPlay from "./recent-play";

class UserTop extends React.Component {
  constructor() {
    super();

    this.state = {
      getTopArtTrack: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const { getTopArtTrack } = await getUserInfo();
    this.setState({ getTopArtTrack });
  }

  render() {
    const { getTopArtTrack } = this.state;
    console.log("data from compondenet?", getTopArtTrack);
    return (
      <div className="profile-wrapper">
        <div className="nav-wrapper">
          <h2>Your Top Artists</h2>
          {/* <a href="">see all</a> */}
        </div>
        <div className="topart-wrapper">
          {getTopArtTrack.slice(0, 5).map(top => (
            <div key={Math.random(5) * 99999999} className="artists-card">
              <div className="wrap">
                <img className="image" src={top.images[0].url} alt={top.name} />
                <img className="shadow" src={top.images[0].url} alt={top.name} />
              </div>
              <a
                href={top.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                {top.name}
              </a>
              {/* {top.genres.join(", ")} */}
              <div className="art-stats">
                <div className="popular">
                  <h5>popularity {top.popularity}</h5>
                </div>
                <div className="followers">
                  <h5>followers {top.followers.total}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <RecentPlay />
      </div>
    );
  }
}

export default UserTop;
