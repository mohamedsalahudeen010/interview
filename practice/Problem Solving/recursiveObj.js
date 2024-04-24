
let user={
    name:"sala",
    address:{
        permenant:{
            door_No:523,
            area:"vadakku street",
            town:"valinokkam",
            city:"Ramanathapuram",
            state:"TamilNadu",
            pinCode:623528
        },
        Residendial:{
            door_No:3006,
            area:"Nehru nagar",
            town:"Ramanathapuram",
            city:"Ramanathapuram",
            state:"TamilNadu",
            pinCode:623528
        }
    }
}
let res={};
//Output will be like user_address_permenant_area:"vadakku street",
const objFlat=(obj,parent)=>{
        for(let key in obj){
            if(typeof obj[key]==="object" && !Array.isArray(obj[key])){
                objFlat(obj[key],parent + "_" + key)
            }else{
                res[parent + "_" + key]=obj[key]
            }
        }   
        return res
}

console.log(objFlat(user,"user"))

//To get final value of object
// user_name: 'sala',
// user_door_No: 3006,
// user_area: 'Nehru nagar',
// user_town: 'Ramanathapuram',
// user_city: 'Ramanathapuram',
// user_state: 'TamilNadu',
// user_pinCode: 623528
let res2={}
const finalVal=(obj,parent)=>{
    for(let i in obj){
        if(typeof obj[i]==="object" && !Array.isArray(obj[i])){
            finalVal(obj[i],parent)
        }
        else{
            res2[parent+"_"+i]=obj[i]
        }
    }
    return res2
}

console.log(finalVal(user,"user"))