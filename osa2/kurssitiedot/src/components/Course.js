import React from 'react'

const Header = ({course}) => <h1>{course['name']}</h1>

const Content = ({parts}) => {
    // console.log(parts)
    const rows = () => parts.map(part => 
        <Part 
            key={part.id}
            part={part} 
        />
    )
    return (
        <div>
            {rows()}
        </div>

    )
}

const Part = ({part}) => <p>{part['name']} {part['exercises']}</p>

const Total = ({parts}) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const exerciseList = parts.map(part => part['exercises'])
    // console.log(exerciseList)
    const numberOfExercises = exerciseList.reduce(reducer)
    // console.log(numberOfExercises)
    
    return (
        <p><b>total of {numberOfExercises} exercises</b></p>
    )
}

const Course = ({ course }) => {
  return (
    <>
    <Header course={course} />
    <Content parts={course['parts']} />
    <Total parts={course['parts']} />
    </>  
  )
}

export default Course