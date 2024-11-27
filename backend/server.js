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
const passport = require('passport');

// DB connection
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const DB = process.env.DB;
const connector = CONNECTION_STRING.replace(/\/\?/, `/${DB}?`);


// CORS
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
require("./config/passport")(passport);

// Parse JSON
app.use(bodyParser.json());



// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));


// Import routes
const userRoute = require("./routes/users/admin");


// Use routes
app.use("/API/users",userRoute);


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


// Connect to DB
mongoose
    .connect(connector)
    .then(() => console.log(`Connected to MongoDB! -> Database ${process.env.DB}`))
    .catch((error) => console.error("Error connecting to MongoDB", error));
