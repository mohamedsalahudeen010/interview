import React, { useCallback, useState } from 'react'
import TitleUseCallback from './TitleUseCallback'
import CountUseCallback from './CountUseCallback';
import ButtonUseCallback from './ButtonUseCallback';

function ParentUseCallback() {
    const[age,setAge]=useState(25);
    const[sal,setSal]=useState(50000)
    const ageClick=useCallback(()=>{
        setAge(age+1)
    },[age])
    const salaryClick=useCallback(()=>{
        setSal(sal+1000)
    },[sal])
  return (
    <div>
        <TitleUseCallback>UseCallback</TitleUseCallback>
        <CountUseCallback title={"Age"} count={age}></CountUseCallback>
        <ButtonUseCallback handleClick={ageClick}>Increment Age</ButtonUseCallback>
         <CountUseCallback title={"Salary"} count={sal}></CountUseCallback>
         <ButtonUseCallback handleClick={salaryClick}>Increment Salary</ButtonUseCallback>
    </div>
  )
}

export default React.memo(ParentUseCallback)