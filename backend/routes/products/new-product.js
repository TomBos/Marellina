require("dotenv/config");
const express = require("express");
const router = express.Router();

// Modules
const Product = require("../../models/product_model");


router.post("/", async (req, res) => {

    return res.status(200).json({"ok": true})

})

module.exports = router;