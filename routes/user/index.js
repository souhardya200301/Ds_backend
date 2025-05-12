const app = require("express")
 

const route = app.Router()

route.use("/public", require("./public") )


 
route.use("/private", require("./private") )

module.exports = route