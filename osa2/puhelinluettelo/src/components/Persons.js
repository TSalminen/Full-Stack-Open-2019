import React from 'react'
import Person from './Person'

const Persons = ({persons, personsToShow, setPersons, setNotificationPersonAndType}) => personsToShow.map(person =>
    <Person 
        key={person.name}
        person={person}
        persons={persons}
        setPersons={setPersons}
        setNotificationPersonAndType={setNotificationPersonAndType}
    />
)

export default Persons