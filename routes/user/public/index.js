const app = require("express");
 
const login = require("../../../controller/user/login_user");

const route = app.Router();



route.post("/login",  login);


module.exports = route;
