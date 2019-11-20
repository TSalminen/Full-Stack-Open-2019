import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <>
            <h1>{props.course['name']}</h1>
        </>
    )
}

const Content = (props) => {
    // console.log(props)
    return (
        <>
            <Part part={props.course['parts'][0]} />
            <Part part={props.course['parts'][1]} />
            <Part part={props.course['parts'][2]} />
        </>
    )
}

const Part = (props) => {
    // console.log(props)
    return (
        <>
            <p>
                {props.part['name']} {props.part['exercises']}
            </p>
        </>
    )
}

const Total = (props) => {
    // console.log(props)
    let exercises = 0
    props.course['parts'].forEach(part => {
        exercises += part.exercises
    })
    return (
        <>
            <p>Number of excercises {exercises}</p>
        </>
    )
}

const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }    
      ]
  }
   
  

  return (
    <div>
        <Header course={course} />
        {/* <Content parts={parts} /> */}
        <Content course={course} />
        {/* <Total parts={course['parts']} /> */}
        <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))