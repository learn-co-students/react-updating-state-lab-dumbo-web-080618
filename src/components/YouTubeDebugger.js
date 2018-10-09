// Code YouTubeDebugger Component Here
import React, { Component } from 'react'
export default class YouTubeDebugger extends Component{
  constructor(props){
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitRate = () => {
    this.setState({settings: Object.assign({}, this.state.settings, {bitrate: 12})})
  }

  changeResolution = () => {
    this.setState({settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})})
  }

  render() {
    return(
      <React.Fragment>
        <button className='bitrate'
          onClick={this.changeBitRate}>
          Change Bitrate</button>
        <button className="resolution"
          onClick={this.changeResolution}>
          Change Resolution
        </button>
      </React.Fragment>
    )
  }
} 