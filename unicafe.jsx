import { useState } from "react"

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
      {props.text} 
      </td>
      <td>
      {props.text === 'positive' ? `${props.value}%` : `${props.value}`}
      </td>
    </tr>
  )
}


const Statistics = (props) => {
    return ( 
      <p>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </p>
   )
  
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  
  const handleClickGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedTotal = updatedGood + neutral + bad
    setTotal(updatedTotal)
    setAverage( (updatedGood - bad) / updatedTotal )
    setPositive( (updatedGood / updatedTotal) * 100 )
  }
  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const updatedTotal = good + updatedNeutral + bad
    setTotal(updatedTotal)
    setAverage( (good - bad) / updatedTotal)
    setPositive( (good / updatedTotal) * 100 )
  }
  const handleClickBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedTotal = good + neutral + updatedBad
    setTotal(updatedTotal)
    setAverage( (good - updatedBad) / updatedTotal )
    setPositive( (good / updatedTotal) * 100 )
  }

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
      
      <h2>
        statistics
      </h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : ( 
      <table>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </table>
      )
      }
     
    </div>
  )

}

export default App
