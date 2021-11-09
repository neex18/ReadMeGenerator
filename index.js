const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Provide a description of the project',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions',
      name: 'Installation',
    },
    {
        type: 'input',
        message: 'How can someone report an issue?',
        name: 'Report',
      },
    {
        type: 'input',
        message: 'How can someone contribute?',
        name: 'Contribute',
    },
    {
        type: 'input',
        message: 'What license is required?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Github URL',
        name: 'Github',
    },
    {
        type: 'input',
        message: 'Github URL',
        name: 'Github',
    },
    {
        type: 'input',
        message: 'Github URL',
        name: 'Github',
    },
  ])