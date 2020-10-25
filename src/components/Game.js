import React, { useState } from 'react'
import Button from './Button.js'
import { getRandom } from '../utils.js'

const Game = props => {
  const maxRounds = 10
  const [points, setPoints] = useState([])
  const [buttonDisabled, toggleButtonDisabled] = useState(false)
  const { name, userScore, setUserScore, clickCount, setClickCount, topTen, setTopTen } = props

  const handlePlayButton = () => {
    const currentPoints = [...points, getRandom(100,-100)]
    setUserScore(currentPoints.reduce((total, num) => { return total + num })
    )
    setPoints(currentPoints)
    const count = clickCount+1
    setClickCount(count)
    if(count>=maxRounds) { toggleButtonDisabled(true) }
  }

  const pointsList = points.map( (point, i) => {
    return (<li key={`${i}-${point}`}>{point}</li>)
  })

  const handleReset = () => {
    setUserScore(0)
    setPoints([])
    setClickCount(0)
    toggleButtonDisabled(false)
  }

  const handleSubmit = () => {
    console.log("SUBMITTING:")
    console.log(topTen)
    setTopTen(topTen)
    handleReset()
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        score: userScore,
        clicks: clickCount
      })
    }
    fetch('https://reqres.in/api/users', data)
     .then(response => response.json())

    console.log(`Name: ${name}`)
    console.log(`Click Count: ${clickCount}`)
    console.log(`User Score: ${userScore}`)
    console.log(`Points: ${points}`)
  }

  return (
    <>
      <div className='game'>
        <h2>Welcome {name}!</h2>
        <p>Score: </p><span className={`info user-score-${userScore}`}>{userScore}</span>
        <p>Clicks Remaining: </p>
        <span className='info'>
          {maxRounds-clickCount} out of {maxRounds}
        </span>
        <Button classes={`play${buttonDisabled ? ' disabled' : ''}`} onclick={handlePlayButton} disabled={buttonDisabled}>
          {`${buttonDisabled ? 'Round Over' : 'Try Your Luck'}`}
        </Button>
        <Button classes='reset' onclick={handleReset}>
          Start Over
        </Button>
        <Button classes='submit' onclick={handleSubmit}>Send it!</Button>
      </div>
      <div className='current-round'>
        <p>Points This Round</p>
        <ul>{pointsList}</ul>
      </div>
    </>
  )
}

export default Game