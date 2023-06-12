const routerUser = require("express").Router();
const { isAdmin } = require("../middlewares/isAdmin");
const { getAllUsers } = require("../controllers/userControler");


// obtener todos los usuarios solo si es leandro
routerUser
.get("/", isAdmin, getAllUsers);



module.exports = routerUser