import React, { useState } from 'react'

function InlineCSS() {
    const font={
        color:"green",
        backgroundColor:"yellow"
    }
    const font1={
      color:"red",
      backgroundColor:"white"
    }
    const[style1,setStyle1]=useState(false);

  return (
    <div>
        <h1 style={style1?font:font1}>InlineCSS</h1>
        <button type="" onClick={()=>setStyle1(!style1)}>Change Color</button>
        </div>
  )
}

export default InlineCSS