import React, { useState, useEffect } from 'react'
import Button        from './Button.js'
import { getRandom } from '../utils.js'

const Game = props => {
  const { userInfo, setUserInfo, playerList, setPlayerList } = props
  const maxRounds = 10

  const [points, setPoints] = useState([])
  const [highScore, setHighScore] = useState({name: userInfo.name, id: 11, score: 0, clicks: 0})
  const [buttonDisabled, toggleButtonDisabled] = useState(false)

  const handlePlayButton = () => {
    const currentPoints = [...points, getRandom(100,-1)]
    const count = userInfo.clicks+1
    const currentScore = currentPoints.reduce((total, num) => { return total + num })

    if(count>=maxRounds) { toggleButtonDisabled(true) }
    setPoints(currentPoints)
    updatePlayerList(playerList, {
      ...userInfo,
      clicks: count,
      score: currentScore}
    )
  }

  const handleReset = () => {
    updatePlayerList(playerList, {
      ...userInfo,
      clicks: 0,
      score: 0}
    )
    setPoints([])
    toggleButtonDisabled(false)
  }

  const handleSubmit = () => {
    updateHighScore(userInfo, playerList, highScore)
    updatePlayerList(playerList, {...userInfo}, true)

    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: userInfo.id,
        name: userInfo.name,
        score: userInfo.score,
        clicks: userInfo.clicks
      })
    }

    fetch('https://reqres.in/api/users', data)
      .then(result => result.json())
      .then(
        (jsonResult) => {
          console.log(jsonResult)
        },
        (error) => {
          console.log(error)
        }
      )

    handleReset()
  }

  const updateHighScore = (details, list, currentHighScore) => {
    if(details.score > currentHighScore.score) {
      const highScoreIndex = list.findIndex(player => player.id == 11)

      if(highScoreIndex>=0) {
        list[highScoreIndex] = {...details, id: 11}
      } else {
        list.push({...details, id: 11})
      }
      setHighScore({...details, id: 11})
    }
    setPlayerList(list)
  }

  const updatePlayerList = (list, details, removeUser=false) => {
    const currentUserIndex = list.findIndex(player => player.id == details.id)

    if(removeUser) {
      list.splice(currentUserIndex, 1)
    } else {
      if(currentUserIndex<0) {
        list.push(details)
      } else {
        list[currentUserIndex] = details
      }
    }
    setPlayerList(list)
    setUserInfo(details)
  }

  const pointsList = points.map( (point, i) => {
    return (<li key={`${i}-${point}`}>{point}</li>)
  })

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