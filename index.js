const mysql = require('mysql2');
const inquirer = require('inquirer');
const config = require('./config/connection')

const startPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options', 
            message: 'What would you like to do',
            choices: 
            ['View All Roles', 
            'View All Departments',
            'View All Employees',
            'Add A Department', 
            'Add A Role', 
            'Add A New Employee', 
            'Update Employee Info']
        }
    ]).then(employerData => {
        if (employerData.options === 'View All Roles') {
            allRoles();
        } else if (employerData.options === 'View All Departments') {
            allDeps();
        } else if (employerData.options === 'View All Employees') {
            allEmp();
        } else if (employerData.options === 'Add A Department') {
            addDeptPrompt();
        } else if (employerData.options === 'Add A Role') {
            addRolePrompt();
        } else if (employerData.options === 'Add A New Employee') {
            addEmpPrompt();
        } else if (employerData.options === 'Update Employee Info') {
            
        }
    });
};

//DEPARTMENT FUNCTIONS
const allDeps = (req) => {
    //reqest all info from departments 
};

const addDeptPrompt = () => {
    //asks questions about new department
};

const addDept = (body) => {
    //adds new department to table 
};

//EMPLOYEE FUNCTIONS
const allEmp = (req) => {
    //reqest all info from employee 
};

const addEmpPrompt = () => {
    //asks questions about new employee
};

const addEmp = (body) => {
    //adds new employee to table 
};

//ROLE FUNCTIONS
const allRoles = (req) => {
    //reqest all info from role 
};

const addRolePrompt = () => {
    //asks questions about new role
};

const addRole = (body) => {
    //adds new role to table 
};