const app = require("express")

const route = app.Router()

route.use("/user/public", require("./public") )
route.use("/user/private", require("./private") )

module.exports = route