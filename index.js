// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const inquirer = require('inquirer');
const fs = require('fs')

const question = [inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'Title',
      //Validating that ensure a response
      validate: (value)=> { if(value){return true}
      else {return 'Please provide and answer to continue'}}
    },
    {
      type: 'input',
      message: 'Provide a description of the project',
      name: 'Description',
      validate: (value)=> { if(value){return true}
      else {return 'Please provide and answer to continue'}}
    },
    {
      type: 'input',
      message: 'What are the installation instructions',
      name: 'Installation',
      validate: (value)=> { if(value){return true}
      else {return 'Please provide and answer to continue'}}
    },
    {
      type: 'input',
      message: 'What tests run with your project?',
      name: 'Tests',
      validate: (value)=> { if(value){return true}
      else {return 'Please provide and answer to continue'}}
  },
    {
        type: 'input',
        message: 'How can someone report an issue?',
        name: 'Report',
        validate: (value)=>  {if(value){return true}
        else {return 'Please provide and answer to continue'}}
      },
    {
        type: 'input',
        message: 'How can someone contribute?',
        name: 'Contribute',
        validate: (value)=> { if(value){return true}
        else {return 'Please provide and answer to continue'}}
    },
    {
      type: 'input',
      message: 'How do you use this project?',
      name: 'Usage',
      validate: (value)=> { if (value){return true}
      else {return 'Please provide and answer to continue'}}
  },
    {
        type: 'list',
        message: 'Select the license required',
        name: 'license',
        choices: ['The MIT license', 'The GPL license', 'Apache license', 'GNU license', 'N/A'],
        validate: (value)=> { if(value){return true}
        else {return 'Please provide and answer to continue'}}
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'Github',
        validate: (value)=> { if (value){return true}
        else {return 'Please provide and answer to continue'}}
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
        validate: (value)=> { if(value){return true}
        else {return 'Please provide and answer to continue'}}
    },
    {
        type: 'input',
        message: 'What is your',
        name: 'Github',
        validate: (value)=> { if(value){return true}
        else {return 'Please provide and answer to continue'}}
    },
  ])]
  .then(({
    Title, Description, Installation, Report, Contribute, Usage, License, GitHub, Email,
  })=>{fs.writeFile('README.md',

  )})