const app = require("express");
const create_user = require("../../../controller/user/create_user");

const route = app.Router();

route.post("/create-user", create_user);

module.exports = route;
