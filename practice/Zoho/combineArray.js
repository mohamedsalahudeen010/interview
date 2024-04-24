let input=[[1,3],
    [2,4,6],
    [0,9,10,11]]

    const mergeFunc=(input)=>{

        let res=[]
        for(let i=0;i<input.length;i++){
            res.push(...input[i])
        }
        return res.sort((a,b)=>a-b).join(" ")
    }

    console.log(mergeFunc(input))