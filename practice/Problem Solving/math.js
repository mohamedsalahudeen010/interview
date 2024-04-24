
let month="FeBruarY";
let year=2000;
month=month.toLowerCase()
let n
if(month=="january"||month=="march"||month=="may" ||month=="july" ||month=="august"
||month=="october"||month=="december"){
    n=31
}
else if(month=="february" && ((year%4===0 && year%100!==0) || year%400===0)) {
    n=29
}
else if(month=="february"){
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

  console.log(year%400)
  console.log(year%100)
  console.log(year%4)