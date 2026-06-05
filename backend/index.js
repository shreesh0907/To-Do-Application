//Importing our packages
const express = require('express')
const dotenv = require('dotenv')
const todoRoutes = require('./routes/todoRoutes')
const connectDB = require('./config/globaldatabaseconnection')

//Creating the Express app
const app = express()

//Using the Express App and configuring the dotenv
app.use(express.json())
dotenv.config()

//Calling the Database
connectDB()

//MiddleWare
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routes
app.use('/api/todos/', todoRoutes)

//Express Listening on the Port
const port = process.env.PORT || 2108;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})