const fs = require('fs');
const inquirer = require('inquirer');
const teams = require('./util/generateHtml');
const Employee = require("./lib/Employee");
const engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");




inquirer.prompt ([
    {
        type:'input',
        message:'What is your name?:',
        name:'name'
    },
    {
        type:'list',
        message:'What is your role?',
        choices:['Intern','Engineer','Manager'],
        name:'role',
    },
    {
        type:'input',
        message:'Enter your email address:',
        name:'email'
    },
    {
        type:'input',
        message:'Enter your employee ID:',
        name: 'id',
    },
    {
        type:'input',
        message:'Enter your office number:',
        name:'office',
        // need to make this an option only when user selects manager as role
    },
    {
        type:'input',
        message:'Enter the school you attend:',
        name:'office',
        // need to make this an option only when user selects intern as role
    },
    {
        type:'input',
        message:'Enter your GitHub username:',
        name:'office',
        // need to make this an option only when user selects engineer as role
    },
    {
        type: 'list',
        message: 'Do you want to add another employee?',
        choices: ['Yes', 'No'],
        name: 'addEmployee',
    },
          
]) 
then(ans => {
    if (ans.addEmployee === 'No') {
        fs.writeFile('index.html', teams(), (err) => {
            if (err) {
                console.log("error")
            } else {
                console.log('Your information has been saved!');
            }
        });
    // } else if (ans.addEmployee === 'Yes') need to make this return to first question
        
    }
    
})