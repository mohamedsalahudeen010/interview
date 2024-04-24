let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
//top=1;right=1;bottom=1,left=1
const spiralMatrix=(matrix)=>{

    let res=[];
    let left =0;
    let right=matrix[0].length-1
    let top=0;
    let bottom=matrix.length-1
    // console.log(left,right,top,bottom)
    let direction="right";

    while(left<=right && top<=bottom){
        if(direction==="right"){
            for(let i=left;i<=right;i++){
                res.push(matrix[top][i])
            }
            top+=1
            direction="down"
        }
      else if(direction==="down"){
            for(let i=top;i<=bottom;i++){
                res.push(matrix[i][right]);
            }
            right-=1
            direction="left"
        }
        else if(direction==="left"){
           
            for(let i=right;i>=left;i--){
               
                res.push(matrix[bottom][i])
                
            }
            bottom-=1
            direction="up"
        }
        else if(direction==="up"){
            for(let i=bottom;i>=top;i--){
                res.push(matrix[i][left])
               
            }
            left+=1
            direction="right"
        }
    }


    return res
}

console.log(spiralMatrix(matrix))