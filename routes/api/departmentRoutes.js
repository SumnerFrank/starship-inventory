const express = require('express');
const db = require('../../config/connection');
const router = express.Router();
const config = require('../../config/connection');


//get departments from db
router.get('department', (req,res) => {
    const sql = `SELECT * FROM department`;
})

//add department to db
router.post('department', (req,res) => {
    const sql = `INSERT INTO department`;
})

module.exports = router;