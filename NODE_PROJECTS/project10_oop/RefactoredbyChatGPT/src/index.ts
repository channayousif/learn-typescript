#!/usr/bin/env node

import chalk from "chalk";
import { mainMenu } from "./menu.js";

console.log("---------------------------------------------------");
console.log(`|----------${chalk.bold.red("XYZ School Management System")}------------|`);
console.log("---------------------------------------------------");
console.log("Welcome to XYZ School - channayousif");

mainMenu();
