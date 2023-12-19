import React, { createContext, useState } from 'react'
export const contextTest1=createContext(null);


function Context(props) {
    const[counter1,setCounter1]=useState(0);
    const[counter2,setCounter2]=useState(0);

    const handleCount1=()=>{
        setCounter1(counter1+1)
    }
    const handleCount2=()=>{
        setCounter2(counter2+1)
    }
  

    
  return (
    <contextTest1.Provider value={{counter1,setCounter1,counter2,setCounter2,handleCount1,handleCount2}}>
        {props.children}
    </contextTest1.Provider>
  )
}

export default Context