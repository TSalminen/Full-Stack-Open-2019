import React from 'react'
import ReactDOM from 'react-dom'

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

const Course = ({course}) => {
    return (
        <>
        <Header course={course} />
        <Content parts={course['parts']} />
        <Total parts={course['parts']} />
        </>
    )
}

const Courses = ({courses}) => {
    // lisätään kursseille uniikit id-numerot
    let i = 1
    courses.forEach(course => {
        course['id'] = i
        i++
    })

    const rows = () => courses.map(course => 
        <Course 
            key={course.id}
            course={course} 
        />
    )
    return (
        <>
            {rows()}
        </>
    )
}

const App = () => {
  const courses = [
    {
        name: 'Half Stack application development',
        parts: [
          {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
          },
          {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
          },
          {
              name: 'State of a component',
              exercises: 14,
              id: 3
          }  
        ]
    },
    {
        name: 'Another course',
        parts: [
          {
              name: 'name of part1',
              exercises: 6,
              id: 1
          },
          {
              name: 'name of part2',
              exercises: 8,
              id: 2
          },
          {
              name: 'name of part3',
              exercises: 7,
              id: 3
          }  
        ]
    }
  ]
  
   
  

  return (
    <div>
        <Courses courses={courses} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))