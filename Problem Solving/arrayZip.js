let a=['a', 'b'];
let b= [1, 2];
let c=[true, false]
let d=[false, true]
// ['a', 'b'], [1, 2], [true, false],[false, true]


//[['a', 1, true], ['b', 2, false]]
//[ [ 'a', 1, true, false ], [ 'b', 2, false, true ] ]

const zip=(a,b,c,d)=>{
return a.map((ele,i)=>[ele,b[i],c[i],d[i]])
}
console.log(zip(a,b,c,d))