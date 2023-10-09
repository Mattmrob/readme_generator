// adding required packages and importing code
const inquirer = require('inquirer');
const fs = require('fs');

// ------------- MAIN INITILIZATION FUNCTION ----------------

const init = () => {

// inquirer prompts
// FOR: Title, Description, Table of Contents (with clickable links - NOT USER INPUT), Installation
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
            "CC Attribution 4.0 International",
            "CC Attribution-ShareAlike 4.0 International",
            "CC Attribution-NonCommercial 4.0 International",
            "CC Attribution-NoDerivates 4.0 International",
            "CC Attribution-NonCommmercial-ShareAlike 4.0 International",
            "CC Attribution-NonCommercial-NoDerivatives 4.0 International",
            "Eclipse Public License 1.0",
            "GNU GPL v3",
            "GNU GPL v2",
            "GNU AGPL v3",
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
        
        // FOR GENERATING LICENSE DESCRIPTION OR BADGES - DEPENDING ON USER INPUT:

        let licenseLink = "";
        let licenseBadge = "";

        switch (answers.license) {
            case "Apache 2.0":
                licenseLink = "<a href='https://opensource.org/licenses/Apache-2.0'>Apache 2.0</a>";
                licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
            case "BSD-3":
                licenseLink = "<a href='https://opensource.org/licenses/BSD-3-Clause'>BSD-3</a>";
                licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                break;
            case "BSD-2":
                licenseLink = "<a href='https://opensource.org/licenses/BSD-2-Clause'>BSD-2</a>";
                licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
                break;
            case "CC Attribution 4.0 International":
                licenseLink = "<a href='https://creativecommons.org/licenses/by/4.0/'>CC Attribution 4.0 International</a>";
                licenseBadge = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
                break;
            case "CC Attribution-ShareAlike 4.0 International":
                licenseLink = "<a href='https://creativecommons.org/licenses/by-sa/4.0/'>CC Attribution-ShareAlike 4.0 International</a>";
                licenseBadge = "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
                break;
            case "CC Attribution-NonCommercial 4.0 International":
                licenseLink = "<a href='https://creativecommons.org/licenses/by-nc/4.0/)'>CC Attribution-NonCommercial 4.0 International</a>";
                licenseBadge = "[!License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)";
                break;
            case "CC Attribution-NoDerivates 4.0 International":
                licenseLink = "<a href='https://creativecommons.org/licenses/by-nd/4.0/'>CC Attribution-NoDerivates 4.0 International</a>";
                licenseBadge = "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)";
                break;
            case "CC Attribution-NonCommmercial-ShareAlike 4.0 International":
                licenseLink = "<a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC Attribution-NonCommmercial-ShareAlike 4.0 International</a>";
                licenseBadge = "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)";
                break;
            case "CC Attribution-NonCommercial-NoDerivatives 4.0 International":
                licenseLink = "<a href='https://creativecommons.org/licenses/by-nc-nd/4.0/'>CC Attribution-NonCommercial-NoDerivatives 4.0 International</a>";
                licenseBadge = "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)";
                break;
            case "Eclipse Public License 1.0":
                licenseLink = "<a href='https://opensource.org/licenses/EPL-1.0'>Eclipse Public License 1.0</a>";
                licenseBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
                break;
            case "GNU GPL v3":
                licenseLink = "<a href='https://www.gnu.org/licenses/gpl-3.0'>GNU GPL v3</a>";
                licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                break;
            case "GNU GPL v2":
                licenseLink = "<a href='https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'>GNU GPL v2</a>";
                licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
                break;
            case "GNU AGPL v3":
                licenseLink = "<a href='https://www.gnu.org/licenses/agpl-3.0'>GNU AGPL v3</a>";
                licenseBadge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
                break;
            case "GNU LGPL v3":
                licenseLink = "<a href='https://www.gnu.org/licenses/lgpl-3.0'>GNU LGPL v3</a>";
                licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
                break;
            case "GNU FDL v1.3":
                licenseLink = "<a href='https://www.gnu.org/licenses/fdl-1.3'>GNU FDL v1.3</a>";
                licenseBadge = "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
                break;
            case "IBM Public License Version 1.0":
                licenseLink = "<a href='https://opensource.org/licenses/IPL-1.0'>IBM Public License Version 1.0</a>";
                licenseBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
                break;
            case "The MIT License":
                licenseLink = "<a href='https://opensource.org/licenses/MIT'>The MIT License</a>";
                licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
            case "Mozilla Public License 2.0":
                licenseLink = "<a href='https://opensource.org/licenses/MPL-2.0'>Mozilla Public License 2.0</a>";
                licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
                break;
            case "Attribution License (BY)":
                licenseLink = "<a href='https://opendatacommons.org/licenses/by/'>Attribution License (BY)</a>";
                licenseBadge = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
                break;
            case "Open Database License (ODbL)":
                licenseLink = "<a href='https://opendatacommons.org/licenses/odbl/'>Open Database License (ODbL)</a>";
                licenseBadge = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
                break;
            case "Public Domain Dedication and License (PDDL)":
                licenseLink = "<a href='https://opendatacommons.org/licenses/odbl/'>Public Domain Dedication and License (PDDL)</a>";
                licenseBadge = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
                break;
            case "The Perl License":
                licenseLink = "<a href='https://opensource.org/licenses/Artistic-2.0'>The Perl License</a>";
                licenseBadge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
                break;
            case "The Artistic License 2.0":
                licenseLink = "<a href='https://opensource.org/licenses/Artistic-2.0'>The Artistic License 2.0</a>";
                licenseBadge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
                break;
            case "The zlib/libpng License":
                licenseLink = "<a href='https://opensource.org/licenses/Zlib'>The zlib/libpng License</a>";
                licenseBadge = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
                break;
        }


// function that generates the markdown
let markdownContent = 

`# ${answers.title} ${licenseBadge}
## <a id="description"></a>Description
${answers.description}

## Table of Contents
<a href="#description">Description</a> <br>
<a href="#installation">Installation</a> <br>
<a href="#usage">Usage</a> <br>
<a href="#license">License</a> <br>
<a href="#contribute">Contributing</a> <br>
<a href="#tests">Tests</a> <br>
<a href="#questions">Questions</a> <br>

## <a id="installation"></a>Installation
${answers.installation}

## <a id="usage"></a>Usage
${answers.usage}

## <a id="license"></a>License
This project is covered under ${answers.license} <br>
Please visit ${licenseLink} for more information on this License

## <a id="contribute"></a>Contributing
${answers.contributions}

## <a id="tests"></a>Tests
${answers.tests}

## <a id="questions"></a>Questions
${answers.questions} <br>
Github: <a href="github.com/${answers.github}/">${answers.github}</a> <br>
Email: ${answers.email}
`;
    
        // Write the readme using fs
        fs.writeFile(`README.md`, markdownContent, (err) => {
        err ? console.log(err) : console.log('No Errors Found')
        })

    })

}

init();
