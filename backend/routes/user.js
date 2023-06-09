const express = require("express")
const userSchema = require("../models/user")

const router = express.Router()

// crear usuario
router.post("/users", (req,res) =>{
    usuario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje: error}))
});


// obtener todos los usuarios
router.get("/users", (req,res) =>{
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje: error}))
});

module.exports = router