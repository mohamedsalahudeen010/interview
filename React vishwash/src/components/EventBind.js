import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello Welcome"
      }
      //third method
    //   this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:" Thank you For Subscribing"
    //     })
    // }

    //fourth method
    clickHandler=()=>{
        this.setState({
             message:" Thank you For Subscribing"
               })
    }
    
  render() {
    return (
      <div>
        <h1>EventBind</h1>
        <p>{this.state.message}</p>

        {/* Method 1 */}
        {/* <button onClick={this.clickHandler.bind(this)}>Subscribe</button> */}

        {/* Method 2 */}
        {/* <button onClick={()=>this.clickHandler()}>Subscribe</button> */}

         {/* Method 3 and Method 4*/}
        <button onClick={this.clickHandler}>Subscribe</button>
      </div>

    )
  }
}

export default EventBind