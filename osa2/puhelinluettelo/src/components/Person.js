import React from 'react'
import personService from './../services/persons'



const Person = ({person, persons, setPersons}) => {
    const id = person['id']

    const confirmDeletePerson = () => {
        if (window.confirm(`Delete ${person['name']}`)) { 
            personService
                .deletePerson({person})
            // console.log('deleted')
            setPersons(persons.filter(p => p.id !== id))
        } else {
            console.log('not deleted')
        }
    }

    return (
        <li>
            {person['name']}
            &nbsp;
            {person['number']} 
            &nbsp;
            <button onClick={() => confirmDeletePerson()}>delete</button>
        </li>
    )
    
}

export default Person