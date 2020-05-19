import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Creatures extends Component {

    state = {
        newCreature: {
            name: '',
            description: '',
        },
        allCreatures: []

    }
    componentDidMount() {
        this.getAllCreatures()
    }


    getAllCreatures = async () => {
        try {
            const res = await axios.get('/api/creature')
            const newState = { ...this.state }
            newState.allCreatures = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get data')
            console.log(error)
        }
    }
    updateCreature = async () => {
        try{
            const creatureId = this.props.match.params.creatureId
            const res = await axios.put(`/api/creature/${creatureId}`)
        }
        catch (error) {
            console.log('Failed to get data')
            console.log(error)
        }
    }
    onChangeCreature = (evt) => {
        const newState = { ...this.state }
        newState.newCreature[evt.target.name] = evt.target.value
        this.setState(newState)
    }
    

    onDeleteCreature = async (creatureId) => {
        await axios.delete(`/api/creature/${creatureId}`)
        this.getAllCreatures()
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('/api/creature', this.state.newCreature)
            this.getAllCreatures()
        } catch (error) {
            console.log('Failed to create data')
            console.log(error)
        }

    }



    render() {
        return (
            <div>
                <h1>Bog App</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.newCreature.name}
                        onChange={this.onChangeCreature} />

                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        value={this.state.newCreature.description}
                        onChange={this.onChangeCreature} />
                    <input type="submit" value="New Creature" />

                </form>

                {this.state.allCreatures.map((creature) => {
                    return (
                        <div>
                            <Link to={`/creature/${creature._id}`}>
                                {creature.name}
                            </Link>
                            <div>{creature.description}</div>
                            <button onClick={() =>
                                this.onDeleteCreature(creature._id)}>
                                Delete</button>
                            
                            <button></button>


                        </div>
                    )
                })}
            </div>
        )
    }
}
