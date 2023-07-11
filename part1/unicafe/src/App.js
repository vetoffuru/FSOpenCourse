import { useState } from 'react'

const Statistics = ({ good, neutral, bad}) => {
  const total = good+bad+neutral
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  const average = (good-bad)/total
  const percentile = good*100/total

  return (
    <div>
      <table>
        <StatisticsLine text = {"Good"} value={good}/>
        <StatisticsLine text = {"Neutral"} value={neutral}/>
        <StatisticsLine text = {"Bad"} value={bad}/>
        <StatisticsLine text = {"Total"} value={total}/>
        <StatisticsLine text = {"Average"} value={average}/>
        <StatisticsLinePercentile text = {"Positive"} value={percentile}/>
      </table>
    </div>
  ) 
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({ text, value }) => {
  return(
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const StatisticsLinePercentile = ({ text, value }) => {
  return(
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    </tbody>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeturalClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={handleGoodClick} text={'Good'}/>
      <Button handleClick={handleNeturalClick} text={'Netural'}/>
      <Button handleClick={handleBadClick} text={'Bad'}/>

      <h1>Statistics</h1>

      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App
