import React, { Component } from 'react'

export class ClickCount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    clickHandler=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }
  render() {
    const count=this.state.count
    return (
      <div><button onClick={this.clickHandler}>Clicked {count} times</button></div>
    )
  }
}

export default ClickCount