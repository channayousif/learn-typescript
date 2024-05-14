#! /usr/bin/env node
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
import inquirer from "inquirer";
import chalk from "chalk";

const text= await inquirer.prompt([{
    name:"para",
    type:"input",
    message:"\nEnter your Text to count the words:"
}])
let x = text.para;
    x = x.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    x = x.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    x = x.replace(/\n /,"\n"); // exclude newline with a start spacing
    
console.log(x);
console.log(`Your Paragraph has ${chalk.bold.red(x.split(" ",).length)} words!`);

