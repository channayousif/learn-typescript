import inquirer from "inquirer";

async function student_menu(){
    const input= await inquirer.prompt({
    name:"opt",
    type:"list",
    message:"Welcome to our School Managment System, please select:",
    choices:["Students","Teachers","Staff"]
    })
    return input.opt
}
const res= await student_menu();
console.log(res);