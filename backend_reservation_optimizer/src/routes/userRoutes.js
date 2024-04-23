const express = require('express');
const bcrypt = require('bcryptjs');
const crypto = require('crypto'); 
const User = require('../models/User'); 
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        function generateRandomPassword(length = 10) {
            return crypto.randomBytes(length).toString('hex');
          }
        const { username, password, 
            firstName,
            lastName,
            role 
        } = req.body;
        const hashedPassword = await bcrypt.hash(password || generateRandomPassword() , 8);
        console.log(req.body)
        const user = new User({
            username,
            passwordHash: hashedPassword, 
            firstName,
            lastName,
            role
        });
        await user.save();
        res.status(201).json({ message: 'User successfully registered' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const query = {}
        
        if (Object.keys(req.query).length){
            Object.assign(query, req.query) 
        }

        const users =  await User.find(query).lean().exec();
        res.status(201).json({users});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log('Login Attempt:', username); 

        const user = await User.findOne({ username }, {passwordHash:1});
        if (!user) {
            console.log('User not found:', username); 
            return res.status(401).json({ message: "Authentication failed" });
        }

        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(401).json({ message: "Authentication failed" });
        }

        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        console.log('Login successful:', username); 
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error); 
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
