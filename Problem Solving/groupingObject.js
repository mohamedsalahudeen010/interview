let objArr = [
    {
        name: 'john',
        age: 12,
        gender: 'male'
    },
    {
        name: 'jane',
        age: 15,
        gender: 'female'
    },
    {
        name: 'julie',
        age: 20,
        gender: 'trans'
    },
    {
        name: 'fathima',
        age: 15,
        gender: 'female'
    },
    {
        name: 'sala',
        age: 28,
        gender: 'male'
    },
    {
        name: 'malavika',
        age: 25,
        gender: 'female'
    },
];

let given="male"

let male=objArr.filter((ele,i)=>ele.gender===given);
let feMale=objArr.filter((ele,i)=>ele.gender==="female");

console.log(male)
console.log(feMale)

//if given is like "gender" only then
let key="gender";
let keyAge="age";
let resGroup={}
let grouping=(objArr)=>{
 let res=objArr.map((ele,i)=>{

    if(resGroup[ele[key]]){
        resGroup[ele[key]].push(ele)
    }
    else resGroup[ele[key]]=[ele]
 })
 return resGroup
}

const red=(key)=>{
    let obj=objArr.reduce((acc,ele,i)=>{
        if(acc[ele[key]]){
            acc[ele[key]].push(ele)
        }else acc[ele[key]]=[ele]
        return acc
    },{})
    return obj
    }
// console.log(red(key))
// console.log(red(keyAge))
console.log("Grouping with map",grouping(objArr))




















