const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        type: {type: Number,required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: "User",required: true},
        isComplete: {type: Boolean, default: false},
        time: {type: Number, required: true},
        detail_todo: {type: String},
    },
    {
        timestamps: true
    }
);

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;