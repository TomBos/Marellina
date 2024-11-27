// System
require("dotenv/config");
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Modules
const User = require("../../models/user_model");


router.post("/login", async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});
        if (!user || !user.isAdmin) {
            return res.status(401).json({message: "Unauthorized"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({message: "Invalid credentials"});
        }

        const JWT_AUTH_TOKEN = jwt.sign(
            {id: user.id, username: user.username, isAdmin: user.isAdmin},
            process.env.JWT_SECRET,
            {expiresIn: "30d"}
        );

        await User.updateOne(
            { _id: user._id },
            { $set: { JWT: JWT_AUTH_TOKEN } }
        );

        res.json({message: "Login successful", tokenValue: JWT_AUTH_TOKEN, status: 200});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Server error"});
    }
});

router.post("/validate-token",async (req, res) => {

    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    const headerToken = authHeader.split(' ')[1];

    if (!headerToken) {
        return res.status(401).json({ message: 'Token missing' });
    }

    try {

        const user = await User.findOne({JWT: headerToken});
        if (!user || !user.isAdmin) {
            return res.status(401).json({message: "Unauthorized"});
        }

        return res.status(200).json({message: "Valid Token", validity: user.isAdmin});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Server error"});
    }
});


module.exports = router;