let string="SalaSala";

// to assign a variableto expression
let value="ala"

const exp=new RegExp([/value+/g])
const exp2=new RegExp([value])
console.log(exp)
console.log(exp2)
let pattern=exp;
let pattern1=/[ala]/;
let pattern2=/ala/g;
let pattern3=/[ala]/g;
let pattern4=/[ala]+/gi;
let pattern5=/[ala]+/gi;

//=>exec()
//pattern.exec(string) 
//RETURN =>[ 'ala', index: 1, input: 'Sala', groups: undefined ] OR null

//=>test()
//pattern.test(string) RETURN =>true OR false

//pattern=/ala/;
console.log("PATTERN exec() :",pattern.exec(string)) 
//OUT=>[ 'ala', index: 1, input: 'SalaSala', groups: undefined ]
console.log("PATTERN test() :",pattern.test(string)) 
//OUT => true
console.log("PATTERN :",string.match(pattern)) 
//OUT=>[ 'ala', index: 1, input: 'SalaSala', groups: undefined ]

//pattern1=/[ala]/
console.log("PATTERN 1 exec() :",pattern1.exec(string))
//OUT=>[ 'a', index: 1, input: 'SalaSala', groups: undefined ]
console.log("PATTERN 1 test() :",pattern1.test(string))
//OUT=>true
console.log("PATTERN 1:",string.match(pattern1))
//OUT=>[ 'a', index: 1, input: 'SalaSala', groups: undefined ]

//pattern2=/ala/g
console.log("PATTERN 2 exec() :",pattern2.exec(string))
//OUT=>[ 'ala', index: 1, input: 'SalaSala', groups: undefined ]
console.log("PATTERN 2 test() :",pattern2.test(string))
//OUT=>true
console.log("PATTERN 2:",string.match(pattern2))
//OUT=>[ 'ala', 'ala' ]

//pattern3=/[ala]/g
console.log("PATTERN 3 exec() :",pattern3.exec(string))
//OUT=>[ 'a', index: 1, input: 'SalaSala', groups: undefined ]
console.log("PATTERN 3 test() :",pattern3.test(string))
//OUT=>true
console.log("PATTERN 3:",string.match(pattern3))
//OUT=>[ 'a', 'l', 'a', 'a', 'l', 'a' ]

//pattern4=/[ala]+/g
console.log("PATTERN 4 exec() :",pattern4.exec(string))
//OUT=>[ 'ala', index: 1, input: 'SalaSala', groups: undefined ]
console.log("PATTERN 4 test() :",pattern4.test(string))
//OUT=>true
console.log("PATTERN 4:",string.match(pattern4))
//OUT=>[ 'ala', 'ala' ]
