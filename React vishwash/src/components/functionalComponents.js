import React from "react"

let Welcome=(props)=>{
    return (
        <div>
            <h1>Functional Components</h1>
           <h5>Hello I am {props.name} welcome {props.guest}</h5>
    {props.children} 
        </div>
    
    )
}

export default Welcome