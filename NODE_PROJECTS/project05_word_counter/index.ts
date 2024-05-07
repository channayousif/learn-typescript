#!/usr/bin/env node
/**
 * @date:16-04-2024
 * @project: 05
 * @author: Channayousif
 * @description: The user will enter a english paragraph and all that is needed is 
 * to just to implement counting characters and words without whitespaces.
 * 
 * 
 * 
 */
import inquirer from "inquirer"

const text= await inquirer.prompt([{
    messag:"Enter your Text to count the words:",
    name:"para",
    type:"input"
}])
let x = text.para;
// console.log(x);
// while(x.search("  ")>0){
//     console.log(x.search("  "))
//     x = x.replace("  "," ");

//     console.log(x);
// }
    x = x.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    x = x.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    x = x.replace(/\n /,"\n"); // exclude newline with a start spacing
    
console.log(x);
console.log(`Your Paragraph has ${x.split(" ",).length} words!`);
//console.log(text);
//console.log(text.para.replace("  "," "));
