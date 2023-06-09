const router = require ("express").Router();
const User = require ("../models/user.js")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")

router.post("/", async (req, res) =>{
    try {
        const user = await User.findOne({name:req.body.name});
        !user && res.status(401).json("NAME_INCORRECTO")

        const hash = CryptoJS.AES.decrypt(user.password, "palabrasecreta");
        const passwordNew = hash.toString(CryptoJS.enc.Utf8);

        passwordNew !== req.body.password && res.status(401).json("PASSWORD_INCORRECTO");

        // desestructuro el usuario para no pasar la contraseña encriptada
        const {password , ...restoUser} = user._doc

        res.status(200).json({...restoUser})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router