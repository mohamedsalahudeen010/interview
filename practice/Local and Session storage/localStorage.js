//Session Storage
//When we visiting a web App Session is started
//whenever we logged out or tab is closed session is ended
//during the session we can access the data which we stored in session storage
//after that we cannot
//can store 5mb

//LocalStorage
    //does not expiry
    //after we closed the wep app and we came back to the same web app
    //we can access the data in local storage
    //follows same origin policy
    //origin =>
            //protocol (HTTP/HTTPS)
            //Host (www.akj.com)
            //port (3000 or anything)
    //if we visit http://www.akj.com and closed the tab
    //and after while we access the same website in same web browser,we can get local storage
    
    //Can not access local storage if we change any origins
    //cannot=>https://www.akj.com
    //cannot=>http://www.akj.in 
    //cannot=>http://www.akj.com:4000 

    //Can access
    //http://www.akj.com
    //http://www.akj.com/login
    //http://www.akj.com/blog etc...

// 1.localStorage.setItem("KEY","Value")
// 2.localStorage.getItem("KEY")
// 3.localStorage.removeItem("KEY")  
// 4.localStorage.clear()
//localStorage.key(1)


let name="sala"

localStorage.setItem("name",name)
localStorage.setItem("age",28)
console.log(localStorage.key(0))


let obj={
    name:"Sala",
    age:28
}

//to store Object in local storage

localStorage.setItem("details",obj) 
//=>details:[object Object] cannot acces this so that

localStorage.setItem("details1",JSON.stringify(obj))
//details1:{"name":"Sala","age":28}	

//to Get
console.log(JSON.parse(localStorage.getItem("details1")))
//out=>{name: 'Sala', age: 28}

// we can Make function instead

let getObjectFromLocalStorage=(key)=>{
    return JSON.parse(localStorage.getItem(key))
}

let setObjectInLocalStorage=(key,value)=>{
    return localStorage.setItem(key,JSON.stringify(value))
}


console.log(getObjectFromLocalStorage("details1"))//=>{name: 'Sala', age: 28}

let person={
    name:"",
    age:25,
    gender:"male"
    }
setObjectInLocalStorage("person1",person)