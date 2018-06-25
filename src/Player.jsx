import React, { Component } from 'react';
import bitmovinPlayer from 'bitmovin-player';

/**
 * @returns {markUp} react component
 */
class Player extends Component {
  /**
   *
   * @param {*} props
   * @returns {MarkUp} React Component
   */
  constructor(props) {
    super(props);
    this.state = {
      content: 'Player',
      player: '',
    };
  }

  /**
   * @return {null} null
   */
  componentDidMount() {
    const bitmovin = bitmovinPlayer('player');
    const config = {
      key: 'f3c6928a-5795-4629-9a71-ceddeb60cfe8',
      playback: {
        autoplay: false,
        muted: false
      },
      source: {
        dash: '//bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        hls: '//bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        poster: '//bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg',
        progressive: [{
          url: '//bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
          type: 'video/mp4'
        }, {
          url: 'http://path/to/webm',
          type: 'video/webm'
        }],
      },
      style: {
        width: '90%',
        aspectratio: '16/9',
        ux: true
      },
    };
    bitmovin.setup(config)
      .then((playerInstance) => {
        this.setState({
          player: playerInstance
        });
        this.state.player.play();
        console.log('Successfully created Bitmovin Player instance');
      }, (reason) => {
        console.log(reason, 'Error while creating Bitmovin Player instance');
      });
  }
  /**
   * @returns {MarkUp} React Component
   */
  render() {
    return (
      <div>
        {this.state.content}
        <div id="player" />
      </div>
    );
  }
}

Player.propTypes = {
};

export default Player;
