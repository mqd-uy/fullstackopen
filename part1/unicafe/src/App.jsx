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

const Statistics = ({ good, neutral, bad }) => (
  <div>
    <h1>Statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
  </div>
)

export default App