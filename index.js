// adding required packages and importing code
const inquirer = require('inquirer');
const fs = require('fs');

// ------------- MAIN INITILIZATION FUNCTION ----------------
const init = () => {

// inquirer prompts
// WE NEED: Title, Description, Table of Contents (with clickable links - NOT USER INPUT), Installation
// Usage, License, Contributing, Tests, and Questions

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description for your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the instructions for installing your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How can users use your project?"
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project",
        choices: [
            "Apache 2.0",
            "BSD-3",
            "BSD-2",
            "Attribution 4.0 International",
            "Attribution-ShareAlike 4.0 International",
            "Attribution-NonCommercial 4.0 International",
            "Attribution-NoDerivates 4.0 International",
            "Attribution-NonCommmercial-ShareAlike 4.0 International",
            "Attribution-NonCommercial-NoDerivatives 4.0 International",
            "Eclipse Public License 1.0",
            "GNU GPL v3",
            "GNU GPL v2",
            "GNU LGPL v3",
            "GNU LGPL v3",
            "GNU FDL v1.3",
            "IBM Public License Version 1.0",
            "The MIT License",
            "Mozilla Public License 2.0",
            "Attribution License (BY)",
            "Open Database License (ODbL)",
            "Public Domain Dedication and License (PDDL)",
            "The Perl License",
            "The Artistic License 2.0",
            "The zlib/libpng License",
        ]
        // List of Licenses and MD badges from https://gist.github.com/kofiav/c1059e1075b67582e86b07aa9759e20d
    },
    {
        type: "input",
        name: "contributions",
        message: "How should other users contribute to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "How should users perform tests on this project?"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github profile name, this will be added to the Questions section of the readme."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter an email for ease of contact, if you would not like to include an email, please leave this blank."
    },
    {
        type: "input",
        name: "questions",
        message: "Please include a message for the Questions section on how to contact you, this will appear with your github profile and email."
    },
    ]).then(answers => {
        
        // FOR GENERATING LICENSE DESCRIPTION OR BADGES:

        let licenseLink = "";
        let licenseBadge = "";

        switch (answers.license) {
            case "Apache 2.0":
                licenseLink = "<a href='https://opensource.org/licenses/Apache-2.0'>Apache 2.0</a>";
                licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
            case "BSD-3":
                licenseLink = "<a href='https://opensource.org/licenses/BSD-3-Clause'>Apache 2.0</a>";
                licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                break;
            case "BSD-2":
                licenseLink = "<a href='https://opensource.org/licenses/BSD-2-Clause'>Apache 2.0</a>";
                licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
                break;
                
        }


        // title, description, table of contents (not user input), installation, usage, license (switch case setup), contributions, tests, github, email, questions
        // function that generates the markdown
        let markdownContent = 

        `#${answers.title} ${licenseBadge}

        ##<a id="description"></a>Description
        ${answers.description}

        ##Table of Contents
        <a href="#description">Description</a>
        <a href="#installation">Installation</a>
        <a href="#usage">Usage</a>
        <a href="#license">License</a>
        <a href="#contribute">Contributing</a>
        <a href="#tests">Tests</a>
        <a href="#questions">Questions</a>

        ##<a id="installation"></a>Installation
        ${answers.installation}

        ##<a id="usage"></a>Usage
        ${answers.usage}

        ##<a id="license"></a>License
        This project is covered under 
        ###${answers.License}
        Please visit ${licenseLink} for more information on this License

        ##<a id="contribute"></a>Contributing
        ${answers.contributions}

        ##<a id="tests"></a>Tests
        ${answers.tests}

        ##<a id="questions"></a>Questions
        ${answers.questions}
        Github: <a href="github.com/${answers.github}">${answers.github}</a>
        Email: ${answers.email}
        `;
        // depending on case switch need to add an icon and description for each license

        // write the file
        fs.writeFile(`TestREADME.md`, markdownContent, (err) => {
        err ? console.log(err) : console.log('No Errors Found')
        } )



        // const generate = require('./utils/generateMarkdown')
        // // Need to use answers to generate README markdown content
        // generate.generateMarkdown(answers);
    })

}


// writes readme file using generated readme content
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, callback())
// }

// calling init function
init();
