import React, { Component } from "react";
import "./ref.css"

class ChildRefPractice extends Component{
    constructor(){
        super()

        this.childRef=React.createRef()
        this.childRef2=React.createRef()
        this.childRefFun=this.childRefFun.bind(this)
    }

    childRefFun(){
        this.childRef.current.classList.add(`animation_trigger`)
        this.childRef2.current.focus()
        console.log("childRefFun:",this.childRef)
    }
    render(){
        return(
            <>
            <div className="animatedElementStyle" ref={this.childRef} > I am rendered !</div>
            <input type="" name="" value="" ref={this.childRef2}></input>
            </>
        )
    }
}

export default ChildRefPractice