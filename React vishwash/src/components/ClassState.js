import React ,{component} from "react"






class MessageState extends component {

    constructor(){
        super()
        this.state={
            message:'Hello we welcomes you'
        }
    }

   changeMessage(){
            this.setState({
                message:"Thank you for subscribing"
        })
    }

    render(){
        return(<div>
            <h1>Class State</h1>
            <h1>
                    {this.state.message}
            </h1>
            <button onClick={()=>this.changeMessage()} type="submit">Subscribe</button>
        </div>)
    }

}


export default MessageState