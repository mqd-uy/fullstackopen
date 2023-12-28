import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const nextAnecdoteButtonHandle = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const voteButtonHandle = () => {
    const arrray = [...votes]
    arrray[selected]++
    setVotes(arrray)
    updateMostVoted(arrray)
  }

  const updateMostVoted = (array) => {
    let max = 0
    let indexMostVoted = 0;

    array.forEach((value, index) => {
      if (value > max) {
        max = value
        indexMostVoted = index
        console.log('indexMostVoted', indexMostVoted)
      }

    })
    setMostVoted(indexMostVoted);
  }

  console.log('rendering')

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button onClicked={voteButtonHandle} text="vote" />
      <Button onClicked={nextAnecdoteButtonHandle} text="next anecdote" />

      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[mostVoted]} votes={votes[mostVoted]} />
    </div>
  )
}

const Button = ({ onClicked, text }) => (
  <button onClick={onClicked}>{text}</button>
)

const Anecdote = ({ anecdote, votes }) => (
  <div>
    <p>{anecdote}</p>
    <p>Has {votes} votes</p>
  </div>
)

export default App