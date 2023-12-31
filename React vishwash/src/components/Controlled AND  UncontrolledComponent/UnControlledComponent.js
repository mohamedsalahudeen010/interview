import React, { useRef } from 'react'

function UnControlledComponent() {
    const inputRef=useRef(null)
   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputRef.current.value)
    }
  return (
    <div>
        <form>
        <input
            type='text'
            placeholder='Uncontrolled'
            ref={inputRef}/>
            <button  onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default UnControlledComponent