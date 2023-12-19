//MAP-FILTER-REDUCE//
                                                  
      //MAP//
      
      let arr=[1,2,3,5,6,7,4,58,8];             

      //to double the values in array arr
      
      let output1=arr.map((arr)=>arr*2);
      console.log(output1);
      //===============================//
      let output2=arr.map(function(arr){
          return arr*2});
      console.log(output2);
      
      //to triple the values in array arr
      
      let triple1=arr.map((arr)=>arr*3);
      console.log(triple1);
      //===============================//
      let triple2=arr.map(function(arr){
          return arr*3});
      console.log(triple2);
      
      
      //to convert the values into binary numbetrs in array arr
      
      let binary1 = arr.map((arr)=>arr.toString(2));
      
      console.log(binary1);
      //===============================//
      
      let binary2= arr.map(function(arr){
          return arr.toString(2);
      });
      console.log(binary2);
      
             //FILTER//
             
      //to filter the array arr less 5
      
      let filter1=arr.filter((arr)=>arr<8);
      
      console.log(filter1);
      
      //===============================//
      
      let filter2=arr.filter(function(arr){
          return arr<8;
          });
          console.log(filter2);
      
        //to find add Number
        
        let filter3=arr.filter((arr)=>{
            if (arr%2!==0)
            return arr;
        });
        console.log(filter3);
        //===============================//
          //to find even
          let filter4=arr.filter((arr)=>{
              if(arr%2===0)
              return arr;
          });
           console.log(filter4);  
           
              //REDUCE//
             //to sum all values 
      let reduce1=arr.reduce((acc,cv)=>acc=acc+cv,0);
      console.log(reduce1);
      
       //===============================//
       //to multiply all values
       let reduce2=arr.reduce((acc,cv)=>acc*=cv,1);
       console.log(reduce2);
        //===============================//
        let reduce3=arr.reduce(function(acc,cv){
            acc*=cv;
            return acc;
        },1);
             console.log(reduce3);
      //to find max element in array
      let reduce4=arr.reduce((acc,cv)=>{
      if(acc<cv){
      acc=cv;
      }    return acc;
      },0);
      console.log(reduce4);
      
      //to find min element in array
      let reduce5=arr.reduce((acc,cv)=>{
          if(acc>cv){
          acc=cv;
          }
          return acc;
      },100);
      console.log(reduce5);