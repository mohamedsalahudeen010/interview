import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends Component{
    constructor(){
      super()
      this.state={
        name:"Sala"
      }

    }
    changeName(){
      setInterval(()=>{
        this.setState({
          name:"Mohamed"
        })
      },3000)
    }
    componentDidMount(){
      this.changeName()
    }
   
    
    render(){
      return(
        <>
        <h1>Parent Component</h1>
          <PureComp name={this.state.name}></PureComp>
          <RegularComp name={this.state.name}></RegularComp>
        </>
      )
    }
}

export default ParentComp