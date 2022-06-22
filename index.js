// TODO: Include packages needed for this application
const inquirer = require('inquirer');
let utils = require("./utils/generateMarkdown.js");
const fs = require('fs');

const readme_base = ({title, description_text, instruction_text, usage_text, contribution_text, test_text, githubUsername, license}) =>  
`# ${title}

## Description

${description_text}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${instruction_text}

## Usage

${usage_text}

## Credits

${contribution_text}

## License

${license}

## How to Contribute

Contact me if you have any questions or wish to contribute!

### Link to Github:
https://github.com/${githubUsername}

## Tests

${test_text}`

// TODO: Create an array of questions for user input
init = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description_text',
            message: 'Provide a short description explaining the what, why, and how of your project.\n - What was your motivation? \n - Why did you build this project? \n - What problem does it solve? \n - What did you learn?\n'
        },
        {
            type: 'input',
            name: 'instruction_text',
            message: 'What are the steps required to install your project? '
        },
        {
            type: 'input',
            name: 'usage_text',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'contribution_text',
            message: 'List your collaborators, if any, with links to their GitHub profiles.'
        },
        {
            type: 'input',
            name: 'test_text',
            message: 'Write down any tests of application.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'If you need help choosing a license, refer to https://choosealicense.com',
            choices: ["Apache 3.0", "BSD 2.0", "BSD 3.0","GPL v.3", "IPL 1.0", "MIT", "None"]
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub username?'
        },
    ])
// TODO: Create a function to write README file
    .then((data) => {
        const readmeConstruct = readme_base(data)
        fs.writeFile(`Generated-README.md`, readmeConstruct, (err) => {
            err ? console.error(err) : console.log('Generating...')
        })
    })
};

// Function call to initialize app
init();
