import React, { Component } from 'react'

export class InputRef extends Component {
    constructor(props) {
      super(props)
    
     this.componentRef=React.createRef()
    }
    focusInput=()=>{
        this.componentRef.current.focus()
        console.log(this.componentRef)
    }
   
  render() {
    return (
      <div>
        <input type='text' ref={this.componentRef}></input>
      </div>
    )
  }
}

export default InputRef