#! /usr/bin/env node
/**
 * @Date: 13-04-2024
 * @author: channayousif
 * @Project: 01
 * @description:
 * This guess the number game is a short TypeScript/Node.js project that allows the user to
 *  guess the number generated by the computer. There are also several ways to alter the game,
 *  like adding more rounds or displaying the score. It’s quite simple and uses the random
 *  function to generate a number.
 */
import inquirer from "inquirer";

let random_number = 0;
let score = 0;
console.log(" --------------------------------");
console.log("|      Number Guessing Game      |");
console.log(" --------------------------------");
console.log('(Press 0 to quit the game)');
while(true){

//Generate random number
random_number=Math.ceil(Math.random()*10);
//take user input
const user_input = await inquirer.prompt([{
    message:"Please Guess a number from 1 to 10 :",
    name:"number",
    type:"input"
}])
//Generate result
let temp =Math.abs(random_number - user_input.number);
if(user_input.number === "0"){
    break;
}else if(temp == 0){
    score+=(10);
    console.log(`*********Bulls eye!***********\nYou guessed correctly! \nRandom number was ${random_number} \nYour guess was ${user_input.number}.\n Difference was ${temp} \n****your score is now ${score}****`)
}else if(temp <= 1){
    score+=(7);
    console.log(`Your guess was Very good! \nRandom number was ${random_number} \nYour guess was ${user_input.number}.\n Difference was ${temp} \n****your score is now ${score}****`)
}else if(temp <= 3){
    score+=(6-temp);
    console.log(`Your guess was good! \nRandom number was ${random_number} \nYour guess was ${user_input.number}.\n Difference was ${temp} \n****your score is now ${score}****`)
}else if(temp >= 3){
    score-=(temp-3);
    console.log(`Your guess was not good!!\nRandom number was ${random_number} \nYour guess was ${user_input.number}.\n Difference was ${temp} \n****your score is now ${score}****`)
};
if(score<=0){
    console.log("you loose!")
    break;
}



}