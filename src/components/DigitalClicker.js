// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  track = () => {
    this.setState((stat) => ({
      timesClicked: stat.timesClicked + 1
    }))
  }

  render() {
    return (
      <button
      onClick={this.track}
      >
        {this.state.timesClicked}
      </button>
    )
  }
}
