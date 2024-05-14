#!/usr/bin/env node
/**
 * School  NManagment System
 *
 * Teachers
 * Students
 * Staff
 * Courses
 * Fees
 * Salaries
 * Attendance
 */
import chalk from "chalk";
import inquirer from "inquirer";

console.log("---------------------------------------------------");
console.log(
  `|----------${chalk.bold.red("XYZ School Managment System")}------------|`
);
console.log("---------------------------------------------------");
console.log("Welcome to XYZ School                     -channayousif");

//MENU
async function main_menu() {
  while (true) {
    const input = await inquirer.prompt({
      name: "opt",
      type: "list",
      message: "Main MENU, please select:",
      choices: ["Students", "Teachers", "Staff", "Exit"],
    });
    let main = input.opt;
    if (main == "Students") {
      await student_menu();
    }
    if (main == "Teachers") {
      await teachers_menu();
    }
    if (main == "Staff") {
      await staff_menu();
    }
    if (main == "Exit") {
      process.exit();
    }
  }
}

async function teachers_menu() {
  console.log("teachers");
  const input = await inquirer.prompt({
    name: "opt",
    type: "list",
    message: "Teachers MENU, please select:",
    choices: [
      "Add a new teacher",
      "view existing teacher details",
      "Mark attendance",
      "Go to previous menu",
      "Exit",
    ],
  });
  let res = input.opt;
  if (res == "Add a new teacher") {
    console.log("Add new teacher");
  }
  if (res == "Mark attendance") {
    console.log("Mark Attendance");
  }
  if (res == "view existing teacher details") {
    console.log("modify a teacher");
  }
  if (res == "Go to previous menu") {
    console.log("prev menu");
    await main_menu();
  }
  if (res == "Exit") {
    console.log("Exit");
    process.exit();
  }
}
async function staff_menu() {
  console.log("staff member menu");
  const input = await inquirer.prompt({
    name: "opt",
    type: "list",
    message: "Staff MENU, please select:",
    choices: [
      "Add a new staff member",
      "Modify an existing staff member",
      "Go to previous menu",
      "Exit",
    ],
  });
  let res = input.opt;
  if (res == "Add a new staff member") {
    console.log("Add new staff");
  }
  if (res == "Modify an existing staff member") {
    console.log("modify staff member");
  }
  if (res == "Go to previous menu") {
    console.log("prev menu");
    await main_menu();
  }
  if (res == "Exit") {
    console.log("Exit");
    process.exit();
  }
}
async function student_menu() {
  const input = await inquirer.prompt({
    name: "opt",
    type: "list",
    message: "Students MENU, please select:",
    choices: [
      "Add a new student",
      "Existing student Record",
      "Go to previous menu",
      "Exit",
    ],
  });
  let res = input.opt;
  if (res == "Add a new student") {
    console.log("Add new student");
    await mgtsys.createStu();
  }
  if (res == "Existing student Record") {
    console.log("View/Change Existing student Record Menu");
    await mgtsys.viewRecord();
    // await mgtsys.students.(inp.opt);
    // console.log(`New student ${chalk.bold.yellow(inp.opt)} created with stdentID: ${mgtsys.students[0].studentID}`);
  }

  if (res == "Go to previous menu") {
    console.log("prev menu");
    main_menu();
  }
  if (res == "Exit") {
    console.log("Exit");
    process.exit();
  }
}

class Person {
  name: string;
  attendance: object[];
  constructor(nam: string) {
    this.name = nam;
    this.attendance = [];
  }
  async askID(){
    const inp = await inquirer.prompt([
      {
        name: "opt1",
        type: "input",
        message: "Please enter ID of exstng person:",
      },
     
    ])
    return inp.opt1;
  }
  async searchStubyID() {
    let stu;
    let ID= await this.askID();
    if (ID.charAt(0) == "S") {
      if (ID.charAt(1) == "T") {
        stu = mgtsys.students.find((student) => student.studentID == ID);
        if (stu != undefined) {
          return stu;
        } else {
          console.log(`ID ${ID} not found.`);
          console.log("Enter a valid ID");
          main_menu();
        }
      } 
    }
  }
  async searchTchrbyID() {
      let tch;
    let ID= await this.askID();
    tch = mgtsys.teachers.find((teacher) => teacher.teacherID == ID);
      if (tch != undefined) {
        return tch;
      } else {
        console.log(`ID ${ID} not found.`);
        console.log("Enter a valid ID");
        main_menu();
      }
    }
  async searchStafbyID() {
      let stf;
    const inp = await this.askID();
    stf = mgtsys.staff.find((staf) => staf.staffID == inp.opt1);
        if (stf != undefined) {
          return stf;
        } else {
          console.log(`ID ${inp} not found.`);
          console.log("Enter a valid ID");
          main_menu();
        }
      }
  async markAttendance(pers:string) {
    let date = new Date();
    let person;
    if(pers=="Student"){
      person= await  this.searchStubyID();
    }
    if(pers=="Teacher"){
      person= await  this.searchTchrbyID();
    }
    if(pers=="Staff"){
      person= await  this.searchStafbyID();
    }
    if(person!=undefined){
      person.attendance.push({ date: date, Attendance: "Present" });
    console.log(
      `----The ${pers} ${person.name} has been marked present today ${date}.----`
    )}else{
      console.log("Not found")
    };
  }
}
class Student extends Person {
  counter: number = 100;
  studentID: string;
  courses: string[];
  feesPaid: object[];
  feesDue: object[];
  constructor(nam: string) {
    super(nam);
    this.studentID = "ST" + (this.counter++).toString();
    this.name = nam;
    this.courses = [];
    this.feesPaid = [];
    this.feesDue = [];
  }
    async payfee(fee:string) {
    let person = await this.searchStubyID();
    if (person != undefined) {
      person.feesPaid.push({ "course": person.courses[0], date: Date(), "Fee (Rs)": fee });
      console.log(
        `----You paid Rs. ${fee} on ${Date()} for course ${person.courses[0]}.----`
      );
    }
  }
  enrolInCourse() {}
}
class Teachers extends Person {
  counter: number = 100;
  teacherID: string;
  courses: string[];
  designation: string;
  salary: object[];
  constructor(nam: string) {
    super(nam);
    this.teacherID = "T" + (this.counter++).toString();
    this.name = nam;
    this.courses = [];
    this.salary = [];
    this.designation = "";
  }
  
  
  async paySalary(salary:string) {
    let teach=await this.searchTchrbyID();
    if (teach != undefined) {
      teach.salary.push({ "Salary paid": salary, date: Date()});
      console.log(
        `----You have been paid salary Rs. ${salary} on ${Date()} }.----`
      );
  }
}
  async setDesignation(desig: string) {
    let teach=await this.searchTchrbyID();
    if (teach != undefined) {
    teach.designation = desig;
  }
}
}
class Staff extends Person {
  counter: number = 100;
  staffID: string;
  designation: string;
  salary: number;
  constructor(nam: string) {
    super(nam);
    this.staffID = "S" + (this.counter++).toString();
    this.name = nam;
    this.salary = 0;
    this.designation = "";
  }
  }
class ManagmentSys {
  students: Student[];
  teachers: Teachers[];
  staff: Staff[];
  constructor() {
    this.students = [];
    this.teachers = [];
    this.staff = [];
  }
  async askname() {
    const inp = await inquirer.prompt({
      name: "opt",
      type: "input",
      message: "Please enter student name:",
    });
    return inp.opt;
  }
  //Register new student
  async createStu() {
    let nam = await this.askname();
    let stu = new Student(nam);
    this.students.push(stu);
    console.log(
      `New student ${chalk.bold.yellow(
        nam
      )} registered with stdentID: ${chalk.bold.yellow(stu.studentID)}.`
    );
  }
  createStaff(nam: string) {
    let sta = new Staff(nam);
    this.staff.push(sta);
    console.log(
      `New staff member ${chalk.bold.yellow(
        nam
      )} registered with staffID: ${chalk.bold.yellow(sta.staffID)}.`
    );
  }
  createTeach(nam: string) {
    let teach = new Teachers(nam);
    this.teachers.push(teach);
    console.log(
      `New Teacher ${chalk.bold.yellow(
        nam
      )} registered with teacherID: ${chalk.bold.yellow(teach.teacherID)}.`
    );
  }
  async viewRecord() {
    const res = this.searchbyID();
    console.log(res);
  }
}

let mgtsys = new ManagmentSys();
main_menu();
