const chalk = require('chalk')

const errorMsg = "This is an error message";
const successMsg = "Success";

console.log(chalk.red.bold.inverse(errorMsg));

console.log(chalk.blue.bold(successMsg));