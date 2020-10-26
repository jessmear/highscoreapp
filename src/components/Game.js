import React, { useState } from 'react'
import Button from './Button.js'
import { getRandom } from '../utils.js'

const Game = props => {
  const maxRounds = 10
  const [points, setPoints] = useState([])
  const [buttonDisabled, toggleButtonDisabled] = useState(false)
  const { userInfo, setUserInfo, playerData, setPlayerData } = props

  const handlePlayButton = () => {
    const currentPoints = [...points, getRandom(100,-100)]
    setPoints(currentPoints)
    const count = userInfo.clicks+1
    setUserInfo({...userInfo, clicks: count, score: currentPoints.reduce((total, num) => { return total + num })})
    if(count>=maxRounds) { toggleButtonDisabled(true) }
  }

  const pointsList = points.map( (point, i) => {
    return (<li key={`${i}-${point}`}>{point}</li>)
  })

  const handleReset = () => {
    setUserInfo({...userInfo, clicks: 0, score: 0})
    setPoints([])
    toggleButtonDisabled(false)
  }

  const handleSubmit = () => {
    console.log("SUBMITTING:")
    console.log(playerData)
    setPlayerData(playerData)
    handleReset()
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: userInfo.name,
        score: userInfo.score,
        clicks: userInfo.clicks
      })
    }
    fetch('https://reqres.in/api/users', data)
     .then(response => response.json())

    console.log(`Name: ${userInfo.name}`)
    console.log(`Click Count: ${userInfo.clicks}`)
    console.log(`User Score: ${userInfo.score}`)
    console.log(`Points: ${points}`)
  }

  return (
    <>
      <div className='game'>
        <h2>Welcome {userInfo.name}!</h2>
        <p>Score: </p><span className='info'>{userInfo.score}</span>
        <p>Clicks Remaining: </p>
        <span className='info'>
          {maxRounds-userInfo.clicks} out of {maxRounds}
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