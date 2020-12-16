import React, { useState, useCallback } from 'react'
import axios from 'axios'

const AsyncComponentWithOneRequest = () => {
    const [name, setName] = useState('Nikola')

    const getNewName = useCallback(async () => {
        const { data: { newName } } = await axios.get('/getFirstName')
        setName(newName)
    }, [])

    return (
        <div>
            <button
                id="getNewName"
                onClick={getNewName}
            >
                {'Get New Name'}
            </button>
            <h1>{name}</h1>
        </div>
    )
}

const AsyncComponentWithTwoRequests = () => {
    const [person, setPerson] = useState({ firstName: 'Nikola', secondName: 'Tesla' })

    const getNewPerson = useCallback(async () => {
        const { data: { firstName } } = await axios.get('/getFirstName')
        const { data: { secondName } } = await axios.get('/getSecondName')
        setPerson({ firstName, secondName })
    }, [])

    return (
        <div>
            <button
                id="getNewPerson"
                onClick={getNewPerson}
            >
                {'Get New Person'}
            </button>
            <h1>{`${person.firstName} ${person.secondName}`}</h1>
        </div>
    )
}

export {
    AsyncComponentWithOneRequest,
    AsyncComponentWithTwoRequests
}
