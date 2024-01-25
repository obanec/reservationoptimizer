const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); 
const jwt = require('jsonwebtoken');
const router = express.Router();


router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 8);

        const user = new User({
            email,
            passwordHash: hashedPassword
        });
        await user.save();
        res.status(201).json({ message: 'User successfully registered' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Login Attempt:', email); 

        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found:', email); 
            return res.status(401).json({ message: "Authentication failed" });
        }

        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(401).json({ message: "Authentication failed" });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        console.log('Login successful:', email); 
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error); 
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
