#! /use/bin/env node 
/**
 * @Date: 13-04-2024
 * @Project: 2
 * @author: channayousif
 * 
 * 
This somewhat complex TypeScript/Node.js project is a console-based application.
 When the system starts the user is prompted with a user id and user pin. 
 After entering the details successfully,
 the ATM functionalities are unlocked. All the user data is generated randomly. 
 */

//When the system starts the user is prompted with a user id and user pin
import inquirer from "inquirer";
console.log(" ----------------------------------")
console.log("|----Welcome to channayousif ATM----|")
console.log(" ----------------------------------")
const user_input = await inquirer.prompt([
    {
        message:"Please enter your pin to proceed:",
        name:"pin",
        type: "password"
}])
let x:boolean=true;
let acc_bal = 100000000000000;
while(x==true){
    console.log("*****************----------------------------------************")
if(user_input.pin==="1234"){
    const user_input = await inquirer.prompt([
        {
            message:"Please select desired operation:",
            name:"op",
            type: "list",
            choices:["Fast cash","Cash Withdrawal","Balance inquiry","Cancel"]
    }])
switch(user_input.op){
    case "Fast cash":
        const fc = await inquirer.prompt([
            {
                message:"Please select desired operation:",
                name:"fastcash",
                type: "list",
                choices:["500","1000","2000","5000","10000","15000","20000","Cancel"]
        }]);
        if(fc.fastcash<acc_bal){
            acc_bal= acc_bal-fc.fastcash;
            console.log(`Please collect your cash ${fc.fastcash} Rupees.\nYour current balance is ${acc_bal}`)
        }else{
            console.log(`Insufficient funds, please try again`)
        }
        break;
    case "Cash Withdrawal":
        const cw = await inquirer.prompt([
            {
                message:"Please enter the desired amount (in multiples of 500):",
                name:"cashw",
                type: "input",
        }]);
        if(cw.cashw<acc_bal){
            acc_bal= acc_bal-cw.cashw;
            console.log(`Please collect your cash ${cw.cashw} Rupees.\nYour current balance is ${acc_bal}`)
        }else{
            console.log(`Insufficient funds, please try again`)
        }
        break;
        
    case "Balance inquiry":
        console.log(`Your account has ${acc_bal} Rupees`);
        break;
    case "Cancel":
        x=false;
        break;
    default :
        
}
}
}