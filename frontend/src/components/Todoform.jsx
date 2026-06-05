import React from 'react'
import { useTodo } from '../contexts/TodoContext';
import { useState } from 'react';

function Todoform() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const {addTodo} = useTodo();
    const [formError, setFormError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description){
        setFormError("Please fill both title and description");
        return;}
        setFormError("");
        addTodo({
            title,
            description,
            completed: false
        })
        setTitle("");
        setDescription("");
    }

    return (
        <form onSubmit= {handleSubmit} className = "flex">
            <input
        type = "text"
        placeholder = "Add a new task"
        className = "flex-1 px-4 py-2  focus:outline-none bg-white"
        value = {title}
        onChange = {(e) => setTitle(e.target.value)}
        />

            <input 
        type = "text"
        placeholder = "Add the task Description"
        className = "flex-1 px-4 py-2 focus:outline-none bg-white"
        value = {description}
        onChange={(e) => setDescription(e.target.value)}
        />


        <button type = "submit"
        className = "bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none">
        Add
        </button>
        {formError && (
        <p className="text-red-400 text-sm m-2">{formError}</p>
        )}
    </form>
  )
}

export default Todoform