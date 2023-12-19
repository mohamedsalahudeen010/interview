import React from 'react'
import '././externalCSS.css'
function ExternalCss(props) {
  let classCss=props.primary?"primary":"secondary"
  return (
    <div>
        <h1 className={`${classCss} big-font`}>External css</h1>

    </div>
  )
}

export default ExternalCss