import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClicks = () => {
    setAll(all + 1)
    setGood(good + 1)
  }
  const handleNeutralClicks = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }
  const handleBadClicks = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }
  
  const calculateAverage = () => {
      if (all === 0) {
          return 0
      }
      return (good - bad) / all
  }

  const calculatePositive = () => {
      if (all === 0) {
        return 0
      }
      return good / all * 100
  }

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
                // onClick={() => setGoodToValue(good + 1)}
                onClick={() => handleGoodClicks()}
                text='good'
            />
            <Button 
                // onClick={() => setNeutralToValue(neutral + 1)}
                onClick={() => handleNeutralClicks()}
                text='neutral'
            />
            <Button 
                // onClick={() => setBadToValue(bad + 1)}
                onClick={() => handleBadClicks()}
                text='bad'
            />
        </div>
        <h1>statistics</h1>
        <Display category='good' value={good} />
        <Display category='neutral' value={neutral} />
        <Display category='bad' value={bad} />
        <Display category='all' value={all} />
        <Display category='average' value={calculateAverage()} />
        <Display category='positive' value={calculatePositive() + ' %'} />

    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)