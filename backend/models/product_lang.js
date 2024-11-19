const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    id_product: {
        type: String,
        required: true,
    },
    id_lang:{
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("products_lang", ProductSchema);
