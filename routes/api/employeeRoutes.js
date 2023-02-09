const express = require('express');
const router = express.Router();
const db = require('../../config/connection');

//get employees from db
router.get('/employee', (req,res) => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, row) => {
        if (err) {
            res.status(500).json({error: err.message});
        }
        res.json({
            message: 'Success!',
            data: row
        })
    })
});

//add employee to db
router.post('/employee', ({ body },res) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);`
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(500).json({error: err.message});
        }
        res.json({
            message: 'Success!',
            data: body
        })
    })
});



//get individual employee from db
router.get('/employee/:id', (req,res) => {
    const sql = `SELECT * FROM employee where id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(500).json({error: err.message});
        }
        res.json({
            message: 'Success!',
            data: row
        })
    })
});


//update an employee
// router.put 

module.exports = router;