# TO DO STORAGE APPLICATION
### Project Overview:
A full-stack To-Do List application built using the MERN stack.
The application allows users to create, view, update, search, and delete tasks while maintaining synchronization between the React frontend and MongoDB database through REST APIs.

### Project Objectives:
## Backend Objectives --
    API Decision and Design Thinking
    Build RESTful APIs using Node.js and Express.js
    Connect the application to MongoDB
    Implement CRUD operations
    Organize backend using Models & Controllers 
    Handle errors and validation
    Test the APIs

## Frontend Objectives --
    Integrate React frontend with backend APIs
    Display tasks dynamically
    Perform Create, Read, Update and Delete operations (CRUD Operations)
    Update task status
    Handle loading and error states
    Build a responsive user interface

### Project Features -- 
    Create Task
    View Tasks
    Update Task
    Delete Task

### Tech Stack --
## Frontend -- 
    ReactJS
    Tailwind CSS
    React Router
## Backend
    Node.js
    Express.js
## Database
    Mongoose
    MongoDB
## Deployment
    Netlify

### Environment Variables
Create a .env file in the root directory and add:
PORT=2043
MONGODB_URI=mongodb://shreeshpd07:gRiW8hrRFUmu1ofT@ac-umaavqw-shard-00-00.yokvwtw.mongodb.net:27017,ac-umaavqw-shard-00-01.yokvwtw.mongodb.net:27017,ac-umaavqw-shard-00-02.yokvwtw.mongodb.net:27017/?ssl=true&replicaSet=atlas-vtzcjm-shard-0&authSource=admin&appName=ToDo

### API Endpoints -- 
    Adding the Task                         >> [POST /todos]
    Get All Tasks                           >> [GET /todos]
    Update tasks                            >> [PATCH /todos/:id]
    Marking a task as completed/incomplete  >> [PATCH /todos/:id]
    Deleting a task                         >> [DELETE /todos/:id]

## Commands --
    npm init -y
    npm i express
    npm i nodemon
    npm i dotenv
    npm i mongoose
    npm i mongodb
    npm i cors
    npm i react-router-dom
>> Running the Application: Development Mode: npm run dev

## Challenges Faced
-- Backend:
    -- Designing the REST APIs
    -- MongoDB Integration
    -- Project Structure
-- Frontend:
    -- Transitioning from Local Storage to MongoDB: The original application stored todos in browser local storage using React state and localStorage.
    -- MongoDB _id vs Frontend id
    -- API Communication Issues: I verified backend routes, restarted the server, configured proxy settings correctly, and tested endpoints independently before reconnecting them to the frontend.


    

    
