let given=13;

let dolus=[2,3,5];


const dolusNumber=(given,dolus)=>{
    while(given%dolus[0]===0){
        given=parseInt(given/dolus[0])
    }
    while(given%dolus[1]===0){
        given=parseInt(given/dolus[1])
    }
    while(given%dolus[2]===0){
        given=parseInt(given/dolus[2])
    }
    if(given===1)return true
    else return false
}


console.log(dolusNumber(given,dolus))



//If we want to check the numbers between range that are dolus

const dolus1=(left,right)=>{
    let res=""
    for(let i=left;i<=right;i++){
        let start=i
        while(start%2===0){
            start=parseInt(start/2,10)
        }
        
        while(start%3===0){
            start=parseInt(start/3,10)
        }
        while(start%5===0){
            start=parseInt(start/5,10)
        }
        if(start===1){
            res+=" "+i
        }
    }
    return res
}

console.log(dolus1(10,20))