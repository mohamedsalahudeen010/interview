import React, { Component } from 'react'

export class OnKeyUpCounter extends Component {
    constructor(props){
super(props)

        this.state={
            count:0
        }
    }
    countHandler=()=>{
        this.setState(prevState=>{
           return{count:prevState.count+1} 
        })
      
    }
  render() {
    const count=this.state.count
    return (
      <div onKeyUp={this.countHandler}>
        <span >OnKeyUpCounter is {count}</span>
      </div>
    )
  }
}

export default OnKeyUpCounter