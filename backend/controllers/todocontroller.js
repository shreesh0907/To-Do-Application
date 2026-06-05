//Importing the dependencies
const express = require('express')
const todomodel = require('../models/todomodel')

/* Function: Creating a new task */
exports.createTask = async(req,res) => {
    const {title, description, completed} = req.body;
    if(!title || !description || completed == ''){
    return res.status(400).json({
      error: 'Please fill all the fields'
    })
    }
    try {
    const todo = await todomodel.create(req.body)
    res.status(200).json({
           message: "The task has been added",
           data: todo
        })
    }
    catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}

/* Function: View all the Tasks */
exports.viewTasks = async(req,res) => {
const todo = await todomodel.find()
    if(!todo){
        res.status(400).json({
            message: "No tasks found in the database"
        })
    }
    res.status(200).json({
           data: todo
        })
}

/* Function: Update the Task by its Id */
exports.updateTask = async(req,res) => {
const {id} = req.params;
const {data} = req.body;
const todo = await todomodel.findByIdAndUpdate(
    id, 
    data, 
    {returnDocument: "after"}
)
    if(!todo){
        res.status(400).json({
            message: "Task of that Id is not found"
        })
    }
    res.status(200).json({
           data: todo
        })
}

/* Function: Delete the Task by its Id */
exports.deleteTask = async(req,res) => {
    const {id} = req.params;
    const todo = await todomodel.findByIdAndDelete(id)
    if(!todo){
        res.status(400).json({
            message: "No tasks found in the database"
        })
    }
    res.status(200).json({
           message: "The task has been succesfully deleted"
        })
}
