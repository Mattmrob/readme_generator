// adding required packages and importing code
const inquirer = require('inquirer');
const fs = require('fs');
import generateMarkdown from './utils/generateMarkdown';

// inquirer prompts
inquirer.prompt([


    
])


// Function that writes readme using answered inquirer prompts
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, callback())
}

// initialization function
function init() {
    writeToFile();
}

// calling init function
// init();
