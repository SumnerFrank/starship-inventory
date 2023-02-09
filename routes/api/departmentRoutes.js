const express = require('express');
const db = require('../../config/connection');
const router = express.Router();


//get departments from db
router.get('/department', (req,res) => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
        }
        res.json({
            message: 'Success!',
            data: rows
        });
    })
});

//add department to db
router.post('/department', (req,res) => {
    const sql = `INSERT INTO department`;

});

//get individual department from db
router.get('/department/:id', (req,res) => {
    const sql = `SELECT * FROM department`;
    const params = [req.params.id];
    db.query(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({error: err.message});
        }
        res.json({
            message: 'Success!',
            data: rows
        });
    });
});

module.exports = router;