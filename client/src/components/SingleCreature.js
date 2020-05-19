import React, { Component } from 'react'
import axios from 'axios'

export default class SingleCreature extends Component {

    state = {

            name: '',
            description: '',

    }

    componentDidMount() {
        this.getCreatureById()
    }

    getCreatureById = async () => {
        const creatureId = this.props.match.params.creatureId
        console.log('creatureId', creatureId)
        const res = await axios.get(`/api/creature/${creatureId}`)
        this.setState(res.data)
    }

    render() {

        return (
            <div>
                <h1>Single Creature</h1>
                <div>Name: {this.state.name}</div>
        <div>Description:{this.state.description}</div>
               
            </div>
        )
    }
}