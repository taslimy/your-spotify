import React from "react";

import { getUserInfo } from "./spotify";

import "./recent-play.styles.scss";

class RecentPlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recentPlayed: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const { recentPlayed } = await getUserInfo();
    this.setState({ recentPlayed });
  }

  render() {
    const { recentPlayed } = this.state;

    let milliToMin = millis => {
      let minutes = Math.floor(millis / 60000);
      let seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    };

    console.log("recent play", recentPlayed);
    return (
      <>
        <div className="nav-wrapper">
          <h2>Recently Played Tracks</h2>
          {/* <a href="">see all</a> */}
        </div>
        <div className="recent-wrapper">
          {recentPlayed.slice(0, 8).map(song => (
            <div className="track" key={Math.random(5) * 99999999}>
              <img src={song.track.album.images[1].url} alt={song.track.name} />

              <div className="track-wrapper">
                <div className="track-info">
                  <h4>{song.track.name}</h4>
                  <h6>{song.track.artists[0].name}</h6>
                  <a href={song.track.uri}>listen to track</a>
                </div>
                <h4>{milliToMin(song.track.duration_ms)}</h4>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default RecentPlay;
