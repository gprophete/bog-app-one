const mongoose = require('./connection.js')


const CreatureSchema = new mongoose.Schema({
    name: String,
    description: String,
})

const CreatureModel = mongoose.model('creature', CreatureSchema)

function getAllCreature() {
    return CreatureModel.find({})
}

function getSingleCreature(creatureId) {
    return CreatureModel.find(creatureId)
}

function createCreature(creatureData){
    return CreatureModel.create(creatureData)
}

function updateCreature(creatureId, creatureData){
    return CreatureModel.findByIdAndUpdate(creatureId, creatureData)
}

function deleteCreature(creatureId){
    return CreatureModel.findByIdAndDelete(creatureId)
}

module.exports = {
    getAllCreature,
    getSingleCreature,
    createCreature,
    updateCreature,
    deleteCreature
}