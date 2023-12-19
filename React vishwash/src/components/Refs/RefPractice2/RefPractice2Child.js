import React, { Component } from 'react'

export class RefPractice2Child extends Component {
    
    constructor(){
        super()
        this.childStateRef=React.createRef()
    }
    changeClass(){
        this.childStateRef.current.classList.add("class2")
    }
    
  render() {
    
    return (
      <React.Fragment>
      <div ref={this.childStateRef} className='class1'> I am Changing My Color</div>
      </React.Fragment>
    )
  }
}

export default RefPractice2Child