const app = require("express")

const route = app.Router()

route.use("/v1", require("./user") )


module.exports = route