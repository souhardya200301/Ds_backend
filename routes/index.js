const app = require("express")

const route = app.Router()

route.use("/v1/user", require("./user") )

route.use("/v1/course", require("./course") )

module.exports = route