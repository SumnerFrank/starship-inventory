const mysql = require('mysql2');
const inquirer = require('inquirer');
const config = require('./config/connection')

const startPrompt = () => {
    inquirer.prompt([
        // {initial prompt, directory?}
        // would want to view/add departments, roles, and employees
    ]).then(employerData => {
        // if else statements based on choices to initial prompt
    });
};

