import React, { Component, PureComponent } from 'react'
import MemoComponent from './MemoComponent'

export class MemoParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"sala"
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"salahudeen"
            })
        },3000)
    }
  render() {
    console.log("<<<<<=====MemoParent Rendered=====>>>>>")
    return (
      <div><h1>MemoParent</h1>
      <MemoComponent name={this.state.name}/>
      </div>
    )
  }
}

export default MemoParent