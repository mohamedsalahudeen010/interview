import React, { Component } from 'react'
import ChildGreet from './ChildGreet'

export class ParentGreet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"parent"
      }
      this.greetParent=this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`hello ${this.state.parentName} by ${childName}`)
    }
  render() {
    return (
      <div>
        <h2>ParentGreet</h2>
 <ChildGreet greetHandler={this.greetParent}/>
      </div>
     
    )
  }
}

export default ParentGreet