// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

  constructor() {
    super()
    this.state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
  }

  handleBitRate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
    }),

    })
  }

  handleResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: { resolution: '720p' },
    }),

    })
  }



  render() {
    return (
      <div>
        <button onClick={this.handleBitRate} className="bitrate"></button>
        <button onClick={this.handleResolution} className="resolution"></button>
      </div>
    )
  }
}
