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
import { showMenu } from './menu.js';

console.log("---------------------------------------------------");
console.log(
  `|----------${chalk.bold.red("XYZ School Managment System")}------------|`
);
console.log("---------------------------------------------------");
console.log("Welcome to XYZ School                     -channayousif");

//MENU
async function main_menu() {
  let cont=true;
  while (cont) {
    const mainm=   await showMenu("Main MENU, please select:",["Students", "Teachers", "Staff", "Exit"])
    // const input = 
    // await inquirer.prompt({
    //   name: "opt",
    //   type: "list",
    //   message: "\n____________________________\n| Main MENU, please select: |\n----------------------------\n",
    //   choices: ["Students", "Teachers", "Staff", "Exit"],
    // });
    let main = mainm;
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
      cont=false;
    }
  }
}

async function teachers_menu() {
  let cont=true;
  while (cont) {
  console.log("You are at teachers menu:");
  const teachm=   await showMenu("Teacher MENU, please select:",[
    "Add a new teacher",
    "view existing teacher details",
    "Mark attendance",
    "Set salary",
    "Pay salary",
    "Go to previous menu",
    "Exit",
  ]);
    
  // const input = await inquirer.prompt({
  //   name: "opt",
  //   type: "list",
  //   message: "MENU, please select an action:",
  //   choices: [
  //     "Add a new teacher",
  //     "view existing teacher details",
  //     "Mark attendance",
  //     "Set salary",
  //     "Pay salary",
  //     "Go to previous menu",
  //     "Exit",
  //   ],
  // });
  let res = teachm;
  if (res == "Add a new teacher") {
    console.log("Add new teacher");
  }
  if (res == "view existing teacher details") {
    console.log("modify a teacher");
  }
  if (res == "Mark attendance") {
    console.log("Mark Attendance");
  }
  if (res == "Set salary") {
    console.log("Set salary");
  }
  if (res == "Pay salary") {
    console.log("Pay salary");
  }
 
  if (res == "Go to previous menu") {
    console.log("prev menu");
    await main_menu();
  }
  if (res == "Exit") {
    console.log("Exit");
    cont=false;
  }
}
}
async function staff_menu() {
  let cont=true;
  while (cont) {
  console.log("staff member menu");
  const staffm=   await showMenu("Staff members MENU, please select:",[
    
      "Add a new staff member",
      "Modify an existing staff member",
      "Mark attendance",
      "Set salary",
      "Pay salary",
      "Go to previous menu",
      "Exit",
    
  ]);

  // const input = await inquirer.prompt({
  //   name: "opt",
  //   type: "list",
  //   message: "Staff MENU, please select:",
  //   choices: [
  //     "Add a new staff member",
  //     "Modify an existing staff member",
  //     "Mark attendance",
  //     "Set salary",
  //     "Pay salary",
  //     "Go to previous menu",
  //     "Exit",
  //   ],
  // });
  let res = staffm;
  if (res == "Add a new staff member") {
    console.log("Add new staff");
  }
  if (res == "Modify an existing staff member") {
    console.log("modify staff member");
  }
  if (res == "Mark attendance") {
    console.log("Mark Attendance");
  }
  if (res == "Set salary") {
    console.log("Set salary");
  }
  if (res == "Pay salary") {
    console.log("Pay salary");
  }
  if (res == "Go to previous menu") {
    console.log("prev menu");
    await main_menu();
  }
  if (res == "Exit") {
    console.log("Exit");
    cont=false;
  }
}
}
async function student_menu() {
  let cont=true;
  while (cont) {
  const stum=   await showMenu("Stdents MENU, please select:",[
    
    "Add a new student",
      "Existing student Record",
      "Enroll in a course",
      "Mark attendance",
      "Fee payable",
      "Fee paid",
      "Exit"
  
]);

  let res = stum;
  if (res == "Add a new student") {
        console.log("Adding a new student");
    
    await mgtsys.createStu();
  }
  if (res == "Existing student Record") {
    try{
      console.log("View/Change Existing student Record Menu");
    let stu= await mgtsys.searchStubyID() as Student;
    console.log(stu);
    stu.viewRecord();
    } catch (error) {
      console.log("Not found");
      console.error("Error asking for ID:", error);
      return null;
    }
  }
  
  if (res == "Mark attendance") {
    console.log("Mark Attendance");
    let stu= await mgtsys.searchStubyID() as Student;
    if(stu!=undefined){
    stu.markAttendance();
     }else{
      console.log("Not found");
    }

  }
  if (res == "Fee payable") {
    console.log("Set salary");
  }
  if (res == "Fee paid") {
    console.log("Pay salary");
  }

  if (res == "Exit") {
    console.log("Exit students");
    cont=false;
  }
}
}
interface AttendanceRecord {
  date: Date;
  attendance: string;
}
class Person {
  name: string;
  attendance: AttendanceRecord[];
  constructor(nam: string) {
    this.name = nam;
    this.attendance = [{date:new Date(),attendance:""}];
  }
  
  
  async markAttendance() {
    let date = new Date();
    this.attendance.push({ date: date, attendance: "Present" });
    console.log(
      `----The ${this.name} has been marked present today ${date}.----`
    )
    };
  }

class Student extends Person {
  counter: number = 100;
  studentID: string;
  courses: string[];
  feesPaid: object[];
  feesDue: object[];
  coursefeeData:object[];
  constructor(nam: string) {
        super(nam);
    this.studentID = "";
    this.name = nam;
    this.courses = [];
    this.feesPaid = [];
    this.feesDue = [];
    this.coursefeeData=[
      {curse:"Typescript",fee:1000},
      {course:"HTML",fee:1000},
      {course:"CSS",fee:1000},
      {course:"NEXT.js",fee:1000},
      {course:"Python",fee:1000},
      {course:"Other",fee:1000}
    ]
  }
 async viewRecord(){ 
      console.log(`\n____________________________________\n
      Name:       ${this.name}
      StudentID:  ${this.studentID}
      Corses:     ${this.courses}
      Fee Paid:   ${this.feesPaid}
      Fee Due:    ${this.feesDue}
      Attendance: `);
      console.log(this.attendance)
    }
  async askCourse(){
    const input = await inquirer.prompt({
      name: "opt",
      type: "list",
      message: "Please select a course :",
      choices: this.coursefeeData
    });
    return input.opt
  }
    async payfee(fee:string) {
    let person = await mgtsys.searchStubyID();
    let course=await this.askCourse();
    if (person != undefined) {
      person.courses.push(course);
      person.feesPaid.push({ "course": course, date: Date(), "Fee (Rs)": fee });
      console.log(
        `----You paid Rs. ${fee} on ${Date()} for course ${person.courses[0]}.----`
      );
    }
  }
  async enrolInCourse() {
    let student =await mgtsys.searchStubyID() as Student
    let course=await this.askCourse();
    student.courses.push(course);
    student.feesDue.push(course)
    console.log(`course added ${course}`);
  }
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
    let teach=await mgtsys.searchTchrbyID();
    if (teach != undefined) {
      teach.salary.push({ "Salary paid": salary, date: Date()});
      console.log(
        `----You have been paid salary Rs. ${salary} on ${Date()} }.----`
      );
  }
}
  async setDesignation(desig: string) {
    let teach=await mgtsys.searchTchrbyID();
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
      message: "Please enter student name:"
    });
    return inp.opt as string;
  }
  //Register new student
  async createStu() {
    let nam = await this.askname();
    let stu = new Student(nam);
    let count=this.students.length+100;
    stu.studentID="ST" + (count).toString();
    this.students.push(stu);
    console.log(
      `New student ${chalk.bold.yellow(nam)
        } registered with stdentID: ${chalk.bold.yellow(stu.studentID)}.`
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
  async askID() {
    try {
      const inp = await inquirer.prompt({
        name: "opt1",
        type: "input",
        message: "Please enter ID of existing person:",
      });
      return inp.opt1;
    } catch (error) {
      console.error("Error asking for ID:", error);
      return null;
    }
  }
  
  async searchStubyID() {
    let stu:Student|undefined;
    let ID= await this.askID();
    if (ID.charAt(0).toLowerCase() == "s") {
      if (ID.charAt(1).toLowerCase() == "t") {
        stu = mgtsys.students.find((student) => student.studentID.toLowerCase() == ID);
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
//  async viewRecord() {
//    const res = this.searchbyID();
//    console.log(res);
//  }
}

let mgtsys = new ManagmentSys();
main_menu();
