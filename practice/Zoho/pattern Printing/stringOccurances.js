let string="HeHHo";


const occurences=(string)=>{
    let occ={}
    let res
    const maxocc=(occ)=>{
        let max=Math.max(...Object.values(occ))
        for(let i in occ){
            if(occ[i]===max){
                res=i
            }
        }
    }

    for(let i=0;i<string.length;i++){
        if(occ[string[i]]){
            occ[string[i]]+=1
        }else{
            occ[string[i]]=1
        }
    }
    maxocc(occ)
    return res
}

console.log(occurences(string))