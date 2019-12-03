import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'


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