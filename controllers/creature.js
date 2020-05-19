const express= require ('express')

const creatureModel= require('../models/creature.js')

const creatureRouter = express.Router()


creatureRouter.get("/", async (req, res)=> {
    try{
        const allCreature = await creatureModel.getAllCreature()
        res.json(allCreature)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})




//Get one creature
creatureRouter.get("/:creatureId", async (req, res) => {
    try{
        const creature = await creatureModel.getCreatureById(req.params.id)
        res.json(creature)
    }catch(error) {
        res.json(error)
        console.log(error)
    }
})
//Create
creatureRouter.post("/", async (req, res) =>{
    try{
        await creatureModel.createCreature(req.body)
        res.json("creature created")
    }catch(error) {
        res.json(error)
        console.log(error)
    }
})

//Update
creatureRouter.put("/:creatureId", async (req, res) => {
    try{
        await creatureModel.update(req.params.creatureId, req.body)
        res.json("Creature updated")
    }catch(error) {
        res.json(error)
        console.log(error)
    }
})

//Delete
creatureRouter.delete ("/:creatureId", async (req, res) => {
    try{
        await creatureModel.deleteCreature(req.params.creatureId)
    }catch(error) {
        res.json(error)
        console.log(error)
    }
})

module.exports= creatureRouter