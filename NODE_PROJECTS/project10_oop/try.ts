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
//const res= await student_menu();
console.log(Date());

 let x=[1,2,3,4];

 let n={"a":1,
    asd:4,
    as:223 }
    console.log(n.as)
    let coursefeeData = [
        { course: "Typescript", fee: 1000 },
        { course: "HTML", fee: 1000 },
        { course: "CSS", fee: 1000 },
        { course: "NEXT.js", fee: 1000 },
        { course: "Python", fee: 1000 },
        { course: "Other", fee: 1000 },
      ];
      let xyz=coursefeeData.map(val=>val.course);
      console.log(xyz)