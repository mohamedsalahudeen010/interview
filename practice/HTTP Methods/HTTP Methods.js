//<<<<<<<<<<<<<<<<< GET >>>>>>>>>>>>>>>>

const Get1=async()=>{
  try {
            const response=await fetch(`URL`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log(data)
        
          
        } 
        catch (error) {
            console.log(error)
           
        }
}



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<POST>>>>>>>>>>>>>>>>>>>>>>>>


const Post=async()=>{
    const postData={}
try{
    const response=await fetch("URL",{
        method:"POST",
        body:JSON.stringify(postData),
        headers:{
            "Content-Type":"appliction/json",
            "x-auth-token":localStorage.getItem("token")
        }
    })
    const data=response.json()
}
catch(error){
    console.log(error)
}
}
//<<<<<<<<<<<< GET IN REDUX >>>>>>>>>>>>>>>>>

const Get=()=>{
    return async(dispatch)=>{
        try{
dispatch(fetchLoading())
 const response=await fetch("URL",{
    method:"GET",
    headers:{
        "Content-Type":"application/json",
        "x-auth-token":localStorage.getItem("token")
    }
 })
 const data=await response.json()
 console.log(data)
 dispatch(fetchSuccess())
        }
        catch(error){
            console.log(error)
            dispatch(fetchError())
        }}}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<POST IN REDUX>>>>>>>>>>>>>>>>>>>>>>>>

const fetchPost=(PostData)=>{
    return async(dispatch)=>{
        try{
            const response=await fetc("URL",{
                method:"POST",
                body:JSON.stringify(PostData),
                header:{
                    "Content-type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                }
            })

            const data=await response.json()
            console.log(data)
        }
        catch(error){console.log(error)}
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<PUT>>>>>>>>>>>>>>>>>>>>>>>>

const fetchPut=async(putData)=>{
    try{
        const response=await fetch("URL",{
            method:"PUT",
            body:JSON.stringify(putData),
            header:{
                "Content-Type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            }
        })
        const data=await response.json()
    }
    catch(error){
        console.log(error)
    }
}
