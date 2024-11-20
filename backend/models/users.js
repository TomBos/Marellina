const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const UserSchema = mongoose.Schema({
    id_user: {
        type: Number,
        unique: true,
    },
    name:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
});

UserSchema.plugin(AutoIncrement, { inc_field: "id_user" });
module.exports = mongoose.model("user", UserSchema);
