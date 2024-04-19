#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright("Welcome ........My Currency Converter Project......."));
console.log(chalk.green.greenBright("*****Created By Aiman Khalid*****"));
const currency = {
    USD: 1, //dollar
    PKR: 278.5, //pakistan
    EURO: 0.94, //europe
    CAD: 1.4, //canadian
    AUD: 1.6, //australian
    AED: 3.7, //dirham
    JPY: 1.55, // japan
};
const answer = await inquirer.prompt([
    {
        name: "from",
        message: (chalk.magenta("Enter from currency")),
        type: "list",
        choices: ["USD", "EURO", "CAD", "AUD", "PKR", "AED", "JPY"],
    },
    {
        name: "to",
        message: (chalk.magenta("Enter to currency")),
        type: "list",
        choices: ["USD", "EURO", "CAD", "AUD", "PKR", "AED", "JPY"],
    },
    {
        name: "currency",
        message: (chalk.magenta("Enter your currency")),
        type: "number",
    }
]);
let fromcurrency = currency[answer.from];
let tocurrency = currency[answer.to];
let Currency = answer.currency;
let basecurrency = Currency / fromcurrency;
let convertcurrency = basecurrency * tocurrency;
console.log(convertcurrency);
console.log(chalk.yellow("***** Thank you*****"));
