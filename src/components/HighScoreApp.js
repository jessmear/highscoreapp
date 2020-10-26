
/*jshint -W033 */

import React, { useState, useEffect } from 'react'
import StarWarsTitle from './StarWarsTitle.js'
import Instructions  from './Instructions.js'
import Game          from './Game.js'
import Leaderboard   from './Leaderboard.js'
import '../styles/app.scss'
import { getRandom } from '../utils.js'

const HighScoreApp = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [playerList, setPlayerList] = useState([])
  const [userInfo, setUserInfo] = useState({ id: 10, name: 'Rey Skywalker', score: 0, clicks: 0 })

  useEffect(() => {
    setLoading(true)
    const results = {"results":[{"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","homeworld":"http://swapi.dev/api/planets/1/","films":["http://swapi.dev/api/films/1/","http://swapi.dev/api/films/2/","http://swapi.dev/api/films/3/","http://swapi.dev/api/films/6/"],"species":[],"vehicles":["http://swapi.dev/api/vehicles/14/","http://swapi.dev/api/vehicles/30/"],"starships":["http://swapi.dev/api/starships/12/","http://swapi.dev/api/starships/22/"],"created":"2014-12-09T13:50:51.644000Z","edited":"2014-12-20T21:17:56.891000Z","url":"http://swapi.dev/api/people/1/"},{"name":"C-3PO","height":"167","mass":"75","hair_color":"n/a","skin_color":"gold","eye_color":"yellow","birth_year":"112BBY","gender":"n/a","homeworld":"http://swapi.dev/api/planets/1/","films":["http://swapi.dev/api/films/1/","http://swapi.dev/api/films/2/","http://swapi.dev/api/films/3/","http://swapi.dev/api/films/4/","http://swapi.dev/api/films/5/","http://swapi.dev/api/films/6/"],"species":["http://swapi.dev/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:10:51.357000Z","edited":"2014-12-20T21:17:50.309000Z","url":"http://swapi.dev/api/people/2/"},{"name":"R2-D2","height":"96","mass":"32","hair_color":"n/a","skin_color":"white, blue","eye_color":"red","birth_year":"33BBY","gender":"n/a","homeworld":"http://swapi.dev/api/planets/8/","films":["http://swapi.dev/api/films/1/","http://swapi.dev/api/films/2/","http://swapi.dev/api/films/3/","http://swapi.dev/api/films/4/","http://swapi.dev/api/films/5/","http://swapi.dev/api/films/6/"],"species":["http://swapi.dev/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:11:50.376000Z","edited":"2014-12-20T21:17:50.311000Z","url":"http://swapi.dev/api/people/3/"},{"name":"Darth Vader","height":"202","mass":"136","hair_color":"none","skin_color":"white","eye_color":"yellow","birth_year":"41.9BBY","gender":"male","homeworld":"http://swapi.dev/api/planets/1/","films":["http://swapi.dev/api/films/1/","http://swapi.dev/api/films/2/","http://swapi.dev/api/films/3/","http://swapi.dev/api/films/6/"],"species":[],"vehicles":[],"starships":["http://swapi.dev/api/starships/13/"],"created":"2014-12-10T15:18:20.704000Z","edited":"2014-12-20T21:17:50.313000Z","url":"http://swapi.dev/api/people/4/"},{"name":"Leia Organa","height":"150","mass":"49","hair_color":"brown","skin_color":"light","eye_color":"brown","birth_year":"19BBY","gender":"female","homeworld":"http://swapi.dev/api/planets/2/","films":["http://swapi.dev/api/films/1/","http://swapi.dev/api/films/2/","http://swapi.dev/api/films/3/","http://swapi.dev/api/films/6/"],"species":[],"vehicles":["http://swapi.dev/api/vehicles/30/"],"starships":[],"created":"2014-12-10T15:20:09.791000Z","edited":"2014-12-20T21:17:50.315000Z","url":"http://swapi.dev/api/people/5/"},{"name":"Owen Lars","height":"178","mass":"120","hair_color":"brown, grey","skin_color":"light","eye_color":"blue","birth_year":"52BBY","gender":"male","homeworld":"http://swapi.dev/api/planets/1/","films":["http://swapi.dev/api/films/1/","http://swapi.dev/api/films/5/","http://swapi.dev/api/films/6/"],"species":[],"vehicles":[],"starships":[],"created":"2014-12-10T15:52:14.024000Z","edited":"2014-12-20T21:17:50.317000Z","url":"http://swapi.dev/api/people/6/"},{"name":"Beru Whitesun lars","height":"165","mass":"75","hair_color":"brown","skin_color":"light","eye_color":"blue","birth_year":"47BBY","gender":"female","homeworld":"http://swapi.dev/api/planets/1/","films":["http://swapi.dev/api/films/1/","http://swapi.dev/api/films/5/","http://swapi.dev/api/films/6/"],"species":[],"vehicles":[],"starships":[],"created":"2014-12-10T15:53:41.121000Z","edited":"2014-12-20T21:17:50.319000Z","url":"http://swapi.dev/api/people/7/"},{"name":"R5-D4","height":"97","mass":"32","hair_color":"n/a","skin_color":"white, red","eye_color":"red","birth_year":"unknown","gender":"n/a","homeworld":"http://swapi.dev/api/planets/1/","films":["http://swapi.dev/api/films/1/"],"species":["http://swapi.dev/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:57:50.959000Z","edited":"2014-12-20T21:17:50.321000Z","url":"http://swapi.dev/api/people/8/"},{"name":"Biggs Darklighter","height":"183","mass":"84","hair_color":"black","skin_color":"light","eye_color":"brown","birth_year":"24BBY","gender":"male","homeworld":"http://swapi.dev/api/planets/1/","films":["http://swapi.dev/api/films/1/"],"species":[],"vehicles":[],"starships":["http://swapi.dev/api/starships/12/"],"created":"2014-12-10T15:59:50.509000Z","edited":"2014-12-20T21:17:50.323000Z","url":"http://swapi.dev/api/people/9/"},{"name":"Obi-Wan Kenobi","height":"182","mass":"77","hair_color":"auburn, white","skin_color":"fair","eye_color":"blue-gray","birth_year":"57BBY","gender":"male","homeworld":"http://swapi.dev/api/planets/20/","films":["http://swapi.dev/api/films/1/","http://swapi.dev/api/films/2/","http://swapi.dev/api/films/3/","http://swapi.dev/api/films/4/","http://swapi.dev/api/films/5/","http://swapi.dev/api/films/6/"],"species":[],"vehicles":["http://swapi.dev/api/vehicles/38/"],"starships":["http://swapi.dev/api/starships/48/","http://swapi.dev/api/starships/59/","http://swapi.dev/api/starships/64/","http://swapi.dev/api/starships/65/","http://swapi.dev/api/starships/74/"],"created":"2014-12-10T16:16:29.192000Z","edited":"2014-12-20T21:17:50.325000Z","url":"http://swapi.dev/api/people/10/"}]}

    cleanUpList(results.results)
    setLoading(false)
    // fetch('https://swapi.dev/api/people/')
    //   .then(result => result.json())
    //   .then(
    //     (jsonResult) => {
    //       setLoading(false)
    //       cleanUpList(jsonResult.results)
    //     },
    //     (error) => {
    //       setLoading(false)
    //       setError(error)
    //     }
    //   )
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