let password="Sala123@gmail";


const passwordValidation=(password)=>{

    //Check length;
    if(!password.length>=8 && !password.length<=15){
        return false
    }
    //Check Special Character
    // let specialChar=new RegExp("","g")
    if(/[@#$%^&*()]/.exec(password)==null)return false
    // if(/[@#$%^&*()]/.test(password)==false)return false

    //Check Numbers
    if(!password.match(/[0-9]/g))return false

    //Check Capital Alphabets
     if(!password.match(/[A-Z]/g))return false
    

     //Check Small Alphabets
     if(!password.match(/[a-z]/g))return false
     //CharCode for Small Alphabets= 97-122    

    return true
}


if(passwordValidation(password)){
    console.log(password)
}else console.log("Enter a Valid Password")




const passwordValidationSecondMethod=(password)=>{

    //Check length;
    if(!password.length>=8 && !password.length<=15){
        return false
    }
    //Check Special Character
    if(/[@#$%^&*()]/.exec(password)==null)return false
    // if(/[@#$%^&*()]/.test(password)==false)return false

    //Check Numbers
    let count=0;
    for(let i=0;i<=9;i++){
        if(password.includes(i)){
          count =1  
          break;
        }
    }
    if(count=0)return false

    //Check Capital Alphabets
    count=0;
    for(let i=65;i<=90;i++){    
        if(password.includes(String.fromCharCode(i))){
          count =1 
          break;  
        }
    }
    if(count==0)return false
    

     //Check Small Alphabets
     count=0;
     for(let i=97;i<=122;i++){    
         if(password.includes(String.fromCharCode(i))){
           count =1 
           break; 
         }
     }
     if(count==0)return false
     

    

     
    return true
}


if(passwordValidationSecondMethod(password)){
    console.log(password)
}else console.log("Enter a Valid Password")

