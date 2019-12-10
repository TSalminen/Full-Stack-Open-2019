import React from 'react'
import personService from './../services/persons'

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons, setNotificationPersonAndType}) => {

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }
    
        const found = persons.find(element => element['name'] === newName)
        if (found === undefined) {
            personService
            .create(personObject)
            .then(returnedPerson => {
                // console.log(response)
                setPersons(persons.concat(returnedPerson))
                setNotificationPersonAndType([returnedPerson, 'added'])
                setTimeout(() => {
                    setNotificationPersonAndType([null, null])
                }, 3000)
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