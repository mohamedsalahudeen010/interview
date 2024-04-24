// out=>
        // *
        // * *
        // * * *
        // * * * *


// const patternPrinting=(n)=>{
//     let string="";

//     for(let i=1;i<=n;i++){
//         string+=" "+i
//         console.log(string.trim())
//     }
// }

// patternPrinting(6)

//Floyd's Triangle


const patternPrintingFloydTriangle=(n)=>{
    let k=1;
    let end=1;

    const floydTriangle=(end)=>{
        let string="";
        for(let i=0;i<end;i++){
            string+=" "+k;
            k++
        }
        console.log(string)
        if(end<=n){
            floydTriangle(end+1)
        }
    }

    floydTriangle(end)

}
   
patternPrintingFloydTriangle(4)