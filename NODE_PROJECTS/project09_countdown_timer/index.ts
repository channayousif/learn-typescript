#!/usr/bin/env node
import inquirer from "inquirer";

let time;
let val=await inquirer.prompt({
    name : "val",
    type:"input",
    message:"Enter nmber of seconds for contdown:"
});
//while(true){
    time= Math.floor(Date.now()/1000 + Number(val.val)+2);

//console.log(time,Math.floor(Date.now()/1000),Number(val.val))
let intid=setInterval(()=>{
    console.log(Math.floor(time - Date.now()/1000));
    if(Math.floor(time - Date.now()/1000)<=0){
        console.log("Timer Ends.... Exting");
        clearInterval(intid);
    }
},1000)