let div=document.createElement("div");
div.setAttribute("class","main1");
//div.style.display="flex";
//div.style.flex-wrap ="wrap";



let formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Enter a Country Name");
input.style.width="520px0";

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.style.marginLeft="200px";
button.style.marginTop="20px";
button.addEventListener("click",foo);




async function foo(){
    try {
    let countryname=document.getElementById("main").value;
    console.log(countryname);
    let res=await fetch(`https://api.covid19api.com/dayone/country/${countryname}`);
    let res1= await res.json();
    console.log(res1);
    //998
    var index=res1.length-1;
    //res1[998].Active
    console.log(res1[index].Active);
    active.innerHTML=`Total Active cases:${res1[index].Active}`;
    } catch (error) {
      console.log(error);
    }
    
    }