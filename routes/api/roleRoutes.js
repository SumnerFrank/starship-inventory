const express = require('express');
const router = express.Router();
const db = require('../../config/connection');

//get roles from db
router.get('role', (req,res) => {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
        }
    })
});

//add role to db
router.post('role', (req,res) => {
    const sql = `INSERT INTO role`;
});

//get individual role from db
router.get('/role/:id', (req,res) => {
    const sql = `SELECT * FROM role`;
});

module.exports = router;