import inquirer from "inquirer";

export async function showMenu(title: string, choices: string[]): Promise<string> {
  const input = await inquirer.prompt({
    name: "opt",
    type: "list",
    message: `\n___________________________________\n ${title} \n---------------------------------------\n`,
    choices: choices,
  });
  return input.opt;
}