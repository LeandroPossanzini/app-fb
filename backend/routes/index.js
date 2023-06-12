const router = require('express').Router()
const routerUser = require('./user')


router
.get('/users',routerUser )




module.exports = router