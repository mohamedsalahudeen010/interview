let findMatch=value1=>{

    return value2=>{
    
         if(value1==value2){
    
             return x=> console.log(`${x}: ${value1} and ${value2} matches`);
    
         }else{
    
             return x=>console.log(`${x} does not match`);
    
         }
    
    }
    
    }
    
    let foo=findMatch("hello")("hi");
    
    let display=findMatch("hello")("hello");
    
    foo("Start");
    
    display("End");