import React from 'react'
import axios from 'axios'

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
    const baseUrl = 'http://localhost:3001/persons'

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }
    
        const found = persons.find(element => element['name'] === newName)
        if (found === undefined) {
          axios
            .post(baseUrl, personObject)
            .then(response => {
                console.log(response)
                setPersons(persons.concat(response.data))
            })

        } else {
          window.alert(`${newName} is already added to phonebook`)
        }
        setNewName('')
        setNewNumber('')
    }
    
    const handleNameChange = (event) => {
        //console.log(event.target.value)
        setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
        //console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input 
                value={newName} 
                onChange={handleNameChange}
                />
            </div>
            <div>
                number: <input 
                value={newNumber} 
                onChange={handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}


export default PersonForm