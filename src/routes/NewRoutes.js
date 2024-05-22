const { Router } = require("express");
const {New} = require("../db")
const newRoutes = Router();

newRoutes.post("/", async (req,res) => {
    const noticia = await New.create(req.body)
    res.json(noticia)
})

newRoutes.get("/", async (req,res) => {
    const noticias = await New.findAll()
    res.json(noticias)
})

module.exports = newRoutes