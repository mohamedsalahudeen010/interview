import React, { Children } from 'react'

function ButtonUseCallback(props) {
    console.log(`Button ${props.children} Rendered`)
  return (
    <button type="" onClick={props.handleClick}>{props.children}</button>
  )
}

export default React.memo(ButtonUseCallback)