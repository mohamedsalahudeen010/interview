let a=['a', 'b'];
let b= [1, 2];
let c=[true, false]
let d=[false, true]
// ['a', 'b'], [1, 2], [true, false],[false, true]

let totalArray=[a,b,c,d]
//[['a', 1, true], ['b', 2, false]]
//[ [ 'a', 1, true, false ], [ 'b', 2, false, true ] ]
let n=a.length
let res=[]
const zip=(...args)=>{

    for(let i=0;i<args.length;i++){
        for(let j=0;j<args[i].length;j++){
            if(Array.isArray(res[j])){
                res[j].push(args[i][j])
            }else res[j]=[args[i][j]]
        }
    }

 return res
}
console.log(zip(a,b,c,d))