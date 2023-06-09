const router = require("express").Router();
const user = require('../models/user');
const CryptoJs = require("crypto-js");


router.post("/register", async (req,res) =>{
    const newUser = new user({
        name: req.body.name,
        password:CryptoJs.AES.encrypt(req.body.password,"palabrasecreta").toString()
    })
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router