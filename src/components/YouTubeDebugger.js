import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

  constructor() {
    super()

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

  handleBitClick = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  handleResoChange = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.video, {
          resolution: '720p'
        })
      })
    })
  }

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.handleBitClick}>Change bitrate</button>
        <button className='resolution' onClick={this.handleResoChange}>Change resolution</button>
      </div>
    )
  }
}
