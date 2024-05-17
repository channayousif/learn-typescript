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
import { showMenu } from "./menu.js";

console.log("---------------------------------------------------");
console.log(
  `|----------${chalk.bold.red("XYZ School Managment System")}------------|`
);
console.log("---------------------------------------------------");
console.log("Welcome to XYZ School                     -channayousif");

//MENU
async function main_menu() {
  let cont = true;
  while (cont) {
    const mainm = await showMenu("Main MENU, please select:", [
      "Students",
      "Teachers",
      "Staff",
      "Exit",
    ]);
    
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
      cont = false;
    }
  }
}

async function teachers_menu() {
  let cont = true;
  while (cont) {
    console.log("You are at teachers menu:");
    const teachm = await showMenu("Teacher MENU, please select:", [
      "Add a new teacher",
      "view existing teacher details",
      "Mark attendance",
      "Salary",
      "Go to previous menu",
      "Exit",
    ]);

    let res = teachm;
    if (res == "Add a new teacher") {
              console.log("Add new teacher");
              await mgtsys.createTeach();
    }
    if (res == "view existing teacher details") {
              console.log("modify a teacher");
              try {
                console.log("View/ modify a staff member Menu");
                let tea = (await mgtsys.searchTchrbyID()) as Teachers;
                tea.viewRecord();
              }catch (error) {
                console.log("Not found");
                console.error("Error asking for ID:", error);
                return null;
              }
    }
    if (res == "Mark attendance") {
                console.log("Mark Attendance");
                try {
                  let tea = (await mgtsys.searchTchrbyID()) as Teachers;
                  console.log(tea);
                  await tea.markAttendance();
                } catch (error) {
                  console.log("Not found");
                  console.error("Error asking for ID:", error);
                }
    }
    if (res == "Salary") {
                console.log("Pay Salary");
                let sta = (await mgtsys.searchTchrbyID()) as Teachers;
                await sta.paysalary(
                Number(
                await showMenu("Select salary amount:", [
                "50000",
                "150000",
                "1000000",
              ])
            )
          );
    }
    
    if (res == "Go to previous menu") {
                console.log("prev menu");
                await main_menu();
    }
    if (res == "Exit") {
                console.log("Exit");
                cont = false;
    }
  }
}
async function staff_menu() {
  let cont = true;
  while (cont) {
    console.log("staff member menu");
    const staffm = await showMenu("Staff members MENU, please select:", [
      "Add a new staff member",
      "View/modify existing staff member",
      "Mark attendance",
      "Pay salary",
      "Go to previous menu",
      "Exit",
    ]);
    let res = staffm;
    {
      switch (staffm) {
        case "Add a new staff member": {
          console.log("Add a new staff member");
          await mgtsys.createStaff();
          break;
        }
        case "View/modify existing staff member": {
          console.log("View/ modify a staff member");
          try {
            console.log("View/ modify a staff member Menu");
            let sta = (await mgtsys.searchStafbyID()) as Staff;
            sta.viewRecord();
          } catch (error) {
            console.log("Not found");
            console.error("Error asking for ID:", error);
            return null;
          }
          break;
        }
        case "Mark attendance": {
          console.log("Mark Attendance");
          try {
            let sta = (await mgtsys.searchStafbyID()) as Staff;
            console.log(sta);
            await sta.markAttendance();
          } catch (error) {
            console.log("Not found");
            console.error("Error asking for ID:", error);
          }
          break;
        }

        case "Pay salary": {
          console.log("Fee payment");
          let sta = (await mgtsys.searchStafbyID()) as Staff;
          await sta.paysalary(
            Number(
              await showMenu("Select salary amount:", [
                "50000",
                "150000",
                "1000000",
              ])
            )
          );
          break;
        }
        case "Exit": {
          console.log("Exit students");
          cont = false;
          break;
        }
      }
    }
  }
}

async function student_menu() {
  let cont = true;
  while (cont) {
    const stum = await showMenu("Stdents MENU, please select:", [
      "Add a new student",
      "Existing student Record",
      "Enroll in a course",
      "Mark attendance",
      "Fee payment",
      "Exit",
    ]);

    switch (stum) {
      case "Add a new student": {
        console.log("Adding a new student");
        await mgtsys.createStu();
        break;
      }
      case "Existing student Record": {
        try {
          console.log("View/Change Existing student Record Menu");
          let stu = (await mgtsys.searchStubyID()) as Student;
          console.log(stu);
          stu.viewRecord();
        } catch (error) {
          console.log("Not found");
          console.error("Error asking for ID:", error);
          return null;
        }
      }

      case "Enroll in a course": {
        let stu = (await mgtsys.searchStubyID()) as Student;
        await stu.enroll();
        break;
      }
      case "Mark attendance": {
        console.log("Mark Attendance");
        try {
          let stu = (await mgtsys.searchStubyID()) as Student;
          stu.markAttendance();
        } catch (error) {
          console.log("Not found");
          console.error("Error asking for ID:", error);
        }
        break;
      }

      case "Fee payment": {
        console.log("Fee payment");
        let stu = (await mgtsys.searchStubyID()) as Student;
        await stu.feepayment();
        break;
      }
      case "Exit": {
        console.log("Exit students");
        cont = false;
        break;
      }
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
    this.attendance = [];
  }

  async markAttendance() {
    let date = new Date();
    this.attendance.push({ date: date, attendance: "Present" });
    console.log(
      `----The ${this.name} has been marked present today ${date}.----`
    );
  }
}
interface FeesData {
  course: string;
  date: Date;
  Fee: number;
  status: "Paid" | "Unpaid";
}

class Student extends Person {
  counter: number = 100;
  studentID: string;
  courses: string[];
  coursesdata: string[];
  feesPaid: object[];
  feesData: FeesData[];
  coursefeeData: object[];
  constructor(nam: string) {
    super(nam);
    this.studentID = "";
    this.name = nam;
    this.courses = [];
    this.feesPaid = [];
    this.feesData = [];
    this.coursesdata = [
      "Typescript",
      "HTML",
      "CSS",
      "NEXT.js",
      "Python",
      "Other",
    ];
    this.coursefeeData = [
      { curse: "Typescript", fee: 1000 },
      { course: "HTML", fee: 1000 },
      { course: "CSS", fee: 1000 },
      { course: "NEXT.js", fee: 1000 },
      { course: "Python", fee: 1000 },
      { course: "Other", fee: 1000 },
    ];
  }
  async viewRecord() {
    console.log(`\n____________________________________\n
      Name:       ${this.name}
      StudentID:  ${this.studentID}
      Corses:     ${this.courses}
      Fee Data:   
          Course ---> \t Fee ---> \t Status
          ${this.feesData.map(
            (val) => `${val.course} ---> \t ${val.Fee} ---> \t ${val.status}`
          )}
      Attendance: 
          Date \t\t|Status 
          ${this.attendance.map(
            (val) => `${val.date.toDateString()}\t|${val.attendance}\n`
          )}
          `);
  }
  async askCourse() {
    const input = await inquirer.prompt({
      name: "opt",
      type: "list",
      message: "Please select a course :",
      choices: this.coursesdata,
    });
    return input.opt;
  }
  async enroll() {
    let course = await this.askCourse();
    this.courses.push(course);
    this.feesData.push({
      course: course,
      date: new Date(),
      Fee: 1000,
      status: "Unpaid",
    });
    console.log(
      `----You have to pay Rs.1000 for course ${course} to confirm your enrolment.----`
    );
  }
  async feepayment() {
    let cor = this.feesData.map((val) => val.course);
    const fee = await showMenu("Please select course fee you want to pay", cor);
    let cors = this.feesData.find((val) => val.course == fee);
    if (cors?.status == "Unpaid") {
      cors.status = "Paid";
      console.log(
        `Your fee of Rs.${cors.Fee} has been paid successfully for the course ${cors.course}`
      );
    } else {
      console.log("Already paid");
    }
  }
}
class Teachers extends Person {
  counter: number = 100;
  teacherID: string;
  courses: string[];
  designation: string;
  salarydata: SalaryData[];
  constructor(nam: string, desig: string) {
    super(nam);
    this.teacherID = "T" + (this.counter++).toString();
    this.name = nam;
    this.designation = desig;
    this.courses = [];
    this.salarydata = [];
    this.designation = "";
  }

  async paysalary(salar: number) {
    let choices = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = await showMenu(
      "Please select salary Month, you want to pay",
      choices
    );
    let sal = this.salarydata.find((val) => val.month == month);
    if (sal != undefined) {
      if (sal?.status == "Not paid yet") {
        sal.status = "Paid";
        console.log(
          `Your salary of Rs.${sal.salary} has been paid successfully for the Month of ${sal.month}`
        );
      } else if (sal.status == "Paid") {
        console.log("Already paid");
      }
    } else {
      this.salarydata.push({ month: month, salary: salar, status: "Paid" });
      console.log(
        `Your salary of Rs.${salar} has been paid successfully for the Month of ${month}`
      );
    }
  }

  async viewRecord() {
    console.log(`\n____________________________________\n
      Name:       ${this.name}
      TeacherID:    ${this.teacherID}
      Designation:${this.designation}
      Salary Data:   
          Month ---> \t Salary amount  ---> \t Status
          ${this.salarydata.map(
            (val) => `${val.month} ---> \t ${val.salary} ---> \t ${val.status}`
          )}
      Attendance: 
          Date \t\t|Status 
          ${this.attendance.map(
            (val) => `${val.date.toDateString()}\t|${val.attendance}\n`
          )}
          `);
  }
  async setDesignation(desig: string) {
    let teach = await mgtsys.searchTchrbyID();
    if (teach != undefined) {
      teach.designation = desig;
    }
  }
}
interface SalaryData {
  month: string;
  salary: number;
  status: "Paid" | "Not paid yet";
}
class Staff extends Person {
  counter: number = 100;
  staffID: string;
  designation: string;
  salarydata: SalaryData[];
  constructor(nam: string, desig: string) {
    super(nam);
    this.staffID = "S" + (this.counter++).toString();
    this.name = nam;
    this.salarydata = [];
    this.designation = desig;
  }
  async viewRecord() {
    console.log(`\n____________________________________\n
      Name:       ${this.name}
      StaffID:    ${this.staffID}
      Designation:${this.designation}
      Salary Data:   
          Month ---> \t Salary amount  ---> \t Status
          ${this.salarydata.map(
            (val) => `${val.month} ---> \t ${val.salary} ---> \t ${val.status}`
          )}
      Attendance: 
          Date \t\t|Status 
          ${this.attendance.map(
            (val) => `${val.date.toDateString()}\t|${val.attendance}\n`
          )}
          `);
  }
  async paysalary(salar: number) {
    let choices = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = await showMenu(
      "Please select salary Month, you want to pay",
      choices
    );
    let sal = this.salarydata.find((val) => val.month == month);
    if (sal != undefined) {
      if (sal?.status == "Not paid yet") {
        sal.status = "Paid";
        console.log(
          `Your salary of Rs.${sal.salary} has been paid successfully for the Month of ${sal.month}`
        );
      } else if (sal.status == "Paid") {
        console.log("Already paid");
      }
    } else {
      this.salarydata.push({ month: month, salary: salar, status: "Paid" });
      console.log(
        `Your salary of Rs.${salar} has been paid successfully for the Month of ${month}`
      );
    }
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
      message: "Please enter Name:",
    });
    return inp.opt as string;
  }
  //Register new student
  async createStu() {
    let nam = await this.askname();
    let stu = new Student(nam);
    let count = this.students.length + 100;
    stu.studentID = "ST" + count.toString();
    this.students.push(stu);
    console.log(
      `New student ${chalk.bold.yellow(
        nam
      )} registered with stdentID: ${chalk.bold.yellow(stu.studentID)}.`
    );
  }
  async createStaff() {
    let nam = await this.askname();
    let desig = await showMenu("Select Designation", [
      "Admin",
      "Clerk",
      "Accounts officer",
      "Cleaning staff",
      "Helper",
    ]);
    let sta = new Staff(nam, desig);
    let count = this.staff.length + 100;
    sta.staffID = "S" + count.toString();
    this.staff.push(sta);
    console.log(
      `New staff member ${chalk.bold.yellow(
        nam
      )} registered with staffID: ${chalk.bold.yellow(sta.staffID)}.`
    );
  }
  async createTeach() {
    let nam = await this.askname();
    let desig = await showMenu("Select Designation", [
      "Primary Teacher",
      "Jr. Teacher",
      "Sr. Teacher",
      "Visiting Teacher",
      "Assistant Teacher",
    ]);
    let tea = new Teachers(nam, desig);
    let count = this.teachers.length + 100;
    tea.teacherID = "T" + count.toString();
    this.teachers.push(tea);
    console.log(
      `New Teacher: ${chalk.bold.yellow(
        nam
      )} registered with TeacherID: ${chalk.bold.yellow(tea.teacherID)}.`
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
    let stu: Student | undefined;
    let ID = await this.askID();
    stu = mgtsys.students.find(
      (student) => student.studentID.toLowerCase() == ID.toLowerCase()
    );
    if (stu != undefined) {
      return stu;
    } else {
      console.log(`ID ${ID} not found.`);
      console.log("Enter a valid ID");
      main_menu();
    }
  }

  async searchTchrbyID() {
    let tch:Teachers|undefined;
    let ID = await this.askID();
    tch = mgtsys.teachers.find((
      teacher) => teacher.teacherID.toLowerCase() == ID.toLowerCase());
    if (tch != undefined) {
      return tch;
    } else {
      console.log(`ID ${ID} not found.`);
      console.log("Enter a valid ID");
      main_menu();
    }
  }
  async searchStafbyID() {
    let sta: Staff | undefined;
    let ID = await this.askID();
    if (ID.charAt(0).toLowerCase() == "s") {
      sta = mgtsys.staff.find((staf) => staf.staffID.toLowerCase() == ID.toLowerCase());
      if (sta != undefined) {
        return sta;
      } else {
        console.log(`ID ${ID} not found.`);
        console.log("Enter a valid ID");
        main_menu();
      }
    }
  }
  
}
let mgtsys = new ManagmentSys();
main_menu();
