let otp="";

let variables="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

let length=variables.length;

for(let i=0;i<6;i++){
  
  otp +=Math.floor(Math.random()*10)
}

console.log(otp)

