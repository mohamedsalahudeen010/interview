import React from 'react'
import ReactDOM  from 'react-dom'
const PortalComponent=()=>{
return ReactDOM.createPortal(
    <div>
<h1>Hello i am from Portal Root</h1>
    </div>,
    document.getElementById("portal-root")
)
}

export default PortalComponent