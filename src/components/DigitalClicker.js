// Code DigitalClicker Component Here
import React, {Component} from 'react'

class DigitalClicker extends Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = (event) => {
    let click = this.state.timesClicked + 1;
    this.setState({timesClicked:click})
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }

}

export default DigitalClicker
