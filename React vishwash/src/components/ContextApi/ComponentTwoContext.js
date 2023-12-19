import React, { useContext } from 'react'
import { contextTest1 } from './ContextApi'


function Comp2OfContextApi() {
    const{counter2,setCounter2,handleCount2}=useContext(contextTest1)
    console.log("Component-2 Rendered")
  return (
    <div>
        <div>
            {counter2}
        </div>
        <button type="" onClick={handleCount2}>Count 2</button>

    </div>
  )
}

export default Comp2OfContextApi