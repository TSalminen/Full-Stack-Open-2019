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
            <ul>
                {rows()}
            </ul>
        </div>
    )
}

const Part = ({part}) => {
    // console.log(props)
    return (
        <>
            <p>
                {part['name']} {part['exercises']}
            </p>
        </>
    )
}

// const Total = (props) => {
//     // console.log(props)
//     let exercises = 0
//     props.course['parts'].forEach(part => {
//         exercises += part.exercises
//     })
//     return (
//         <>
//             <p>Number of excercises {exercises}</p>
//         </>
//     )
// }

const Course = ({course}) => {
    return (
        <>
        <Header course={course} />
        <Content parts={course['parts']} />
        {/* <Total course={course} /> */}
        </>
    )
}

const App = () => {
  const course = {
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
  }
   
  

  return (
    <div>
        <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))