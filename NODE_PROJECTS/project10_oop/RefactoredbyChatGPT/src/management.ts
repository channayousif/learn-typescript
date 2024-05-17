import inquirer from "inquirer";
import { Student, Teacher, Staff } from "./models.js";

export class ManagementSys {
  students: Student[];
  teachers: Teacher[];
  staff: Staff[];

  constructor() {
    this.students = [];
    this.teachers = [];
    this.staff = [];
  }

  async askName(): Promise<string> {
    const input = await inquirer.prompt({
      name: "name",
      type: "input",
      message: "Please enter name:"
    });
    return input.name;
  }

  async createStudent() {
    const name = await this.askName();
    const student = new Student(name);
    this.students.push(student);
    console.log(`New student ${name} registered with studentID: ${student.studentID}.`);
  }

  async createTeacher() {
    const name = await this.askName();
    const designation = await this.askDesignation(["Primary Teacher", "Jr. Teacher", "Sr. Teacher", "Visiting Teacher", "Assistant Teacher"]);
    const teacher = new Teacher(name, designation);
    this.teachers.push(teacher);
    console.log(`New teacher ${name} registered with teacherID: ${teacher.teacherID}.`);
  }

  async createStaff() {
    const name = await this.askName();
    const designation = await this.askDesignation(["Admin", "Clerk", "Accounts officer", "Cleaning staff", "Helper"]);
    const staff = new Staff(name, designation);
    this.staff.push(staff);
    console.log(`New staff member ${name} registered with staffID: ${staff.staffID}.`);
  }

  async askDesignation(options: string[]): Promise<string> {
    const input = await inquirer.prompt({
      name: "designation",
      type: "list",
      message: "Please select designation:",
      choices: options
    });
    return input.designation;
  }

  async askID(): Promise<string> {
    const input = await inquirer.prompt({
      name: "id",
      type: "input",
      message: "Please enter ID:"
    });
    return input.id;
  }

  async searchStudentById(): Promise<Student | undefined> {
    const id = await this.askID();
    return this.students.find(student => student.studentID === id);
  }

  async searchTeacherById(): Promise<Teacher | undefined> {
    const id = await this.askID();
    return this.teachers.find(teacher => teacher.teacherID === id);
  }

  async searchStaffById(): Promise<Staff | undefined> {
    const id = await this.askID();
    return this.staff.find(staff => staff.staffID === id);
  }
}
