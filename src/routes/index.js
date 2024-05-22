const {Router} = require("express")
const newRoutes = require("./NewRoutes")
const companyRoutes = require("./CompanyRoutes")
const offerRoutes = require("./OfferRoutes")
const indexRoutes = Router()

indexRoutes.use("/company", companyRoutes)
indexRoutes.use("/new", newRoutes)
indexRoutes.use("/offer", offerRoutes)

module.exports = indexRoutes