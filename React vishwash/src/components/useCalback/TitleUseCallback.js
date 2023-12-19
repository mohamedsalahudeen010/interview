import React from 'react'

function TitleUseCallback(props) {
    console.log(`Title ${props.children} Rendered`)
  return (
    <h1>{props.children}</h1>
  )
}

export default React.memo(TitleUseCallback)