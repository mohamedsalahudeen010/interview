import React, { Component } from "react";
import RefPractice2Child from "./RefPractice2Child";
import "./REF.css"
class RefPractice2Parent extends Component{

    constructor(){
        super()

        this.parentStateRef=React.createRef()
        this.changeChildColor=this.changeChildColor.bind(this)
    }
    changeChildColor(){
        this.parentStateRef.current.changeClass()
    }

    render(){
        return(
            <>
    <RefPractice2Child ref={this.parentStateRef}/>
    <button type="" onClick={this.changeChildColor}>Change Color</button>
            </>
        )
    }
}

export default RefPractice2Parent