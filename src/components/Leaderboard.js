/*jshint -W033 */


import React, {useState, useEffect} from 'react'

const Leaderboard = props => {
  const [displayList, setDisplayList] = useState([])
  const { userInfo, playerList, setPlayerList, loading } = props

  // useEffect(() => {
  //   formatLeaderboardData(playerList)
  // },[playerList, userInfo.score])

  const formatLeaderboardData = data => {
    const sortedData = data.sort((personA, personB) => {
      personA = parseInt(personA.score)
      personB = parseInt(personB.score)
      return (personA < personB) ? 1 : -1
    })
    return sortedData
  }

  const tableRows = formatLeaderboardData(playerList).map( person => {
    return <tr key={`${person.name}-row`}>
      <td key={person.name}>{person.name}</td>
      <td key={`score${person.name}${person.score}`}>{person.score}</td>
      <td key={`clicks${person.name}${person.clicks}`}>{person.clicks}</td>
    </tr>
  })

  return (<div className='flex-item leaderboard'>
  <p>Leaderboard</p>
  {console.log(playerList)}
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Score</th>
        <th>Clicks</th>
      </tr>
    </thead>
    <tbody>
        { !loading ? tableRows.slice(0,10) : <tr><td>Loading...</td></tr> }
    </tbody>
  </table>
</div>)
}

export default Leaderboard