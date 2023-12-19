import React, { useState } from 'react'


function FunctionClick() {
  const[value,setValue]=useState()
   function handlerFunc(){

setValue("I am Clicked")

    }
    
    console.log(value)
  return (
    <div><h1>FunctionClick</h1>
    <button onClick={()=>handlerFunc()}>Click</button>
    {value?<p>{value}</p>:""}

    </div>
  )
}

export default FunctionClick