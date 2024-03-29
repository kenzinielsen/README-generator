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
            //npm install, inquirer, node index.js
        },
        {
            type: 'confirm',
            name: 'contributing',
            message: 'Would you like to add a contributing section?',
            default: '',
        },
        {
            type: 'confirm',
            name: 'test',
            message: 'Would you like to add test examples?',
            default: '',
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

questions()