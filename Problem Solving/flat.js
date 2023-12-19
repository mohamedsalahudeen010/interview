
//Array Flat without flat method
let arr=[1,[5],2,[1,5,[5]]]
let res=[];
let res2=[];

const flat1=(arr)=>{
 
    for(let i of arr){
        if(Array.isArray(i)){
            flat1(i)
        }
        else res=[...res,i]
    }
    return res
}

console.log("WIth ForOf111222 : ",flat1(arr))

//Using ForEach

const flat2=(arr)=>{
arr.forEach((ele,i)=>{
if(Array.isArray(ele)){res2=[...res2,...flat2(ele)]}
else res2.push(ele)
})
return res2
}

console.log("WIth ForEach : ",flat2(arr))
console.log("WIth ForEach : ",arr.flat(Infinity))
let flatArray1 = [].concat(...arr);
console.log("ConCat",flatArray1)
//with flat method
console.log(arr.flat(Infinity))

//Object Flat

let a={ a: 1, b: { c: 2 }, d: { e: { f: 3 } } }


function flattenObject(ob) {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}

console.log(flattenObject(a))


let resjdjo=[]
const flatArray=(arr)=>{
    for(let key of arr){
        if(Array.isArray(key)){
            resjdjo=[...resjdjo,...flatArray(key)]
        }
        else resjdjo.push(key)
    }
    return resjdjo
}

console.log("flatArray:::::",flatArray(arr))