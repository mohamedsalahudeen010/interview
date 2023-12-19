
let month="May";
let year=2016;

let n
if(month=="January"||month=="March"||month=="May" ||month=="July" ||month=="August"
||month=="October"||month=="December"){
    n=31
}
else if(month=="February" && (year%4===0 && year%100===0 || year%400===0) ){
    n=29
}
else if(month=="February"){
    n=28
}
else n=30;

const res=[];
for(let i=1;i<=n;i++){
    let count=0
    for(let j=1;j<=i;j++){
        if(i%j===0){
       count++; 
    }
    }
    if(count<=2){
        res.push(i);
    }
}
  //end-here
  console.log(res)