import React, { Component } from 'react'
import UpdatedComponent from './HOC'

class HoverCount extends Component {
   
  render() {
  
    const {name,count,incrementCount}=this.props
    return (
      <div>
        <span onMouseOver={incrementCount}>
           {name} Hovered Count is {count}
        </span>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCount)