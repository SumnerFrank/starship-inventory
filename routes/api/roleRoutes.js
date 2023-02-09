const express = require('express');
const router = express.Router();
const db = require('../../config/connection');

//get roles from db
router.get('/role', (req,res) => {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
        }
        res.json({
            message: 'Success', 
            data: rows
        })
    })
});

//add role to db
router.post('/role', ({ body }, res) => {
    const sql = `INSERT INTO role (title, salary) VALUES (?,?)`;
    const params = [body.title, body.salary];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({error: err.message});
        }
        res.json({
            message: 'Success', 
            data: body
        })
    })
});

//get individual role from db
router.get('/role/:id', (req,res) => {
    const sql = `SELECT * FROM role WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({error: err.message});
        }
        res.json({
            message: 'Success', 
            data: row
        })
    })
});

module.exports = router;