import React, { Component } from 'react'
import ChildRefPractice from './ChildRefPractice'

export class ParentRefPractice extends Component {
    constructor(){
        super()
        this.parentRef=React.createRef()
    }
    parentRefFun(){
        this.parentRef.current.childRefFun()
    }
  render() {
    return (
     <>
     <ChildRefPractice ref={this.parentRef}></ChildRefPractice>
     <button onClick={()=>this.parentRefFun()}>Animate</button>
     </>
    )
  }
}

export default ParentRefPractice