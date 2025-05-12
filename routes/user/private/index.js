
const app = require("express")
const create_user = require("../../../controller/user/create_user");
const auth_middleware = require("../../../middleware/init.middle");
const route = app.Router()

route.post("/register-user",  create_user);
route.post("/create-user", auth_middleware,  create_user);
 
 

module.exports = route