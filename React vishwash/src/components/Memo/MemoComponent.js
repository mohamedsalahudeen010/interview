import React from 'react'

const MemoComponent=React.memo(({name}) =>{
    console.log("<<<<<=====MemoComponent Rendered=====>>>>>")
  return (
    <div>MemoComponent {name}</div>
  )
}
)
export default MemoComponent

// <<<<<<<<<<<<<<<<<OR>>>>>>>>>>>>>>>>>>>>>>>>

// const MemoComponent1=({name})=>{
//   return(
//     <div>MemoComponent {name}</div>
//   )
// }
// export default React.memo(MemoComponent1)