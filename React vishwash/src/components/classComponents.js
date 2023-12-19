import React, {Component} from "react"

class Greet extends Component{
    render(){
        return (<div>
            <h1>Class Component</h1>
             <h5>Hello from {this.props.name} To {this.props.guest}</h5>
             {this.props.children}
        </div>
       
    )}
}

export default Greet