// System
require("dotenv/config");
const express = require("express");
const router = express.Router();

// Modules
const bcrypt = require('bcryptjs');
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

        const token = jwt.sign(
            {id: user.id, username: user.username, isAdmin: user.isAdmin},
            process.env.JWT_SECRET,
            {expiresIn: "30d"}
        );

        res.json({message: "Login successful", token});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Server error"});
    }
});


module.exports = router;