import React, { useState } from 'react'

//useMemo()
//useMemo returns memoized value of a callBack function and that value only changes 
//whenever the changes in dependency occurs
function UseMemo() {
    const[counterOne,setCounterOne]=useState(0)
    const[counterTwo,setCounterTwo]=useState(0)

    const counterOneHandler=()=>{
        console.log("counterOneClicked")
        
            setCounterOne(counterOne+1)
          
    }
    const checkOddEven=React.useMemo(()=>{
        let i=0
        while(i<2000000000)
        i++
        return counterOne%2===0
    },[counterOne])
    const counterTwoHandler=()=>{
        setCounterTwo(counterTwo+1)
    }
  return (
    <div>
        <h1>UseMemo</h1>
        <div>
        <button type="" onClick={counterOneHandler}>CounterOne {counterOne} </button>
        <span>{checkOddEven? " EVEN" : " ODD"}</span>
        </div>
        <div>
        <button type="" onClick={counterTwoHandler}>CounterTwo {counterTwo} </button>
        </div>
    </div>
  )
}

export default UseMemo