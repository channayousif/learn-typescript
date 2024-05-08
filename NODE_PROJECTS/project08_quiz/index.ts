import chalk from "chalk";
import inquirer from "inquirer";
let questions:{"id":number; "question":string; "a":string; "b":string; "c":string; "d":string}[] = 
[{"id":1,"question":"What is TypeScript?",
 "a":"A superset of JavaScript","b":"A subset of JavaScript",
"c":"A completely different programming language","d":"A variation of Python"},
{"id":2,"question":"Which of the following is true about TypeScript?",
 "a":"TypeScript code can be executed directly in a web browser",
 "b":"TypeScript code needs to be compiled to JavaScript before execution",
 "c":"TypeScript is only used for server-side development",
 "d":"TypeScript cannot work with existing JavaScript libraries"},
{"id":3,"question":"What is the file extension of TypeScript files?",
 "a":".js","b":".ts","c":".typescript","d":".txt"},
{"id":4,"question":"Which of the following is a key feature of TypeScript?", 
"a":"Strong typing","b":"Dynamic typing","c":"Weak typing","d":"No typing system"},
{"id":5,"question":"In TypeScript, what keyword is used to declare a variable?",
 "a":"var","b":"let","c":"const","d":"All of above"},
 {"id":6,"question":"What does the \"type assertion\" feature in TypeScript allow you to do?",
 "a":"Convert one data type to another","b":"Define custom data types",
 "c":"Declare variables without assigning a value","d":"None of the above"},
 {"id":7,"question":"Which of the following is NOT a valid data type in TypeScript?",
 "a":"number","b":"boolean","c":"undefined","d":"character"},
 {"id":8,"question":"What does the \"interface\" keyword allow you to do in TypeScript?",
 "a":"Define a class","b":"Define the structure of an object",
 "c":"Define a function","d":"Define a loop"},
 {"id":9,"question":"Which of the following is true about TypeScript's compatibility with JavaScript?",
 "a":"TypeScript is fully compatible with all JavaScript code",
 "b":"TypeScript requires significant modifications to work with existing JavaScript code",
 "c":"TypeScript cannot interact with JavaScript code at all",
 "d":"TypeScript can only work with JavaScript code if it's rewritten from scratch"},
 {"id":10,"question":"What tool is commonly used to compile TypeScript code into JavaScript?",
 "a":"TSC (TypeScript Compiler)","b":"JSCompiler","c":"Babel","d":"Webpack"}
];

let answers :{"id":string,"ans":string}[]=[
    {"id":"a", "ans":"A superset of JavaScript"},
{"id":"b", "ans":"TypeScript code needs to be compiled to JavaScript before execution"},
{"id":"b", "ans":".ts"},
{"id":"a", "ans":"Strong typing"},
{"id":"d", "ans":"All of the above"},
{"id":"a", "ans":"Convert one data type to another"},
{"id":"d", "ans":"character"},
{"id":"b", "ans":"Define the structure of an object"},
{"id":"a", "ans":"TypeScript is fully compatible with all JavaScript code"},
{"id":"a", "ans":"TSC (TypeScript Compiler)"},
];
let i=0;
let correct=0;
let incorrect=0;
while(true){
    if(i>9){
        break;
    }

let ask =await inquirer.prompt({
    name:"question",
    type:"list",
    message:questions[i].question,
    choices:[questions[i].a,questions[i].b,questions[i].c,questions[i].d,"End this Quiz"]
})
if(ask.question=="End this Quiz"){
    break;
}
if(ask.question==answers[i].ans){
    correct++
    console.log("===================================================================");
  console.log(`${chalk.bold.green("Correct")} ${answers[i].id} ${answers[i].ans}`);
  console.log("===================================================================");
}else{
    incorrect++
    console.log("==================================================================");
    console.log(`${chalk.bold.red("Incorrect")} ${answers[i].id} ${answers[i].ans}`);
    console.log("==================================================================");
}
i++;
}
console.log(`${chalk.bold.green("congratulations")} you have completed the Quiz. \nResult: ${chalk.bold.green(correct, "questioons correct")}, ${chalk.bold.red(incorrect, "questions incorrect")}`);