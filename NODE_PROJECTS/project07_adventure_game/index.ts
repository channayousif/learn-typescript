#!/usr/bin/env node
/**
 * @date: 6/5/2024
 * @Project: 007
 * @author: Channayousif
 * @description: Text-Based Adventure-Game in TypeScript and Node.js
It is a console-based game. 
The video [here](https://www.youtube.com/watch?v=EpB9u4ItOYU&t=1s) shows how to develop the game in Java.
 You will take the requirements of the game from the video and develop the game in TypeScript and Node.js
 */

import chalk from "chalk";
import inquirer from "inquirer";

class player {
  name: string;
  health: number;
  constructor(name: string) {
    this.name = name;
    this.health = 100;
  }
  decreaseHealth() {
    let h = this.health - 20;
    this.health = h;
  }
  usepotion() {
    let p = this.health + Math.ceil(5 + Math.random() * 50);

    if (p >= 100) {
      console.log(`|----Healh increased by ${100 - this.health} points----`);
      this.health = 100;
    } else {
      console.log(`|----Healh increased by ${p - this.health} points----`);
      this.health = p;
    }
  }
}

class enemy {
  name: string;
  health: number;
  constructor(name: string) {
    this.name = name;
    this.health = 100;
  }
  decreaseHealth() {
    let h = this.health - 20;
    this.health = h;
  }
}
console.log(
  "===================================================================="
);
console.log(
  `\t\t${chalk.bold.green(
    '"Warrior" a console based adventre Game'
  )}  \n\t${chalk.bold.red(
    "Player fights with his chosen opponent and attacks it,\n\t or use haelth potion to restore health.\n\n---Channayousif"
  )}`
);
console.log(
  "===================================================================="
);

let Name = await inquirer.prompt([
  {
    name: "player",
    type: "input",
    message: "Please Enter Player name:",
  },
  {
    name: "enemy",
    type: "list",
    message: "Please select opponent:",
    choices: ["Skeleton", "Zombie", "Wizzard"],
  },
]);
console.log(
  "===================================================================="
);
console.log(
  `\t\t${chalk.bold.green(Name.player)}  VS ${chalk.bold.red(Name.enemy)}`
);
console.log(
  "===================================================================="
);
let pl1 = new player(Name.player);
let op1 = new enemy(Name.enemy);
while (true) {
  let play = await inquirer.prompt({
    name: "option",
    type: "list",
    message: "Please select an Action:",
    choices: ["Attack", "Use health potion", "Run for your life."],
  });
  console.log(
    "===================================================================="
  );
  if (play.option == "Exit Game") {
    break;
  }
  if (play.option == "Attack") {
    console.log("----------Attacked-------");
    if (rand() == 0) {
      pl1.decreaseHealth();
      console.log(
        `${chalk.bold.red("Failed to attack")}\n| ${chalk.bold.red(
          pl1.name
        )} health is ${chalk.bold.red(pl1.health)} \n| ${chalk.bold.green(
          op1.name
        )} health is ${chalk.bold.green(op1.health)}`
      );
      if (pl1.health <= 0) {
        console.log(
          `${chalk.bold.red.italic(pl1.name)} health is ${chalk.bold.red(
            pl1.health
          )} \n ${chalk.bold.green(op1.name)} health is ${chalk.bold.green(
            op1.health
          )} \n\n${chalk.bold.green.italic("You lose!!!!")}`
        );
        process.exit();
      }
    } else {
      op1.decreaseHealth();
      console.log(
        `Attack was ${chalk.bold.green("successful!")} \n| ${chalk.bold.green(
          pl1.name
        )} health is ${chalk.bold.green(pl1.health)} \n| ${chalk.bold.red(
          op1.name
        )} health is ${chalk.bold.red(op1.health)}`
      );
      if (op1.health <= 0) {
        console.log(
          `${chalk.bold.green.italic(pl1.name)} health is ${chalk.bold.green(
            pl1.health
          )} \n ${chalk.bold.red(op1.name)} health is ${chalk.bold.red(
            op1.health
          )} \n\n${chalk.bold.green.italic("You Win!!!!")}`
        );
        process.exit();
      }
    }
  }
  if (play.option == "Use health potion") {
    console.log("---------Healh Potion is used------------");
    pl1.usepotion();
    console.log(
      `${chalk.bold.green(pl1.name)} health is ${chalk.bold.green(
        pl1.health
      )} \n ${chalk.bold.red(op1.name)} health is ${chalk.bold.red(op1.health)}`
    );
  }
  if (play.option == "Run for your life.") {
    console.log(chalk.bold.red("Runing for life . . .     .       .        ."));
    process.exit;
    break;
  }
  function rand() {
    return Math.floor(Math.random() * 2);
  }
}
