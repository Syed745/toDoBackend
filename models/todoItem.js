// Import mongoose to create schema
const mongoose = require("mongoose");


const TodoItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    createdAt: Date,
})

module.exports = mongoose.model('todo', TodoItemSchema);