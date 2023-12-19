class car{
    constructor(brand,color,topspeed,mileage,drive){
        this.brand=brand,
        this.color=color,
        this.topspeed=topspeed,
        this.mileage=mileage,
        this.drive=drive
    }
}

let car1=new car("Audi","red","260 Kmph","9 Kmpl",4);
let car2=new car("BMW","black","270 Kmph","8 Kmpl",2);
let car3=new car("Benz","white","250 Kmph","10 Kmpl",2);
let car4=new car("Masaratti","smokegrey","220 Kmph","11 Kmpl",4);
let car5=new car("Bentley","pearlwhite","230 Kmph","10 Kmpl",2);
let car6=new car("Citreon","red","190 Kmph","12 Kmpl",4);
let car7=new car("Jaguar","black","260 Kmph","9 Kmpl",2);
let car8=new car("Fort-Mustang","yellow","270 Kmph","7 Kmpl",2);
let car9=new car("Lambhorghini","red","300 Kmph","4 Kmpl",2);


console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);
console.log(car8);
console.log(car6);
console.log(car9);
console.log(car7);

function getLessMilage(arr){
  let res=[];
  for(let i=0;i<arr.length;i++){
  if(arr[i].mileage<"7 Kmpl") {res.push(arr[i].brand)} 
    }
  return res
}

console.log(getLessMilage([car1,car2,car3,car4,car5,car6,car7,car8,car9]))