const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) =>{
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err,user) =>{
            if(err)res.status(403).json("NO_ES_VALIDO_EL_TOKEN")
            req.user = user
            next()
        })
    }else{
        return res.status(401).json("USUARIO_NO_IDENTIFICADO")
    }
}

module.exports = { verifyToken };