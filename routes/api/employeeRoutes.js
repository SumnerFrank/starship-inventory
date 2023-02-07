const express = require('express');
const router = express.Router();
const db = require('../../config/connection');

//get employees from db
router.get('employee', (req,res) => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
        }
    })
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