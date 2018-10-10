// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component{
  
  state = 
   { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
  
  handleClick(){
    this.setState({
      errors: [], user: null, settings: { bitrate: 12, video: { resolution: '1080p' } }
    })
  }
  
  handleRes(){
    this.setState({
      errors: [], user: null, settings: { bitrate: 8, video: { resolution: '720p' } }
    })
    
    
    
  }
    
  
  
  
  
  render(){
    
    return (
      <div>
      <button className="bitrate" onClick={this.handleClick.bind(this)}>
      </button>
      
      <button className="resolution" onClick={this.handleRes.bind(this)}></button>
      </div>
    
      )
    
    
  }
  
  
}


export default YouTubeDebugger;