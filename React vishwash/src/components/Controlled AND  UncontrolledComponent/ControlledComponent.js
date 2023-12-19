import React, { useState } from 'react'

const ControlledComponent=()=> {
    const[name,setName]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name);
    }
  return (
   
        <form>
            <input
            type='text'
            placeholder='controlled'
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
            <button  onClick={handleSubmit}>Submit</button>
        </form>
  
  )
}

export default ControlledComponent