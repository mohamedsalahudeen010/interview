// "Write a API call by calling the given API and Populate the data as per the requirement 
// https://dog.ceo/api/breeds/list/all
// Filter it based on alphabets & Convert it to Uppercase [Keys : Values[] ]"


let data=[]

let fetchFunc=async ()=>{

    try {
        let response=await fetch("https://dog.ceo/api/breeds/list/all",{
            method:"GET",
        })
        let res=await response.json()
        // console.log(res)
        data.push(res)
        populate()
        let sorted=Object.fromEntries(
            Object.entries(res.message).sort(([,a],[,b])=>a-b)
        )
        
        // console.log("SORTED :::::",sorted)

        let res1={}
        for(let key in sorted){
            res1[key.toUpperCase()]=sorted[key].join(" ").toUpperCase()
        }
        // console.log("UpperCase:::::",res1)
    } catch (error) {
        console.log(error)
    }
}

fetchFunc()

const filterData=(e)=>{
console.log(e.target.value)
}
let inp= document.createElement("input");
inp.type="text"
inp.addEventListener("keyup",(e)=>filterData(e))

document.body.append(inp)

function populate(){
    console.log("DATAAAAA::::",data)
}