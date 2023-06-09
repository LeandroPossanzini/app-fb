const express = require('express')
const http = require('http')
const jwt = require("jsonwebtoken")
const mongoose = require('mongoose')
var compression = require('compression')
const registerUser = require("./auth/register")
const login = require("./auth/login")
const userRoutes = require('./routes/user')
require('dotenv').config()


const app =  express()

//midlewares
app.use(express.json());
app.use(compression());
app.use('/',registerUser)
app.use("/", login)
app.use('/api', userRoutes)
//routes
app.get("/", (req,res) =>{
    res.send("welcome to my api")
})

//mongoDB conection
mongoose.connect(process.env.MONGODB_URI)
    .then( () => console.log("conectado a la base de datos"))
    .catch((error) => console.log(error))

//server
const serverHttp = http.createServer(app)
serverHttp.listen(process.env.HTTP_PORT, process.env.IP, () => console.log("Server on"))