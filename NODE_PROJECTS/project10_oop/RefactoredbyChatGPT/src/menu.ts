import inquirer from "inquirer";
import { ManagementSys } from "./management.js";

const mgtsys = new ManagementSys();

export async function mainMenu() {
  let cont = true;
  while (cont) {
    const main = await showMenu("Main MENU, please select:", ["Students", "Teachers", "Staff", "Exit"]);
    switch (main) {
      case "Students":
        await studentMenu();
        break;
      case "Teachers":
        await teachersMenu();
        break;
      case "Staff":
        await staffMenu();
        break;
      case "Exit":
        cont = false;
        break;
    }
  }
}

export async function studentMenu() {
  let cont = true;
  while (cont) {
    const choice = await showMenu("Students MENU, please select:", [
      "Add a new student",
      "Existing student Record",
      "Enroll in a course",
      "Mark attendance",
      "Fee payable",
      "Fee paid",
      "Go to previous menu",
      "Exit"
    ]);
    switch (choice) {
      case "Add a new student":
        console.log("Adding a new student");
        await mgtsys.createStudent();
        break;
      case "Existing student Record":
        try {
          console.log("View/Change Existing student Record Menu");
          let student = await mgtsys.searchStudentById();
          if (student) student.viewRecord();
        } catch (error) {
          console.error("Error asking for ID:", error);
        }
        break;
      case "Enroll in a course":
        {let student = await mgtsys.searchStudentById();
        if (student) await student.enroll();
        break;}
      case "Mark attendance":
        try {
          let student = await mgtsys.searchStudentById();
          if (student) await student.markAttendance();
        } catch (error) {
          console.error("Error asking for ID:", error);
        }
        break;
      case "Fee payable":
        let student = await mgtsys.searchStudentById();
        if (student) await student.payFee();
        break;
      case "Fee paid":
        console.log("Fee Paid");
        break;
      case "Go to previous menu":
        await mainMenu();
        break;
      case "Exit":
        cont = false;
        break;
    }
  }
}

export async function teachersMenu() {
  let cont = true;
  while (cont) {
    console.log("You are at teachers menu:");
    const choice = await showMenu("Teacher MENU, please select:", [
      "Add a new teacher",
      "View existing teacher details",
      "Mark attendance",
      "Salary",
      "Go to previous menu",
      "Exit"
    ]);
    switch (choice) {
      case "Add a new teacher":
        console.log("Add new teacher");
        await mgtsys.createTeacher();
        break;
      case "View existing teacher details":
        try {
          console.log("View/modify a teacher");
          let teacher = await mgtsys.searchTeacherById();
          if (teacher) teacher.viewRecord();
        } catch (error) {
          console.error("Error asking for ID:", error);
        }
        break;
      case "Mark attendance":
        try {
          let teacher = await mgtsys.searchTeacherById();
          if (teacher) await teacher.markAttendance();
        } catch (error) {
          console.error("Error asking for ID:", error);
        }
        break;
      case "Salary":
        let teacher = await mgtsys.searchTeacherById();
        if (teacher) await teacher.paySalary();
        break;
      case "Go to previous menu":
        await mainMenu();
        break;
      case "Exit":
        cont = false;
        break;
    }
  }
}

export async function staffMenu() {
  let cont = true;
  while (cont) {
    console.log("staff member menu");
    const choice = await showMenu("Staff members MENU, please select:", [
      "Add a new staff member",
      "View/modify existing staff member",
      "Mark attendance",
      "Pay salary",
      "Go to previous menu",
      "Exit"
    ]);
    switch (choice) {
      case "Add a new staff member":
        console.log("Add a new staff member");
        await mgtsys.createStaff();
        break;
      case "View/modify existing staff member":
        try {
          console.log("View/ modify a staff member");
          let staff = await mgtsys.searchStaffById();
          if (staff) staff.viewRecord();
        } catch (error) {
          console.error("Error asking for ID:", error);
        }
        break;
      case "Mark attendance":
        try {
          let staff = await mgtsys.searchStaffById();
          if (staff) await staff.markAttendance();
        } catch (error) {
          console.error("Error asking for ID:", error);
        }
        break;
      case "Pay salary":
        let staff = await mgtsys.searchStaffById();
        if (staff) await staff.paySalary();
        break;
      case "Go to previous menu":
        await mainMenu();
        break;
      case "Exit":
        cont = false;
        break;
    }
  }
}

async function showMenu(message: string, choices: string[]): Promise<string> {
  const answer = await inquirer.prompt({
    name: "option",
    type: "list",
    message,
    choices
  });
  return answer.option;
}
