import React from 'react'

function CountUseCallback(props) {
    console.log(`Count ${props.title} Rendered`)
  return (
    <div>{props.title} : {props.count}</div>
  )
}

export default React.memo(CountUseCallback)