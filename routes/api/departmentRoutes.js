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
router.post('/department',({ body }, res) => {
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [body.name];
    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.json({
            message: 'Success!',
            data: body
        })
    })
})

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