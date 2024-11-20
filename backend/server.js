// noinspection HttpUrlsUsage
// noinspection JSCheckFunctionSignatures

// Import .env variables
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");


// DB connection
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const DB = process.env.DB;
const connector = CONNECTION_STRING.replace(/\/\?/, `/${DB}?`);

// CORS
app.use(cors());

// Parse JSON
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Import routes

app.use('/authenticate', (req, res) => {
    /*
    const User = require("./models/users");

    const newUser = new User({
        name: "John Doe",
        password: "Washing Machine Heath",
    });

    newUser.save()
        .then(user => {
            console.log("Created User:", user);
        })
        .catch(err => {
            console.error("Error:", err);
        });

    res.send("ok :D");
    */

    console.log(req.body);
});

// Use routes


// Render react app on server side
app.get("/", (req, res) => {
    res.render(path.join(__dirname, "dist", "index.html"));
});

// 404 route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

mongoose
    .connect(connector)
    .then(() => console.log(`Connected to MongoDB! -> Database ${process.env.DB}`))
    .catch((error) => console.error("Error connecting to MongoDB", error));
