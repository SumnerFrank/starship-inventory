const express = require('express');
const router = express.Router();
const config = require('../../config/connection');

//get roles from db
router.get('role', (req,res) => {
    const sql = `SELECT * FROM role`;
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