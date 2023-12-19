let lap1={
    "cpu":"i9",
    "processor":"quadcomm",
    "storage":"1024gb",
    "ram": "8gb",
    "brand":"HP"
}
let lap2={
    "cpu":"i7",
    "processor":"quadcomm",
    "storage":"512gb",
    "ram": "16gb",
    "brand":"ASUS",

    compare:function(laptop){
        
            if(this.cpu>laptop.cpu){console.log(this)}
            else{console.log(laptop)}
    }
    
}

let getcompared=()=>{
    if(laptop1.cpu>laptop2.cpu){console.log(laptop1)}
    else{console.log(laptop2)}
}
lap2.compare(lap1)
getcompared(lap1,lap2)