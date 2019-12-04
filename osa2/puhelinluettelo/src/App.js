import React, { useState } from 'react'
// import { notStrictEqual } from 'assert'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-4567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addPerson = (event) => {
      event.preventDefault()
      const personObject = {
          name: newName,
          number: newNumber
      }

      const found = persons.find(element => element['name'] === newName)
      if (found === undefined) {
        setPersons(persons.concat(personObject))
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

  const rows = () => persons.map(person =>
    <Person 
        key={person.name}
        person={person}
    />
  )

  const Person = ({person}) => {
    return (
      <>
        <li>{person['name']} {person['number']}</li>
      </>
    )
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <ul>
          {rows()}
      </ul>
    </div>
  )

}

export default App