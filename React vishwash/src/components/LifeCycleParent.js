import React, { Component } from "react";
import LifeCycleChild from "./LifeCycleChild";

class LifeCycleParent extends Component{
    
    constructor(){
        super()

        this.state={
            count:0
        }
        this.counter=this.counter.bind(this)
        console.log("Constructor Parent")
    }

    counter(num){
        this.setState(({
            count:this.state.count+ +num
        }))
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps Parent")
    }
    componentDidMount(){
        console.log("componentDidMount Parent")
    }

    render(){
        console.log("render Parent")
       return(
        <>
        <h1>Parent LifeCycle Compnent</h1>
        <h3>{this.state.count}</h3>
        <LifeCycleChild counter={this.counter}/>
        </>
       ) 
    }
}


export default LifeCycleParent