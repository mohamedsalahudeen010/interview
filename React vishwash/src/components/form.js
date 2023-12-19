import React, { Component } from 'react'

export class Form extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         comments:"",
         skill:"React"
      }
    }
    handleName=(event)=>{
        this.setState({
         name:event.target.value
        })
       }

    handleComment=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
 
       handleSubmit=(event)=>{
         alert(`${this.state.name},${this.state.comments},
            ,${this.state.skill}`)
            event.preventDefault()
       }
    render() 
  {
    return (
     <form onSubmit={this.handleSubmit}>
        <div><h1>Form Handling</h1></div>
<div>
    <label>Name</label>
    <input 
    type="text"
    value={this.state.name}
    onChange={this.handleName}></input>
</div>
<div>
    <label>Comments</label>
    <textarea rows="" cols=""
     value={this.state.comments}
     onChange={this.handleComment}></textarea>
    
</div>
<div><button type="submit">Click</button></div>

     </form>
    )
  }
}

export default Form