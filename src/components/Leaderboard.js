import React, {useState, useEffect} from 'react'

const Leaderboard = props => {
  const [leaderBoard, setLeaderboard] = useState([])
  const { userInfo, playerData, loading } = props

  useEffect(() => {
    formatLeaderboardData(playerData)
  },[playerData, userInfo.score])

  const formatLeaderboardData = data => {
    const formattedData = data.map( (person,i) => {
      let clicks = person.mass ? parseInt(person.mass.slice(-1)) : 0
      clicks = (clicks<2) ? clicks+2 : clicks
      return {
        id: i,
        name: person.name,
        score: person.height,
        clicks
      }
    })
    formattedData.push({id: 10, clicks: userInfo.clicks, name: userInfo.name, score: userInfo.score})
    const sortedData = formattedData.sort((personA, personB) => {
      personA = parseInt(personA.score)
      personB = parseInt(personB.score)
      return (personA < personB) ? 1 : -1
    })
    setLeaderboard(sortedData)
  }

  const tableRows = leaderBoard.map( person => {
    return <tr key={`${person.name}-row`}>
      <td key={person.name}>{person.name}</td>
      <td key={`score${person.name}${person.score}`}>{person.score}</td>
      <td key={`clicks${person.name}${person.clicks}`}>{person.clicks}</td>
    </tr>
  })

  return (<div className='flex-item leaderboard'>
  <p>Leaderboard</p>
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