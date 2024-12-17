const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ProductSchema = mongoose.Schema({
    // Required by system
    id_product: {
        type: Number,
        unique: true,
    },
    active: {
        type: Boolean,
        required: false,
        default: false
    },


    // Admin Input
    price: {
        type: Number,
        required: true,
    },
    markup: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    region: {
        type: String,
        required: false,
    },
    ripeness: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
    },
});

ProductSchema.plugin(AutoIncrement, { inc_field: "id_product" });
module.exports = mongoose.model("products", ProductSchema);
