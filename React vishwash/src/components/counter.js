import React, { Component } from 'react'

export class Counter extends Component {
 
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    incrementBy10(){
        this.setState((previousState)=>({
            count:this.state.count+10
        }))
    }

    increment(){
        // this.setState({
        //     count:this.state.count+1
        // })

        this.setState(previousState=>({
            count:previousState.count+1
        }))
    }
    decreament(){
        this.setState({
            count:this.state.count-1
        })
    }
    decreamentByFive(){
        this.setState(prev=>({
            count:this.state.count+5
        }))
    }
 
incrementFive=()=>{
    this.setState((previousState)=>({
        count:previousState.count+5
    }))
}
   

    render() {
    return (
        
      <div>
        <h1>Counter Using Setstate</h1>
        <p>counter {this.state.count}</p>
      <button onClick={()=>this.increment()}>add by 1</button>
    
      <button onClick={()=>this.incrementFive()}>add by 5</button>
      <button onClick={()=>this.incrementBy10()}>add by 10</button>
      <button onClick={()=>this.decreament()}>remove by 1</button>
      <button onClick={()=>this.decreamentByFive()}>remove by 5</button>
      </div>
      
    )
  }
}

export default Counter