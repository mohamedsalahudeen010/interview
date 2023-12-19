import fs from "fs"
import os from "os"
import { argv } from "process"

//fs.writeFile()
//fs.readFile()
//fs.appendFile()
//fs.unlink()

//To create a file 
let content="Hello this is new file"
fs.writeFile("./New.txt",content,(err,data)=>{
    if(err){console.log(err)}
    else console.log(data)
})

//To Read a file 
fs.readFile("./New.txt","UTF-8",(err,data)=>{
    if(err){console.log(err)}
    else console.log(data)
})

//To Update a file 
fs.appendFile("./New.txt","Added Extra",(err,data)=>{
    if(err){console.log(err)}
    else console.log(data)
})
fs.writeFile("./New.txt","HI",(err,data)=>{
    if(err){console.log(err)}
    else console.log(data)
})
//To read a file 
fs.readFile("./New.txt","UTF-8",(err,data)=>{
    if(err){console.log(err)}
    else console.log(data)
})

//To delete a file 
fs.unlink("./New.txt",(err,data)=>{
    if(err){console.log(err)}
    else console.log(data)
})

//can take values from terminal

const [ , ,value]=process.argv
console.log("Value taken from Process.argv : ",value)