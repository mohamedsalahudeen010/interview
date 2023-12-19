import React from 'react'

// const FRefChild=React.forwardRef((props,ref)=>{
//         return(
//             <div>
//                 <input type='text' ref={ref}></input>


//             </div>
//         )
//     }
// )

// export default FRefChild

// <<<<<<<<<<<<<<<<<<<<<<<<<<OR>>>>>>>>>>>>>>>>>>>>>

const FRefChild=(props,ref)=>{
    return(
        <div>
        <input type='text' ref={ref}></input>


    </div>
    )
}
export default React.forwardRef(FRefChild)