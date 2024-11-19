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

// CORS
app.use(cors());

// Parse JSON
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Import routes


// Use routes


// Render react app on server side
app.get("/", (req, res) => {
    res.render(path.join(__dirname, "dist", "index.html"));
});

// 404 route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});


app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => console.log("Connected to MongoDB!"))
    .catch((error) => console.error("Error connecting to MongoDB", error));
