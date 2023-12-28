import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodButtonHandler = () => setGood(good + 1)
  const neutralButtonHandler = () => setNeutral(neutral + 1)
  const badButtonHandler = () => setBad(bad + 1)


  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClicked={goodButtonHandler} text="good" />
      <Button onClicked={neutralButtonHandler} text="neutral" />
      <Button onClicked={badButtonHandler} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = ({ onClicked, text }) => (
  <button onClick={onClicked}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : good / all * 100

  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}


export default App