//Event Bubbling
//When an event occurs it will bubble towards the outermost element or root element or parent element
//default
//three arguements to be passed in addEventListener
//1,event
//2,callback function to handle event
//3,true/false default Value is:false
//when 3rd value false refers event Bubbling and it is the default function
//Whwn we change this to true this makes event Capturing
let bubbleGrandParent=document.getElementById("bgrandParent");
bubbleGrandParent.addEventListener("click",()=>{
    console.log("Bubble Grand Parent Clicked")
},false)

let bubbleParent=document.getElementById("bparent");
bubbleParent.addEventListener("click",()=>{
    console.log("Bubble Parent Clicked")
},false)

let bubbleChild=document.getElementById("bchild");
bubbleChild.addEventListener("click",()=>{
    console.log("Bubble Child Clicked")
},false)

//Event Capturing
let capturingGrandParent=document.getElementById("cgrandParent");
capturingGrandParent.addEventListener("click",()=>{
    console.log("capturing Grand Parent Clicked")
},true)

let capturingParent=document.getElementById("cparent");
capturingParent.addEventListener("click",()=>{
    console.log("capturing Parent Clicked")
},true)

let capturingChild=document.getElementById("cchild");
capturingChild.addEventListener("click",()=>{
    console.log("capturing Child Clicked")
},true)

//Combine
//we can stop this event pubbling and capturing by e.stopPropogation()
let combineGrandParent=document.getElementById("combinegrandParent");
combineGrandParent.addEventListener("click",(e)=>{
    
    console.log("combine Grand Parent Clicked")
},true)

let combineParent=document.getElementById("combineparent");
combineParent.addEventListener("click",(e)=>{
    
    console.log("combine Parent Clicked")
},false)

let combineChild=document.getElementById("combinechild");
combineChild.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("combine Child Clicked")
},false)
