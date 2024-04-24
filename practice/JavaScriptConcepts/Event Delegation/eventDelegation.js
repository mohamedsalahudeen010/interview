//Setting event to common ancestor id="categories"
let catagories=document.querySelector("#categories");
catagories.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target.tagName=="LI"){
        window.location.href="/"+e.target.id
        console.log(e.target.id)
    }
    
})


let input=document.querySelector("#inp");
input.addEventListener("keyup",(e)=>{
    console.log(e.target)
    if(e.target.dataset.uppercase!=undefined){
        e.target.value=e.target.value.toUpperCase()
    }
})