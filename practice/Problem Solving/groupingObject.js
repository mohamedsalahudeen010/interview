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

let res={};

const grouping=(obj,key)=>{

    for(let val of obj){
        if(res[val[key]]){
            res[val[key]].push(val)
        }
        else {
            res[val[key]]=[val]
        }
    }
    return res
}

console.log(grouping(objArr,key))
















