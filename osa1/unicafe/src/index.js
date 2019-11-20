import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodToValue = (value) => setGood(value)
  const setNeutralToValue = (value) => setNeutral(value)
  const setBadToValue = (value) => setBad(value)

  const Button = ({ onClick, text}) => (
      <button onClick={onClick}>
          {text}
      </button>
  )

  const Display = ({ category, value }) => <div>{category} {value}</div>

    return (
        <>
        <h1>give feedback</h1>
        <div>
            <Button 
                onClick={() => setGoodToValue(good + 1)}
                text='good'
            />
            <Button 
                onClick={() => setNeutralToValue(neutral + 1)}
                text='neutral'
            />
            <Button 
                onClick={() => setBadToValue(bad + 1)}
                text='bad'
            />
        </div>
        <h1>statistics</h1>
        <Display category='good' value={good} />
        <Display category='neutral' value={neutral} />
        <Display category='bad' value={bad} />
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)