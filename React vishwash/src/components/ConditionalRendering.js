import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(){
        super()
        this.state={
            isLoggedIn:true
        }
        this.changeLog=this.changeLog.bind(this)
    }

    changeLog(){
        this.setState({
            isLoggedIn:!this.state.isLoggedIn
        })
    }

  render() {
    
//first method if/else
    // if(this.props.isLoggedIn){return <div>Hello Sala</div>}
    // else return <div>Welcome Guest</div>

    // Second Method
    // let message
    // if(this.props.isLoggedIn) {message="Helloo sala"}
    // else {message="Welcome Guest"}

    // third
    return(
<div>
    <h1>Conditional Rendering</h1>
{this.state.isLoggedIn?<h5>Hello Sala</h5>:<h5>Welcome Guest</h5>}

<button onClick={this.changeLog}>{this.state.isLoggedIn?"logout":"login"}</button>
</div>

    )
//    fourth method
// return(
//     <div>
//      {this.state.isLoggedIn && <div>Hello sala</div>}
//     <button onClick={this.changeLog}>{this.state.isLoggedIn?"logout":"login"}</button>
//     </div>
// )
  }
}

export default ConditionalRendering