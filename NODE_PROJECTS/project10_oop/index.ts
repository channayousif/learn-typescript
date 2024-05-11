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
  `|----------${chalk.bold.red(
    "XYZ School Managment System"
  )}------------|`
);
console.log("---------------------------------------------------");
console.log("Welcome to XYZ School                     -channayousif");

//MENU
async function main_menu() {
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
  async function teachers_menu() {
    console.log("teachers")
    const input = await inquirer.prompt({
        name: "opt",
        type: "list",
        message: "Teachers MENU, please select:",
        choices: [
          "Add a new teacher",
          "Modify an existing teacher",
          "Go to previous menu",
          "Exit",
        ],
      });
      let res = input.opt;
      if (res == "Add a new teacher") {
        console.log("Add new teacher");
      }
      if (res == "Modify an existing teacher") {
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
    console.log("staff member menu")
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
        "Modify an existing student",
        "Go to previous menu",
        "Exit",
      ],
    });
    let res = input.opt;
    if (res == "Add a new student") {
      console.log("Addnew");
    }
    if (res == "Modify an existing student") {
      console.log("modify");
    }
    if (res == "Go to previous menu") {
      console.log("prev menu");
    }
    if (res == "Exit") {
      console.log("Exit");
      process.exit();
    }
}

class Person {
  name: string;
  constructor(nam: string) {
    this.name = nam;
  }
  markAttendance() {}
}
class Student extends Person {
  counter: number = 100;
  studentID: string;
  courses: string[];
  attendance: string[];
  feesPaid: number;
  feesDue: number;
  constructor(nam: string) {
    super(nam);
    this.studentID = "ST" + (this.counter++).toString();
    this.name = nam;
    this.courses = [];
    this.attendance = [];
    this.feesPaid = 0;
    this.feesDue = 0;
  }
  payfee() {}
  enrolInCourse() {}
}
class Teachers extends Person {
  counter: number = 100;
  teacherID: string;
  courses: string[];
  designation: string;
  salary: number;
  attendance: string[];
  constructor(nam: string) {
    super(nam);
    this.teacherID = "T" + (this.counter++).toString();
    this.name = nam;
    this.courses = [];
    this.salary = 0;
    this.attendance = [];
    this.designation = "";
  }
  paySalary() {}
  setDesignation(desig: string) {
    this.designation = desig;
  }
}
class Staff extends Person {
  counter: number = 100;
  staffID: string;
  designation: string;
  salary: number;
  attendance: string[];
  constructor(nam: string) {
    super(nam);
    this.staffID = "S" + (this.counter++).toString();
    this.name = nam;
    this.salary = 0;
    this.designation = "";
    this.attendance = [];
  }
}
class ManagmentSys {
  students: Student[] = [];
  teachers: Teachers[] = [];
  staff: Staff[] = [];
  createStu(nam: string) {
    let stu = new Student(nam);
    this.students.push(stu);
    console.log(`${stu.name}created`);
  }
  createStaff() {}
  createTeach() {}
}
main_menu();