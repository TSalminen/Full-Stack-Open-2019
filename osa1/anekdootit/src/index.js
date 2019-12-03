import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

let votes = new Array(anecdotes.length).fill(0)

const Button = ({ onClick, text}) => (
  <button onClick={onClick}>
      {text}
  </button>
)

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(false)
  const [mostVotes, setMostVotes] = useState(0)
  const [mostVoted, setMostVoted] = useState(anecdotes[0])

  const handleClicksNextAnecdote = () => {
    setSelected(getRndIndex(anecdotes))
  }

  const getRndIndex = (array) => {
      const max = array.length
      return (
        Math.floor(Math.random() * (max) )
      )
  }

  const handleClicksVotes = () => {
    const votesCopy = { ...votes }
    votesCopy[selected] += 1
    votes = { ...votesCopy }
    if (votes[selected] > mostVotes) {
      setMostVotes(votes[selected])
      setMostVoted(anecdotes[selected])
    }
    setVoted(!voted)
  }

  
  const ShowVotes = ({votes}) => <h3>has {votes[selected]} votes</h3>

  const ShowMostVoted = ({mostVoted}) => {
    return (
      <>
      <h1>
        Anecdote with most votes
      </h1>
      <h3>
        {mostVoted}
      </h3>
      </>
    )
  }

  return (
    <>
    <h1>
      Anecdote of the day
    </h1>
    <h3>
      {anecdotes[selected]}
    </h3>
    <ShowVotes votes={votes} />
    <Button 
            onClick={() => handleClicksVotes()}
            text='vote'
        />
    <Button 
            onClick={() => handleClicksNextAnecdote()}
            text='next anecdote'
        />
      <ShowMostVoted mostVoted={mostVoted}/>
    
    </>
  )
}



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)