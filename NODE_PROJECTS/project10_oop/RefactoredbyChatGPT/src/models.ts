import inquirer from "inquirer";
import chalk from "chalk";
import { randomUUID } from "crypto";

abstract class Person {
  id: string;
  name: string;
  attendance: number;

  constructor(name: string) {
    this.id = randomUUID();
    this.name = name;
    this.attendance = 0;
  }

  async markAttendance() {
    this.attendance += 1;
    console.log(`${this.name} marked as present. Total attendance: ${this.attendance}`);
  }

  abstract viewRecord(): void;
}

export class Student extends Person {
  studentID: string;
  feePayable: number;
  feePaid: number;
  courses: string[];

  constructor(name: string) {
    super(name);
    this.studentID = this.id;
    this.feePayable = 0;
    this.feePaid = 0;
    this.courses = [];
  }

  async enroll() {
    const input = await inquirer.prompt({
      name: "course",
      type: "input",
      message: "Enter the course name to enroll:"
    });
    this.courses.push(input.course);
    console.log(`Enrolled in course: ${input.course}`);
  }

  async payFee() {
    const input = await inquirer.prompt({
      name: "amount",
      type: "number",
      message: "Enter fee amount to pay:"
    });
    this.feePaid += input.amount;
    console.log(`Paid fee: ${input.amount}. Total paid: ${this.feePaid}`);
  }

  viewRecord() {
    console.log(chalk.greenBright(`Student ID: ${this.studentID}`));
    console.log(`Name: ${this.name}`);
    console.log(`Attendance: ${this.attendance}`);
    console.log(`Fee Payable: ${this.feePayable}`);
    console.log(`Fee Paid: ${this.feePaid}`);
    console.log(`Courses Enrolled: ${this.courses.join(", ")}`);
  }
}

export class Teacher extends Person {
  teacherID: string;
  designation: string;
  salary: number;

  constructor(name: string, designation: string) {
    super(name);
    this.teacherID = this.id;
    this.designation = designation;
    this.salary = 0;
  }

  async paySalary() {
    const input = await inquirer.prompt({
      name: "amount",
      type: "number",
      message: "Enter salary amount to pay:"
    });
    this.salary += input.amount;
    console.log(`Paid salary: ${input.amount}. Total paid: ${this.salary}`);
  }

  viewRecord() {
    console.log(chalk.greenBright(`Teacher ID: ${this.teacherID}`));
    console.log(`Name: ${this.name}`);
    console.log(`Designation: ${this.designation}`);
    console.log(`Attendance: ${this.attendance}`);
    console.log(`Salary Paid: ${this.salary}`);
  }
}

export class Staff extends Person {
  staffID: string;
  designation: string;
  salary: number;

  constructor(name: string, designation: string) {
    super(name);
    this.staffID = this.id;
    this.designation = designation;
    this.salary = 0;
  }

  async paySalary() {
    const input = await inquirer.prompt({
      name: "amount",
      type: "number",
      message: "Enter salary amount to pay:"
    });
    this.salary += input.amount;
    console.log(`Paid salary: ${input.amount}. Total paid: ${this.salary}`);
  }

  viewRecord() {
    console.log(chalk.greenBright(`Staff ID: ${this.staffID}`));
    console.log(`Name: ${this.name}`);
    console.log(`Designation: ${this.designation}`);
    console.log(`Attendance: ${this.attendance}`);
    console.log(`Salary Paid: ${this.salary}`);
  }
}
