import React, { Component } from 'react'

class HoverCount extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    handleHover=()=>{
        this.setState(prevState=>{
           return{count:prevState.count+1}
        })
    }
  render() {
    const count=this.state.count
    return (
      <div>
        <span onMouseOver={this.handleHover}>
            Hovered Count is {count}
        </span>
      </div>
    )
  }
}

export default HoverCount