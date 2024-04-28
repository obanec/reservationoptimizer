const express = require('express');
const bcrypt = require('bcryptjs');
const authMiddleware = require('./middleware/authMiddleware'); 
const router = express.Router();

router.get('/', authMiddleware , async (req, res) => {
    try {
        res.send({success:true}).status(200); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
