// System
require("dotenv/config");
const express = require("express");
const router = express.Router();

// Modules
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require("../../models/users");

/*

// Passport Local Strategy for login
passport.use(new passport.LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username })
            .then(user => {
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }

                // Compare password using bcrypt
                bcrypt.compare(password, user.password, function(err, isMatch) {
                    if (err) return done(err);
                    if (isMatch) return done(null, user);
                    return done(null, false, { message: 'Incorrect password.' });
                });
            })
            .catch(err => done(err));
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id)
        .then(user => done(null, user))
        .catch(err => done(err));
});

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(403).json({ message: 'Unauthorized access' });
}

// Login route
router.post("/authenticate", passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
    failureFlash: true
}));

*/


module.exports = router;