import React, { Component } from "react";


class LifeCycleChild extends Component{
    constructor(props){
        super(props)
        this.state={
            num:0
        }
        this.changeNum=this.changeNum.bind(this)
        console.log("Constructor Child")
    }
    changeNum(num){
        this.setState(()=>({
            num:num
        }))
    }
    static getDerivedStateFronProps(props,state){
        console.log("getDerivedStateFronProps Child")
    }
    componentDidMount(){
        console.log("componentDidMount Child")
    }
    render(){
        console.log("render Child")
        return(
            <>
            <input type="number" name="" value={this.state.num} onChange={(e)=>this.changeNum(e.target.value)}></input>
            <button type="" onClick={()=>this.props.counter(this.state.num)}>Click Here</button>
            </>
        )
    }
}

export default LifeCycleChild