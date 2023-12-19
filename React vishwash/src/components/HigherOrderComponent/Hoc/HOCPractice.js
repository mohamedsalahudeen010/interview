import React, { Component } from "react";

const HOCPracticeFun=(Samp)=>{
class HOCPractice extends Component{
constructor(){
    super()
    this.state={
        counter:0
    }
}
setCounter=()=>{
    this.setState((prev)=>({
        counter:prev.counter+1
    }))
}
render(){
    return (
        <Samp
        counter={this.state.counter}
        setCounter={this.setCounter}
        {...this.props}></Samp>
    )
}

}
return HOCPractice
}

export default HOCPracticeFun