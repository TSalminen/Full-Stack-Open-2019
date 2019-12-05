import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
// import { notStrictEqual } from 'assert'

const App = () => {
  const [persons, setPersons] = useState([])
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456' },
  //   { name: 'Ada Lovelace', number: '39-44-5323523' },
  //   { name: 'Dan Abramov', number: '12-43-234345' },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122' }
  // ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    // console.log('effect')
    personService
      .getAll()
      .then(intitialPersons => {
        // console.log('promise fulfilled')
        setPersons(intitialPersons)
      })
  }, [])

  const handleFilterChange = (event) => {
      setNewFilter(event.target.value)
  }

  const personsToShow = persons.filter(person => person['name'].toLowerCase().includes(newFilter.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input 
          value={newFilter} 
          onChange={handleFilterChange}
        />
      </div>
      <h2>add a new</h2>
      <PersonForm 
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <ul>
          {<Persons 
            persons={persons}
            personsToShow={personsToShow} 
            setPersons={setPersons} 
          />}
      </ul>
    </div>
  )

}

export default App