
 let arr=[3,4,3,5,3,6];

let counts={}

let result=[];

let result2=[]

for(let i=0;i<arr.length;i++){
  if(counts[arr[i]]){counts[arr[i]] +=1}
  else {counts[arr[i]]=1}
  }
  
  console.log(counts) //OUT=>{ '3': 3, '4': 1, '5': 1, '6': 1 }
  //
  for(let i in counts){
    result.push(`${i}:${counts[i]}`)
  }
  console.log(result) //OUT=>[ '3:3', '4:1', '5:1', '6:1' ]
  
  for(let i in counts){
    if(counts[i]===3){
      result2.push(i)
    }
  }
  console.log(result2)//OUT=>[ '3' ]


  let arr1=[1,2,58,3,6,49,45,96,4,1,5,9641,69,4745,69,4,94569,46,549,49,6,49,4,1,69461,6]

  let occurence={};

  // occurence[arr1[0]]

  let func=(arr1)=>{
    arr1.map((ele,i)=>{
      if( occurence[ele]){occurence[ele] +=1}
      else occurence[ele]=1
    }
    )
    return occurence
  }

  console.log(func(arr1))

  let occurenceArray=[];

  for(let i in occurence){
    occurenceArray.push(`${i} : ${occurence[i]}`)
  }

  console.log(occurenceArray)

  let maxOcc=[]
  for(let i in occurence){
    if(occurence[i]>=2){
      maxOcc.push(`${i}:${occurence[i]}`)
    }
  }
  console.log(maxOcc)



//   " Write a  js program which will build an object which is containing the keys as the integers of
//  arrays and their values will be the count of occurrences of that integer in the array. Add an integer
//  to that object             
// Eg: data = [4, 6, 2, 8, 9, 2, 6, 7, 6],
// output = { 6: 3,2: 2}

let data = [4, 6, 2, 8, 9, 2, 6, 7, 6]

let dataOcc={}
for(let i in data){
    if(dataOcc[data[i]]){
      dataOcc[data[i]] +=1
    }else dataOcc[data[i]]=1
}

console.log("dataOcc ::", dataOcc)

for(let key in dataOcc){
  if(dataOcc[key]<=1){
    delete dataOcc[key]
  }
}

console.log("dataOcc ::", dataOcc)


// "Write a Javascript Function to find the Number of  Occurrence of Each String in the Array,  can use any one of the Method Map, Filter, Object Method, For, Foreach 


// Input = [""jack"",""And"",""jack"", ""jill"",""jack"",""jill""]

// Expected output: [""jack"": 3, ""jill"": 2,""And"":1]


// Output may be a  [Key : Val ]- List      or       {Key : Val }- Object "

let input = ["jack","And","jack","jill","jack","jill"];


let inputOcc={};

input.forEach((ele)=>{
  if(inputOcc[ele]){inputOcc[ele]+=1}
  else inputOcc[ele]=1
})

const sortable=Object.fromEntries(Object.entries(inputOcc).sort(([,a],[,b])=>a-b))
console.log("inputOcc : : ",inputOcc);
console.log("sortable : : ",sortable);


