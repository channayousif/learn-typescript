#!/usr/bin/env node

/**
 * @Date 14-04-2024
 * @Project: Todo app
 * @author: Channayousif
 * @description: A simple command line Todo app
 * 
 */

import inquirer from "inquirer";
let todos=[];
console.log("------Welcome to Channayousif todo list App------")
while(true){
    const action= await inquirer.prompt([{
        message:"Please select desired option:",
        type:"list",
        name:"choice",
        choices:["Add items in list","view my to do list","Exit"]
    }])
    if (action.choice=="view my to do list"){
        console.log("------My todo list------")
        for(let i=0;i<todos.length;i++){
            console.log(`${i+1}. ${todos[i]}`);
        }
        console.log("------End of todo list------")
    }else if(action.choice=="Exit"){
        break
    }else {
        while(true){
        
            const todo= await inquirer.prompt([{
                message:"Please enter your item in todo list(Q or q to stop adding):",
                type:"input",
                name:"item"
            }])
            if(todo.item=="q"){
                break;
            }else if (todo.item!=""){
                todos.push(todo.item);
            }else {
                console.log("Empty, try again!");
                continue;
            }
            
        }
        
    }
}