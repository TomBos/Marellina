const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
    id_user: {
        type: Number,
        unique: true,
    },
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    JWT: {
        type: String,
        required: false,
    }
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

UserSchema.plugin(AutoIncrement, { inc_field: "id_user" });
module.exports = mongoose.model("user", UserSchema);
