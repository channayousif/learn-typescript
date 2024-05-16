import { showMenu } from './menu.js';
import inquirer from 'inquirer';

async function main_menu() {
  let cont = true;
  while (cont) {
    const main = await showMenu("Main MENU, please select:", ["Students", "Teachers", "Staff", "Exit"]);
    switch (main) {
      case "Students":
        await student_menu();
        break;
      case "Teachers":
        await teachers_menu();
        break;
      case "Staff":
        await staff_menu();
        break;
      case "Exit":
        cont = false;
        break;
    }
  }
}
async function staff_menu() {
    let cont = true;
    while (cont) {
      const main = await showMenu("Staff MENU, please select:", [
        "Add a new staff member",
        "Modify an existing staff member",
        "Mark attendance",
        "Set salary",
        "Pay salary",
        "Go to previous menu",
        "Exit",
      ]);
      switch (main) {
        case "Add a new staff member":

        case "Modify an existing staff member":

        case "Mark attendance":

        case "Set salary":

        case "Pay salary":

        case "Go to previous menu":

        case "Exit":
        cont = false;
          break;
      }
    }
  }
  
async function teachers_menu() {
    let cont = true;
    while (cont) {
      const main = await showMenu("Teachers MENU, please select:", [
        "Add a new teacher",
        "view existing teacher details",
        "Mark attendance",
        "Set salary",
        "Pay salary",
        "Go to previous menu",
        "Exit",
      ]);
      switch (main) {
        case "Add a new teacher":
        case  "view existing teacher details":
        case "Mark attendance":
        case "Set salary":
        case "Pay salary":
        case "Go to previous menu":
        case "Exit":
          cont = false;
          break;
      }
    }
  }
  
async function student_menu() {
    let cont = true;
    while (cont) {
      const main = await showMenu("Students MENU, please select:", [
        "Add a new student",
        "Existing student Record",
        "Enroll in a course",
        "Mark attendance",
        "Fee payable",
        "Fee paid",
        "Go to previous menu\n"
      ]);
      switch (main) {
        case "Add a new student":
        case "Existing student Record":
        case "Enroll in a course":
        case "Mark attendance":
        case "Fee payable":
        case "Fee paid":
        case "Go to previous menu":
         
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

  constructor(name: string) {
    this.name = name;
    this.attendance = [];
  }

  markAttendance() {
    const date = new Date();
    this.attendance.push({ date: date, attendance: "Present" });
    console.log(`${this.name} has been marked present today ${date}.`);
  }
}

class Student extends Person {
  studentID: string;
  courses: string[];
  feesPaid: any[];
  feesDue: any[];

  constructor(name: string) {
    super(name);
    this.studentID = "";
    this.courses = [];
    this.feesPaid = [];
    this.feesDue = [];
  }

  // Additional methods specific to Student
}

// Similarly, update the Teachers and Staff classes
// Enhancing Error Handling
// Ensure user inputs are valid and handle errors gracefully:

// 

