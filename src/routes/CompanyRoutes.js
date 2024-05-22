const { Router } = require("express");
const {Company} = require("../db")
const companyRoutes = Router();

companyRoutes.get("/", async (req,res) => {
    const companys = await Company.findAll()
    res.json(companys)
})

module.exports = companyRoutes