import React, {Component} from 'react'

export default class DigitalClicker extends Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    let clickCount = this.state.timesClicked
    ++clickCount

    this.setState({
      timesClicked: clickCount
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
