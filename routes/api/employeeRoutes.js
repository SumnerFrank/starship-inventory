const express = require('express');
const router = express.Router();
const config = require('../../config/connection');

//get employees from db
router.get('employee', (req,res) => {
    const sql = `SELECT * FROM employee`;
});

//add employee to db
router.post('employee', (req,res) => {
    const sql = `INSERT INTO employee`;
});

//get individual employee from db
router.get('/employee/:id', (req,res) => {
    const sql = `SELECT * FROM employee`;
});

module.exports = router;