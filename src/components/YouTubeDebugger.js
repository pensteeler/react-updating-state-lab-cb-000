import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }

      }
    };
  }

  handleClick = () => {
    // Update our state here...
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>Change bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Change resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
