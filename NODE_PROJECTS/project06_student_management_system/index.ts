/**
 * @date: 25-04-2024
 * @project: 06
 * @author:channayousif
 * @description:
 * This project is a simple console based Student Management System. In this project you will be learning
 *  how to add new students, how to generate a 5 digit unique studentID for each student, how to enroll
 * students in the given courses. Also, you will be implementing the following operations enroll,
 *  view balance, pay tuition fees, show status, etc. The status will show all the details of the student
 *  including name, id, courses enrolled and balance.
 * This is one of the best projects to implement the Object Oriented Programming concepts.
 */
import inquirer from "inquirer";
//student class
class Student {
  
  studentID: number;
  name: string;
  courses: string[];
  balance: number;
  course_fee: number;
  paidcourses:string[];
  //constructor
  constructor(name: string) {
    this.name = name;
    this.studentID = 1000;
    this.courses = [];
    this.balance = 10000;
    this.course_fee = 1000;
    this.paidcourses=[];
  }
  enroll(course: string) {
    this.courses.push(course);
  }
  showbal() {
    console.log(
      `\nThe remaining account balance of ${this.name} is : ${this.balance}/-\n`
    );
  }
  payfee(course: string) {
    this.balance -= this.course_fee;
    this.paidcourses.push(course);
  }
  showStatus(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Student ID: ${this.studentID}`);
    console.log(`Courses Enrolled: ${this.courses.join(", ")}`);
    this.showbal();
  }
}
class Stumgmtsys {
  students: Student[];
  counter: number;
  constructor() {
    this.students = [];
    this.counter=1000;
  }
  registerstu(name: string) {
    let newStudent = new Student(name);
    newStudent.studentID=this.counter++
    this.students.push(newStudent);
    console.log(
      `Student ${name} added successfully with ID: ${newStudent.studentID}`
    );
  }
  enrollstu(studentID: number, course: string) {
    const student = this.findstubyID(studentID);
    if (student) {
      student.enroll(course);
      console.log(`Enrolled ${student.name} in ${course}`);
    }
  }
  findstubyID(stuID: number): Student | undefined {
    return this.students.find((student) => student.studentID == stuID);
  }
}
const stu_mgt_sys = new Stumgmtsys();
let stu :Student|undefined;
// User input
while (true) {
  let userinput = await inquirer.prompt([
    {
      name: "menu1",
      type: "list",
      message: "Please choose your desired option",
      choices: [
        "Register a new student",
        "See status of an existing student",
        "Pay fee",
        "view courses",
        "view account balance",
        "view all students",
        "Exit",
      ],
    },
  ]);
  if (userinput.menu1 == "Exit") {
    break;
  }
  
  switch (userinput.menu1) {
    case "Register a new student": {
      userinput = await inquirer.prompt([
        {
          name: "stu_name",
          type: "input",
          message: "Please enter Student Name you want to register:",
        },
      ]);
      stu_mgt_sys.registerstu(userinput.stu_name);
      console.log(`${userinput.stu_name} has been Registered`);
      break;
    }

    case "See status of an existing student": {
      userinput = await inquirer.prompt([
        {
          name: "stuID",
          type: "input",
          message: "Please enter StudentID for status:",
        },
      ]);
      stu = stu_mgt_sys.findstubyID(userinput.stuID);
      if (stu != undefined) {
        stu.showStatus();
      } else {
        console.log(`ID not found. Enter a valid studentID`);
      }
      break;
    }
    case "Pay fee": {
      userinput = await inquirer.prompt([
        {
          name: "stuID",
          type: "input",
          message: "Please enter StudentID for payment of course fee:",
        },
        {
          name: "course",
          type: "input",
          message: "Please enter course name (fee is 1000 per course):",
        },
      ]);

      stu = stu_mgt_sys.findstubyID(userinput.stuID);
      if (stu != undefined) {
        stu.payfee(userinput.course);
        console.log(`Fee Rs. ${stu.course_fee} paid for the course ${userinput.course}. remaining balance is ${stu.balance}`);
      } else {
        console.log(`ID not found. Enter a valid studentID`);
      }
      break;
    }
    case "view courses": {
      userinput = await inquirer.prompt([
        {
          name: "stuID",
          type: "input",
          message: "Please enter StudentID for viewing courses:",
        },
      ]);

      stu = stu_mgt_sys.findstubyID(userinput.stuID);
      if (stu != undefined) {
        console.log("Free courses",stu.courses, "paid courses",stu.paidcourses);
      } else {
        console.log(`Enter a valid studentID`);
      }
      break;
    }
    case "view account balance": {
      userinput = await inquirer.prompt([
        {
          name: "stuID",
          type: "input",
          message: "Please enter StudentID for viewing Balance:",
        },
      ]);
      stu = stu_mgt_sys.findstubyID(userinput.stuID);
      if (stu != undefined) {
        stu.showbal();
      } else {
        console.log(`Enter a valid studentID`);
      }
      break;
    }
    case "view all students": {
        console.log("Here is data of All Registered Students ");
          console.log(stu_mgt_sys.students);
            break;
      }
  }
}
