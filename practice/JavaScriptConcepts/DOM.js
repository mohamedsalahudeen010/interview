//1.To create element 

let element=document.createElement("div");
//innerHTML
element.innerHTML="<h1>Hello I am H1</h1>";
//innerText
element.innerText="I am text";
//setAttribute
element.setAttribute("class","className","id","idName");
element.style.backgroundColor="red";
//AddEventListener 3 params
//1.event eg: click,keyUp etc..
//2.callback function
//3.boolean value which decides event bubbling or capturing 
element.addEventListener("click",()=>{console.log("hi")},true/false)
//ClassList
element.classList.add("className1","className2");
element.classList.remove("className2")
element.classList.toggle("className2")
//<<<<<<<<OR>>>>>>>
let list=element.classList;
list.add("className1","className2");
list.remove("className2")
list.toggle("className2") //=>like clicking
//To append element in html body
document.body.append(element)

//To get element by Id
let elementById=document.getElementById("idName")

//To get element by class
let elementByClass=document.getElementsByClassName("className");
//outPut=>array

//To get element by teg
let elementByTag=document.getElementsByTagName("tagName")
//outPut=>array

//TO select first occurence QUERYSELECTOR

let elementByQueryClass=document.querySelector(".className")//=>get first element in given class name

let elementByQueryId=document.querySelector("#idName")//=>get element in given ID name

let elementByQueryTag=document.querySelector("tagName")//=>get first element in given tag 

//QuerySelectorAll- select all element in particular class or Id or tag name
//out=>array

let elementByQuerySelectorAll=document.querySelectorAll("class or id or tag Name")

// also in query selector we can choose class name in particular tag name

let ele1=document.querySelector("p.className")//=>means in paragraph tag this className
let ele2=document.querySelector("p#IdName")//=>means in paragraph tag this Id Name
let ele3=document.querySelector("div > p")//=>means select p tags inside div
let ele4=document.querySelector("h3, h4")//=>means select both h1 and h2 tags


