import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts/TodoContext';
import Todoform from './components/Todoform';
import Todoitem from './components/Todoitem';

function App() {
  const [todos, setTodos] = useState([])
  const [error, setError] = useState("")
  const addTodo = async(todo) => {
    try {
      setError("")
    const res = await fetch('/api/todos', {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
      })
    const json = await res.json()
    if (!res.ok) {
    throw new Error(json.error || "Failed to add todo")
    }
    setTodos((prev) => [...prev, json.data])
    }
    catch (error) {
    setError(error.message)
  }
  }
    
  
 const updateTodo = async (id, todo) => {
  try{
    setError("")
  const res = await fetch(`/api/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data: todo })
  })
  const json = await res.json()
  if (!res.ok) {
    throw new Error(json.error || "Failed to add todo")
    }
    setTodos((prev) => prev.map((prevTodo) => (
  prevTodo._id === id ? json.data : prevTodo
    )))
    }
    catch (error) {
    setError(error.message)
  }
  }

  const deleteTodo = async (id) => {
    try{
    setError("")
  const res = await fetch(`/api/todos/${id}`, {
    method: "DELETE"
  })
  const json = await res.json()
  if (!res.ok) {
    throw new Error(json.error || "Failed to add todo")
    }
    setTodos((prev) => prev.filter((prevTodo) => prevTodo._id !== id))
    }
    catch (error) {
    setError(error.message)
  }
  }

  const toggleTodo = async (id) => {
    try{
    setError("")
  const targetTodo = todos.find((todo) => todo._id === id)
  const res = await fetch(`/api/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      data: {
        ...targetTodo,
        completed: !targetTodo.completed
      }
    })
  })
  const json = await res.json()
  if (!res.ok) {
    throw new Error(json.error || "Failed to add todo")
    }
   setTodos((prev) => prev.map((prevTodo) => (
  prevTodo._id === id ? json.data : prevTodo
    )))
    }
    catch (error) {
    setError(error.message)
  }
  }

  useEffect(() => {
  const fetchTodos = async () => {
    const response = await fetch('/api/todos')
    const json = await response.json()
    if (response.ok) {
      setTodos(json.data)
    }
  }
  fetchTodos()
  }, [])


  return (
    <TodoProvider value = {{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className = "bg-[#172842] min-h-screen py-8">
            <div className = "w-full max-w-2xl mx-auto bg-[#1E2A47] rounded-lg shadow-lg p-6">
                <h1 className = "text-2xl font-bold text-white mb-4">Todo List</h1>
                <p className = "text-gray-400">Manage your Tasks</p>
                <div className = "mt-6">
                  {/* Todo List Items will go here */}
                  <Todoform />
                </div>
                <div className = "flex flex-wrap gap-y-3">
                  {/* Loop and ToDoItem will go here */}
                  {
                    todos.map((todo) =>(
                      <div key = {todo._id} className = "w-full">
                      <Todoitem todo={todo} />
                      </div>
                      ))
                  }
                </div>
            </div>
      </div>
    </TodoProvider>
 )     
}
export default App;
