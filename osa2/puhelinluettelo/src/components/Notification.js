import React from 'react'

const Notification = ({props}) => {
    const person = props[0]
    const messageEnd = props[1]

    if (person === null) {
        return null
    }

    let backgroundColor = '#3da95c'

    if (messageEnd === 'removed') {
        backgroundColor = '#e74d3d'
    } else if (messageEnd === 'updated') {
        backgroundColor = '#3ea3ff'
    }

    const bg = '#888888'

    const notificationStyle = {
        color: 'white',
        background: backgroundColor,
        fontSize: 20,
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        boxShadow: `3px 3px 8px ${bg}`
    }
    
    
    return (
        <div style={notificationStyle}>
            {person['name']} was {messageEnd}
        </div>
    )
}

export default Notification