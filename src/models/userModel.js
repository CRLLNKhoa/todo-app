const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        account: {type: String, required: true},
        password: {type: String, required: true},
        avatar: {type: String}
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;