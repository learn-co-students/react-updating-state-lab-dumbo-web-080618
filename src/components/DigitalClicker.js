// Code DigitalClicker Component Here 
 import React, { Component } from 'react'
 export default class DigitalClicker extends Component{
   constructor(props){
     super(props)
     this.state = {
      timesClicked : 0
     }
   }

   render() {
     return(
       <React.Fragment>
         <button
          onClick={() => {
            let newClick = this.state.timesClicked
            this.setState({timesClicked: ++newClick}
            )}}>
           {this.state.timesClicked}
         </button>
       </React.Fragment>
     )
   }
 }