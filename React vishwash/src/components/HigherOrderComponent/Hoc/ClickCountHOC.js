import React, { Component } from 'react'
import UpdatedComponent from './HOC'
import HOCPracticeFun from './HOCPractice'

class ClickCount extends Component {
    
  render() {
    const {counter,setCounter,name}=this.props
    return (
      <div><button onClick={setCounter}> {name} Clicked {counter} timesss</button></div>
    )
  }
}

export default HOCPracticeFun(ClickCount) 