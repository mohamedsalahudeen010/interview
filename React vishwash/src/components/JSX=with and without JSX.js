import React from "react"

//with JSX
// const GreetJSX=(props)=>{

//    return( <div id="dummyID" className="dummyClass">
//     <h1 id="id-H1" className="Class-H1">Hello {props.name} is {props.character}</h1>        
//     </div>)

// }

//without JSX

// const GreetJSX=()=>{
//  return React.createElement("div",
//  {id:"dummyID",className:"dummyClass"},
//  React.createElement("h1",{id:"id-H1",className:"Class-H1"},"Hello Sala"))
    
// }

const GreetJSX=(props)=>{
return  React.createElement("div",{id:"id-name",className:"class-name"},
React.createElement("h1",null,"Without JSX"),
React.createElement("p",{className:"para"},`Hello  ${props.name}`),
React.createElement("p",{className:"character"},`Character is ${props.character}`),
React.createElement("p",{className:"character"},`Character is ${props.character}`))
}


export default GreetJSX