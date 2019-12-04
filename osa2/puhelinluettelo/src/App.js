import React, { useState } from 'react'
// import { notStrictEqual } from 'assert'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ showAll, setShowAll ] = useState(true)

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

  const handleFilterChange = (event) => {
      //console.log(event.target.value)
      setNewFilter(event.target.value)
  }

  const personsToShow = persons.filter(person => person['name'].toLowerCase().includes(newFilter.toLowerCase()))

  const rows = () => personsToShow.map(person =>
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
      <div>
        filter shown with <input 
          value={newFilter} 
          onChange={handleFilterChange}
        />
      </div>
      <h2>add a new</h2>
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