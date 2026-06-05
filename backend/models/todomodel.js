//Importing the dependencies
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Creating the Schema
const ToDoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    description: {
        type: String,
        required: true
    },
}, {timestamps: true })

//Exporting the Schema
module.exports = mongoose.model('todo', ToDoSchema)