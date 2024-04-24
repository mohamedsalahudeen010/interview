
const hallowRectangle=(r,c)=>{
    let k=1;
    const rect=(k)=>{
        let string="";
        for(let i=1;i<=c;i++){
            if(k==1 || k==r){
                string+=" " +"*" 
            }
            else if(i==1 || i==c){
                string+=" "+"*"
            }else{
                string+=" " +" "
            }

        }
        console.log(string)
        if(k<r){
            rect(k+1)
        }
    }
    rect(k)
}


hallowRectangle(5,5)