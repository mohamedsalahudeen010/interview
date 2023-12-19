import React, { useEffect, useState } from "react"
import {data} from "./data.js"


const Corousel=()=>{
    const[currentIndexData,setCurrentIndexData]=useState(0)

    useEffect(()=>{
       const timer= setTimeout(()=>{
            onClickNextHandler() 
        },3000)
        return ()=>{
            clearTimeout(timer)
        }
    },[currentIndexData])

    const onClickNextHandler=()=>{
        currentIndexData===data.length-1?setCurrentIndexData(0):setCurrentIndexData(currentIndexData+1)
    }
    const onClickPreviousHandler=()=>{
        currentIndexData===0?setCurrentIndexData(data.length-1):setCurrentIndexData(currentIndexData-1)
    }
    return(
        <div style={{display:"flex", justifyContent:"center"}}>
             <button type="" onClick={onClickPreviousHandler} style={{flex:"1"}}>previous</button>
            {data.map((img,i)=>(
            
               
                <img src={img} alt="corousel" style={{width:"500px",height:"300px",contain:"content",objectFit:"contain",
            display:(currentIndexData===i?"block":"none")}}>
                </img>
                
              
            ))}
            <button type="" onClick={ onClickNextHandler} style={{flex:"1"}}>Next</button>

        </div>
    )
}

export default Corousel