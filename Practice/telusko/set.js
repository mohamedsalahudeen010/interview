let obj=new Set();

obj.add(46);
obj.add("sala");
obj.add(556);
obj.add("sathish");
obj.add(56);
obj.add(5454);
obj.add("Sala");

obj.add("sathish");
obj.add(56);
obj.add(5454);
obj.add(56);

for(let i of obj){
console.log(i)}

obj.forEach((ele,i)=>console.log(ele,i))

console.log(obj.has("ala"))