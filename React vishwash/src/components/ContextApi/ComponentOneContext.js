import React, { useContext } from 'react'
import { contextTest1 } from './ContextApi'




function Comp1OfContextApi() {
    const{counter1,setCounter1,handleCount1}=useContext(contextTest1)
    console.log("Component-1 Rendered")
  return (
    <div>
        <div>
            {counter1}
        </div>
        <button type="" onClick={handleCount1}>Count 1</button>

    </div>
  )
}

export default Comp1OfContextApi