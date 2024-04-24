let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=["hi","hello","Greetings"]
//1,at=> to find value at particular index (array.at())

console.log("arr.at:",arr1.at(1));

//2, concat=> to merge arrays CONCAT (array1.concat(array2,array3))
// to add any value in array like push CONCAT (array1.concat(5)) => 5 will be added at the end
console.log("arr.concat:",arr1.concat(arr2));

let copyArr=[1,2,3,4,5,6,7,8,9,10];
// 3,copyWithIn=> to copy elements within Array (array.copyWithIn(1,3)=>
//here values in 2 and 3 will be removed and 
//does not change the length of array reduced spaces will be replaced by elements at back
//array length will be same,
// make changes in  exixsting array itself so that commented
console.log("copyWithIn:",copyArr.copyWithin(1,3)) //OUT =>copyWithIn: [1, 4,  5, 6,  7,
                                                                     // 8, 9, 10, 9, 10 ]

// 4, every => every element in the array should satisfies a condition then output will be true, 
//if single value failed the contition then return false
//console.log(arr1.every((ele)=>ele<20)) //out => true, changes array into true ot false
let everyFunc=arr1.every((ele)=>ele<20); //does not affect array
console.log("every:",everyFunc)

//4b, "OPPOSITE To EVERY"
// some =>any one of the element in array satisfies a condition then output will be true, 
let someFunc=arr1.some((ele)=>ele>9); //does not affect array, out=>true
console.log("some:",someFunc)

// 5,fill => will fill the value based on start and end, 
//change element of original ARRAY does not affect the length of array,
//affects Original array so that commented
let filArr=[1,2,3,4,5,6,7,8,9]
let fillEmpty=[]
// i,fill(value),
let fill1=filArr.fill(2)

let fill2=Array(3).fill()
 console.log("fill : 1 =>",fill1) //out=>[2, 2, 2, 2, 2, 2, 2, 2, 2, 2] 
 console.log("fill: 2 => ",fill2)

//ii,fill(value, start),
let fill3=filArr.fill(4, 1)
 console.log("fill 3 ::",fill3) 
 //out=>[
//   2, 4, 4, 4, 4,
//   4, 4, 4, 4
// ]

//iii,fill(value, start, end)
// let fill4=arr1.fill(2,5,7)
// console.log("fill",fill4) //out=>[1, 4,  5, 6,  7, 2, 2, 10, 9, 10]
console.log("Fill Samaple ::",[1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]

//6A,find returns the first element that satisfies the condition,iterate from font
let find=arr1.find((ele)=>ele>5);
console.log("find : ",find) //out =>6 and returns undefined when there is no value while find

//6B,findLast returns the Last element that satisfies the condition,iterate from Last
let findLast=arr1.findLast((ele)=>ele>5);
console.log("findLast : ",find) //out =>6 and returns undefined when there is no value while find

//7a, findIndex() used to find index of first element which satisfies condition
let findIndexWithCondition=arr1.findIndex((ele)=>ele>2)
console.log("findIndexWithCondition :",findIndexWithCondition) 
//out=>2 (3 is greater than 2 and it is in 2nd index) , 
//returns -1 when no value
//7b, findLastIndex() used to find index of last element which satisfies condition
let findLastIndexWithCondition=arr1.findLastIndex((ele)=>ele>2)
console.log("findLastIndexWithCondition :",findLastIndexWithCondition) //out=>2 3 is greater than 2 and it is in 2nd index , returns -1 when no value

//8 indexOf() used to find index with certain value
let findIndexWithValue=arr1.indexOf(2)
console.log("findIndexWithValue :",findIndexWithValue)



//9 flat uses to flat array =>does not affect original array
let flatArr=["mainArr",1,8,65,4,6,["arr1",4,5,1,5,["arr2",45,415,11,["arr3"]]]]
//to flat first nested array default value is 1
console.log("Flat first nested Array :",flatArr.flat())//out =>['mainArr',1,8,65,4,6,'arr1',4,5,1,5,[ 'arr2', 45, 415, 11, [ 'arr3' ] ]]
//to flat nth nested array => console.log(flatArr.flat(n))
console.log("Flat n nested Array :",flatArr.flat(2))//out =>['mainArr',1,8,65,4,6,'arr1',4,5,1,5,'arr2', 45, 415, 11, [ 'arr3' ]]
//to flat all nested array => console.log(flatArr.flat(infinity))
console.log("Flat All nested Array :",flatArr.flat(Infinity));


//10 map and flatMap
const mapArr=[1,5,6,3,2,41,6,2,4]
//diff B/W map and flatMap is outpu is flatted into one stage
console.log(mapArr.map((ele)=>ele===2?[2,2]:1))//OUT=>[ 1, 1, 1, 1, [ 2, 2 ], 1, 1, [ 2, 2 ], 1 ]
console.log(mapArr.flatMap((ele)=>ele===2?[2,2]:1)) //OUT=>[ 1, 1, 1, 1, 2, 2 , 1, 1, 2, 2, 1 ]
//ANOTHER EXAMPLE

const mapString=["hello I am Good"]
console.log(mapString.map((ele)=>ele.split(" "))) 
//OUT=>[ [ 'hello', 'I', 'am', 'Good' ] ]
console.log(mapString.flatMap((ele)=>ele.split(" "))) 
//OUT=>['hello', 'I', 'am', 'Good'];

//11, Set =>removes duplicate in array

const setArray=[1,2,3,5,2,3,4,2,5]

console.log(new Set(setArray)) //Out =>Set(5) { 1, 2, 3, 5, 4 },output will be an object
console.log([new Set(setArray)]) //Out =>[Set(5) { 1, 2, 3, 5, 4 }],output will be an object inside an array
console.log(...new Set(setArray)) //Out =>1, 2, 3, 5, 4 output will be an values
console.log([...new Set(setArray)]) //Out =>[1, 2, 3, 5, 4] output will be an array of elements

//12 from=> Shallow copy an array from different array and does not disturb original array

let fromArray=["wewefwefwe","wwwwg",["Sala"]]
console.log("fromArray 1 :::",fromArray)
let newFromArray=Array.from(fromArray);
newFromArray[2][0]="SALA"
console.log("newFromArray ::::",newFromArray) //OUT=>[ 'wewefwefwe', 'wwwwg',["Sala"] ]
console.log("fromArray 2 :::",fromArray)

//And can do map functions also
let newFromArray2=Array.from(fromArray,(x)=>x+" MAP-ADDED")
 //OUT=>[ 'wewefwefweMAP-ADDED', 'wwwwgMAP-ADDED' ]
newFromArray2[0]="SALA"
console.log("newFromArray2 :::",newFromArray2)
console.log("fromArray 3 :::",fromArray)

///13, includes => check the value inside array or not

let includeArray=[1,2,3,5,6,3,1,5];
let resIncludeArray=[2]

includeArray.map((ele)=>{
    if(!resIncludeArray.includes(ele)){
        resIncludeArray.push(ele)
    }
})

console.log("includes :",resIncludeArray)


//14 Array.isArray =>to check the passed value is array or not

console.log(Array.isArray(arr1))//out => true

//15,Array AND Array.of =>to create array statically

console.log("Array.of : ",Array.of(10,20));//out=>[ 10, 20 ]
console.log("Array : ",Array(10).length) //out=> [ <10 empty items> ] create empty array with nth index
console.log("Array : ",[...new Array(10)])
// out => [undefined, undefined, undefined, undefined, undefined, 
// undefined,undefined, undefined, undefined, undefined ]


//16, slice =>Does not affect original array,only take values from original array and returns it as new array
//just take values from array based on conditions
//Syntax : array.slice(startIndex,endIndex)
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log("Slice :",animals.slice(2));//out=>  ["camel", "duck", "elephant"]
console.log("Slice :",animals.slice(2,4));//out=>  ["camel", "duck"]
console.log("Slice :",animals.slice(-2));//out=>  ["duck", "elephant"]
console.log("Slice :",animals.slice(2, -1));//out=>[ 'camel', 'duck' ]
console.log("Slice :",animals.slice(2, 4));//out=>[ 'camel', 'duck' ]
console.log("Slice :",animals)

//17,splice => make changes In original array , can add and remove elements in original array
// SYNTAX : splice(start, deleteCount, item1ToAdd, item2ToAdd,....)
const animalsSplice = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log("Splice :",animalsSplice.splice(2));//out=>[ 'camel', 'duck', 'elephant' ];
console.log("Splice 1:",animalsSplice)
// console.log("Splice :",animalsSplice.splice(2,1));//out=>[ 'camel' ]
// console.log(animalsSplice)//out=>[ 'ant', 'bison', 'duck', 'elephant' ]
// console.log("Splice :",animalsSplice.splice(-2));//out=>[ 'duck', 'elephant' ]
console.log("Splice :",animalsSplice.splice(2,-1));//out=>[],because delete count is -1 so no element is deleted
console.log("Splice 2:",animalsSplice)
console.log("Splice 3:",animalsSplice)//out=>[ 'ant', 'bison' ]
// console.log(animalsSplice.splice(1,0,"Lion","Tiger"))//out=>[] here it is adding element in array so that out is []
// console.log(animalsSplice)//out=>[ 'ant', 'Lion', 'Tiger', 'bison' ]

//18. array.reduce() and array.reduceRight();

//19 array.toReversed() and array.reverse()
// main diff b/w array.reverse() and array.toReversed()
//array.reverse() => make changes in original array
//array.toReversed()=> does not disturb original array returns new array
let reverseArr=[1,2,3,4,5,6]
let resReverseArr=reverseArr.toReversed()
console.log("toReversed : ",resReverseArr)

//20 array.sort() and array.toSorted()
//array.sort() =>make changes in original array
// array.toSorted() =>does not disturb original array returns new array

//21 arr.splice() and arr.toSpliced()
//arr.splice() =>make changes in original array
// arr.toSpliced() =>does not disturb original array returns new array

//22 array.with(index, value)=>replace a value in array with the index and value given as arguement
//does not affect original array
let withArray=[1,2,3,4,5,6];

console.log("WITH Method : ",withArray.with(1,5))//OUT=>WITH Method :  [ 1, 5, 3, 4, 5, 6 ]
console.log(withArray)//OUT=>[ 1, 2, 3, 4, 5, 6 ]
