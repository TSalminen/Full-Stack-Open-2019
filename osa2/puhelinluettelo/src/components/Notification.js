import React from 'react'

const Notification = ({props}) => {
    const person = props[0]
    const messageEnd = props[1]

    if (person === null) {
        return null
    }

    let messageColor = 'green'

    if (messageEnd === 'removed') {
        messageColor = 'red'
    } else if (messageEnd === 'updated') {
        messageColor = 'blue'
    }

    const notificationStyle = {
        color: messageColor,
        background: '#e6e6e6',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    
    
    return (
        <div style={notificationStyle}>
            {person['name']} was {messageEnd}
        </div>
    )
}

export default Notification