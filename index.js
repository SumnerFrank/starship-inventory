// const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./config/connection');

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
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        console.table(rows);
        startPrompt();
    })
};

const addDeptPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this department?',
            validate: (nameInput) => {
                if (nameInput) {
                    true;
                } else {
                    console.log('Please enter a name.');
                    false;
                }
            }
        }
    ]).then(addDept);
};

const addDept = (body) => {
    console.log('fx works');
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [body.name];

    db.query(sql, params, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(results);
        startPrompt();
    })
};

//EMPLOYEE FUNCTIONS
const allEmp = (req) => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        console.table(rows);
        startPrompt();
    });
};

const addEmpPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        }
    ]).then(addEmp);
};

const addEmp = (body) => {
    console.log('fx works')
    const sql = `INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)`; 
    const params = [body.first_name, body.first_name, body.roles, body.manager];

    db.query(sql, params, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(results);
        startPrompt();
    })
};

const updateEmp = () => {

};

//ROLE FUNCTIONS
const allRoles = (req) => {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        console.table(rows);
        startPrompt();
    });
};

const addRolePrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the role?'
        }
    ]).then(addEmp);
};

const addRole = (body) => {
    console.log('fx works')
    //adds new role to table 
};








startPrompt();