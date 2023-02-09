const mysql = require('mysql2');
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
                    console.log('Please enter a department name.');
                    false;
                }
            }
        }
    ]).then(addDept);
};

const addDept = (body) => {
    // console.log('hello world');
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
            name: 'first_name',
            message: 'What is the first name of the employee?',
            validate: fnInput => {
                if (fnInput) {
                    true;
                } else {
                    console.log('Please enter their first name')
                    false;
                }
            }
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the last name of the employee?',
            validate: lnInput => {
                if (lnInput) {
                    true;
                } else {
                    console.log('Please enter their first name')
                    false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the employee?',
            choices: 
            [
                {
                    name: 'Recruiter',
                    value: 1
                },
                {
                    name: 'Resource Coordinator',
                    value: 2
                },
                {
                    name: 'Front Desk',
                    value: 3
                },
                {
                    name: 'Cyber Security',
                    value: 4
                },
                {
                    name: 'Junior Developer',
                    value: 5
                },
                {
                    name: 'Senior Developer',
                    value: 6
                },
                {
                    name: 'Staff Developer',
                    value: 7
                },
                {
                    name: 'Data Analyst',
                    value: 8
                },
                {
                    name: 'Copywriter',
                    value: 9
                },
                {
                    name: 'Pricing Adjuster',
                    value: 10
                },
                {
                    name: 'Sales Lead',
                    value: 11
                },
                {
                    name: 'Marketing Lead',
                    value: 12
                },
                {
                    name: 'HR Manager',
                    value: 13
                },
                {
                    name: 'Security Manager',
                    value: 14
                },
                {
                    name: 'Engineering Manager',
                    value: 15
                },
                {
                    name: 'Sales Manager',
                    value: 16
                }
            ]
        },
        {
            type: 'list',
            name: 'manager',
            message: 'Whose team are they on (select manager)',
            choices: 
            [
                {
                    name: 'Eddard Stark',
                    value: 1
                }, 
                {
                    name: 'Robert Baratheon',
                    value: 2
                }, {
                    name: 'Cersei Lannister',
                    value: 3
                }, {
                    name: 'Daenerys Targaryen',
                    value: 4
                }
            ]
        }
    ]).then(addEmp);
};

const addEmp = (body) => {
    // console.log('Hello World')
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

// const updateEmp = () => {

// };

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
            name: 'title',
            message: 'What is the name of the role?',
            validate: titleInput => {
                if (titleInput) {
                    true;
                } else {
                    console.log('Pleas enter a role')
                    false;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?',
            validate: salaryInput => {
                if (salaryInput) {
                    true;
                } else {
                    console.log('Pleas enter a number')
                    false;
                }
            }
        },
        {
            type: 'list',
            name: 'department',
            message: 'Which department does this role belong to?',
            choices: 
            [
                {
                    name: 'Human Resources',
                    value: 1
                },
                {
                    name: 'Security',
                    value: 2
                },
                {
                    name: 'Engineering',
                    value: 3
                },
                {
                    name: 'Sales',
                    value: 4
                }
            ]
        }
    ]).then(addRole);
};

const addRole = (body) => {
    // console.log('Hello world')
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
    const params = [body.title, body.salary, body.department_id];
    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        startPrompt();
    })
};








startPrompt();