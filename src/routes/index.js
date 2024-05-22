const {Router} = require("express")
const newRoutes = require("./NewRoutes")
const companyRoutes = require("./CompanyRoutes")
const indexRoutes = Router()

indexRoutes.use("/company", companyRoutes)
indexRoutes.use("/new", newRoutes)

module.exports = indexRoutes