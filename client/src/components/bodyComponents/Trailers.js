import React, { Component } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

const url = 'https://ramble-app.herokuapp.com';

class Trailers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      response: {},
    };
  }

  componentDidMount() {
    axios //refactor as action
      .get(`${url}/api/trailer/${this.props.id}`)
      .then(response =>
        this.setState({ loaded: true, response: response.data })
      )
      .catch(response =>
        this.setState({ loaded: true, response: response.data })
      );
  }

  render() {
    const opts = {
      height: '268',
      width: '440',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    return (
      <div>
        {this.state.loaded ? (
          <YouTube opts={opts} videoId={this.state.response.results[0].key} />
        ) : (
          'Loading'
        )}
      </div>
    );
  }
}

export default Trailers;
