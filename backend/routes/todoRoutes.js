//Importing the dependencies
const express = require('express')
const todomodel = require('../models/todomodel')
const { createTask, viewTasks, updateTask, deleteTask } = require('../controllers/todocontroller')
const router = express.Router()

    /* Objective: Create a new task
     Method: POST /api/todos
     Parameters: None           */
    router.post('/', createTask)

    /* Objective: Display the tasks
     Method: GET /api/todos
     Parameters: None           */
    router.get('/', viewTasks)
    
     /* Objective: Update a task
     Method: PATCH /api/todos/:id
     Parameters: id             */
    router.patch('/:id', updateTask)

     /* Objective: Delete a task
     Method: DELETE /api/todos/:id
     Parameters: id             */
    router.delete('/:id', deleteTask)
  
//Exporting the Router
module.exports = router; 