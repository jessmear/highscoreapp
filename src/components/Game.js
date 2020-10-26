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
    const tempList = playerList
    const tempInfo = {
      ...userInfo,
      clicks: count,
      score: currentScore
    }

    const currentUserIndex = tempList.findIndex(player => player.id == 10)
    if(currentUserIndex<0) {
      tempList.push(tempInfo)
    } else {
      tempList[currentUserIndex] = tempInfo
    }

    setPlayerList(tempList)
    setUserInfo(tempInfo)
    setPoints(currentPoints)
    if(count>=maxRounds) { toggleButtonDisabled(true) }
  }

  const pointsList = points.map( (point, i) => {
    return (<li key={`${i}-${point}`}>{point}</li>)
  })

  const handleReset = () => {
    setUserInfo({...userInfo, clicks: 0, score: 0})
    const tempList = playerList
    const currentUserIndex = tempList.findIndex(player => player.id == 10)
    tempList[currentUserIndex] = {...userInfo, clicks: 0, score: 0}
    setPlayerList(tempList)
    setPoints([])
    toggleButtonDisabled(false)
  }

  const handleSubmit = () => {
    let tempList = playerList
    const currentUserIndex = playerList.findIndex(player => player.id == 10)
    tempList.splice(currentUserIndex, 1)

    if(userInfo.score > highScore.score) {
      const highScoreIndex = playerList.findIndex(player => player.id == 11)

      if(highScoreIndex>=0) {
        tempList[highScoreIndex] = {...userInfo, id: 11}
      } else {
        tempList.push({...userInfo, id: 11})
      }
      setHighScore({...userInfo, id: 11})
    }

    setPlayerList(tempList)

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

    console.log(`Results:`)
    console.log(`Name: ${userInfo.name}`)
    console.log(`Click Count: ${userInfo.clicks}`)
    console.log(`User Score: ${userInfo.score}`)

    handleReset()
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