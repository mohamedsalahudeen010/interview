let num=1
function call(){
    console.log("hi" ,":",num);
    num++
    call()
}
call()