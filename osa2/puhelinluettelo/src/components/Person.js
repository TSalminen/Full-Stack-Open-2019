import React from 'react'
import personService from './../services/persons'
//import Notification from './Notification'




const Person = ({person, persons, setPersons, setNotificationPersonAndType}) => {
    const id = person['id']
    //const name = person['name']

    const confirmDeletePerson = () => {
        if (window.confirm(`Delete ${person['name']}`)) { 
            try {
                personService
                    .deletePerson({person})
                // console.log('deleted')
                setPersons(persons.filter(p => p.id !== id))
                setNotificationPersonAndType([person, 'removed'])
                setTimeout(() => {
                    setNotificationPersonAndType([null, null])
                }, 3000)

            } catch (e) {
                console.log(`Request failed ${e}`)
            }
            
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