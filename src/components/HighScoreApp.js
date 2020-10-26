import React, { useState, useEffect } from 'react'
import StarWarsTitle from './StarWarsTitle.js'
import Instructions  from './Instructions.js'
import Game          from './Game.js'
import Leaderboard   from './Leaderboard.js'
import { getRandom } from '../utils.js'
import '../styles/app.scss'

const HighScoreApp = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [playerList, setPlayerList] = useState([])
  const [userInfo, setUserInfo] = useState({
    id: 10,
    name: 'Rey Skywalker',
    score: 0,
    clicks: 0
  })

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(result => result.json())
      .then(
        (jsonResult) => {
          setLoading(false)
          cleanUpList(jsonResult.results)
        },
        (error) => {
          setLoading(false)
          setError(error)
        }
      )
  }, [])

  const cleanUpList = list => {
    const cleanList = list.map( (person, i) => {
      return {
        id: i,
        name: person.name,
        score: person.height,
        clicks: getRandom(10,2)
      }
    })
    cleanList.push({
      id: userInfo.id,
      name: userInfo.name,
      score: userInfo.score,
      clicks: userInfo.clicks
    })
    setPlayerList(cleanList)
  }

  const handleInput = (event) => {
    setUserInfo({...userInfo, name: event.target.value})
  }

  return (
    <div id='star-wars'>
      <StarWarsTitle />
      { error &&
        <h1 className='error'><span>Error: </span>[{error.message} {error.status}] Try reloading the page.</h1>
      }
      <div className='flex-container wrap'>
        <div className='flex-fullrow-item'>
          <Instructions
            userInfo={userInfo}
            handleInput={handleInput}
          />
        </div>
        <div className='flex-item game-container'>
          <Game
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            playerList={playerList}
            setPlayerList={setPlayerList}
          />
        </div>
        <Leaderboard
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          playerList={playerList}
          setPlayerList={setPlayerList}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default HighScoreApp