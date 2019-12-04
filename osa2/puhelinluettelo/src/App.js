import React, { useState } from 'react'
// import { notStrictEqual } from 'assert'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
      event.preventDefault()
      const nameObject = {
          name: newName
      }

      setPersons(persons.concat(nameObject))
      setNewName('')
  }

  const handleNameChange = (event) => {
      //console.log(event.target.value)
      setNewName(event.target.value)
  }

  const rows = () => persons.map(person =>
    <Name 
        key={person.name}
        person={person}
    />
  )

  const Name = ({person}) => {
      return (
          <li>{person['name']}</li>
      )

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName} 
            onChange={handleNameChange}
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