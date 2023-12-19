let data=new Map();

data.set("sala","javascript");
data.set("karthik","oracle");
data.set("manoj","celenium");
data.set("mukesh","Machine Learning");


console.log(data.keys());
console.log(data.values());
console.log(data.has("sala"));
console.log(data.get("sala"));

for(let [key,value] of data){
    console.log(key, ":" ,value)
}

data.forEach((value,key,a)=>console.log(key, ";" ,value, ";" ,a));
