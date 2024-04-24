// "Write a API call by calling the given API and Populate the data as per the requirement 
// https://dog.ceo/api/breeds/list/all
// Filter it based on alphabets & Convert it to Uppercase [Keys : Values[] ]"


let data=[]


const filterData=(e)=>{
console.log(e.target.value)

}
let inp= document.createElement("input");
inp.type="text"
inp.addEventListener("keyup",(e)=>filterData(e))

document.body.append(inp)

let list=document.createElement("div");
list.setAttribute("class","list")

let childList=document.createElement("ol");
childList.setAttribute("class","childList");
childList.innerHTML="<li>Hello</li>"

list.append(childList)
document.body.append(list)


function populate(){
    console.log("DATAAAAA::::",data)
}

function getData(data){
    console.log("GET DATA :",data)

    
}



let fetchFunc=async ()=>{

    try {
        let response=await fetch("https://dog.ceo/api/breeds/list/all",{
            method:"GET",
        })
        let res=await response.json()
        // console.log(res)
        data.push(res)
        populate()
        getData(res)
        let sorted=Object.fromEntries(
            Object.entries(res.message).sort(([,a],[,b])=>a-b)
        )
        // sorted.map((ele)=>{
        //     childList.innerHTML+=`<li>${ele}</li>
        //     `
        // })
      
        
        console.log("SORTED :::::",sorted)

        let res1={}
        for(let key in sorted){
            res1[key.toUpperCase()]=sorted[key].join(" ").toUpperCase()
            console.log(key[0])
            key=key[0].toUpperCase()+key.slice(1)
            console.log(key)
            childList.innerHTML+=`<li>${key}</li>`
        }
        console.log("UpperCase:::::",res1)
    } catch (error) {
        console.log(error)
    }
}

fetchFunc()