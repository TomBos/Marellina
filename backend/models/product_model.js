const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ProductSchema = mongoose.Schema({
    id_product: {
        type: String,
        required: true,
        unique: true,
    },
    img_url: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
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
