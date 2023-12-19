import React, { Component } from 'react'
import InputRef from './InputRef'


class ParentRef extends Component {
    constructor(props) {
      super(props)
    
      this.parentRef=React.createRef()
    }
    clickHandler=()=>{
       this.parentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        
        <InputRef ref={this.parentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default ParentRef