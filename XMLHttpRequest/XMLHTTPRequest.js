let request=new XMLHttpRequest();

request.open("GET","https://jsonplaceholder.typicode.com/users")

request.send()


request.onload=()=>{
    let res=JSON.parse(request.response);
    console.log(res)

    res.map((ele)=>{
        console.log(`
        Hello My name is ${ele.name},
        I am living in ${ele.address.city} and I am Working in ${ele.company.name} Company,
        You can contact me through email: ${ele.email} and 
        Phone : ${ele.phone}`)
    })
}