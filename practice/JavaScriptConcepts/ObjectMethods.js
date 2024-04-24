
const obj={
    id:"sakc531",
    name:"sala",
    age:28
}
//1
//to get Values only 
//return array of values
console.log(Object.values(obj)) //=>[ 'sakc531', 'sala', 28 ]

//2
//to get Keys only
//return array of keys
console.log(Object.keys(obj)) //=>[ 'id', 'name', 'age' ]

//3
//To freeze Particular key value in an object
Object.defineProperties(obj,{id:{writable:false}})
//Now we can not change the value of id


//3
//To freeze Whole object
Object.freeze(obj)
//Now we can not change the values of this object

//4
//To copy Object
Object.assign(obj)


//5
Object.entries(obj)  //Return Objects into Array of Arrays
console.log(Object.entries(obj))
//=>Array [Array ["id", "sakc531"], Array ["name", "sala"],Array ["age", "28"]]

//6  transforms Array of Array into Key value paired Object
Object.fromEntries(entries)

const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42],
  ]);
  
  const objFromEntries = Object.fromEntries(entries);
  
  console.log(objFromEntries);
  // Expected output: Object { foo: "bar", baz: 42 }
  
  //7
  Object.hasOwn(object1, 'prop')
  const object1 = {
    prop: 'exists',
  };
  
  console.log(Object.hasOwn(object1, 'prop'));
  // Expected output: true
  
  console.log(Object.hasOwn(object1, 'toString'));
  // Expected output: false
  
  console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));
  // Expected output: false
  

  //8  => can Change the value baut cannot delete

  Object.seal(obj);
  const object2 = {
    property1: 42,
  };
  
  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1.property1);
  // Expected output: 33
  
  delete object1.property1; // Cannot delete when sealed
  console.log(object1.property1);
  // Expected output: 33
  