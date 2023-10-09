// We need a function that generates license section, a badge near the top of the readme, and a license description in the license section

// title, description, table of contents (not user input), installation, usage, license (switch case setup), contributions, tests, github, email, questions
// function that generates the markdown
const generateMarkdown = (answers) => { console.log(
`#${answers.title}

##Description
${answers.description}

`)
}

module.exports = generateMarkdown();
