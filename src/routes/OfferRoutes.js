const { Router } = require("express");
const {Offer} = require("../db")
const offerRoutes = Router();

offerRoutes.post("/", async (req,res) => {
    const noticia = await Offer.create(req.body)
    res.json(noticia)
})

offerRoutes.get("/", async (req,res) => {
    const noticias = await Offer.findAll()
    res.json(noticias)
})

module.exports = offerRoutes