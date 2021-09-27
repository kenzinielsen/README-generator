// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
var path = require('path');
var fs =require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project'
        },
        {
            type: 'confirm',
            name: 'contents',
            message: 'Would you like to add a Table of Contents? (Optional)',
            default: '',
        },
        {   
            type: 'list',
            name: 'license',
            message: 'license',
            choices: ['MIT', 'APACHE2.0', 'BSD3', 'none'],
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions and examples'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps to install this into your own project?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'contributing',
        },
        {
            type: 'input',
            name: 'test',
            message: 'tests',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
         },
         {
             type: 'input',
             name: 'email',
             message: 'What is your email address?',
         },
    ])
    .then(data => {
        console.log(data)
        writeToFile('readme.md', generateMarkdown(data))
    })

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
questions()


// template
//`# ${data.title}
//${renderLicenseBadge(data.license)}
//
//## Description
//
//${data.description}
//
//## Table of Contents 
//
//* [Installation](#installation)
//
//* [Usage](#usage)
//${renderLicenseLink(data.license)}
//* [Contributing](#contributing)

//* [Tests](#tests)
//
//* [Questions](#questions)
//
//## Installation
//
//To install necessary dependencies, run the following command:
//
//${data.installation}
//
//## Usage
//
//${data.usage}
//
//${renderLicenseSection(data.license)}
//
//## Contributing
//
//${data.contributing}
//
//## Tests
//
//To run tests, run the following command:
//
//${data.test}
//
//## Questions
//
//If you have any questions about the repo, open an issue or contact me directly at ${
//    data.email
//  }. You can find more of my work at [${data.github}](https://github.com/${
//    data.github
//  }/).
//
//`;