import React, { Component } from 'react'
import FRefChild from './FRefChild'

class FRefParent extends Component {
    constructor(props){
        super(props)

        this.parentRef=React.createRef()
    }
    componentDidMount(){
      this.parentRef.current.focus()
    }
    clickHandler=()=>{
        this.parentRef.current.classList.add("class1")
    }
  render() {
    return (
      <div><h1>FRefParent</h1>
        <FRefChild ref={this.parentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRefParent