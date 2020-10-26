import React from 'react'

const Leaderboard = props => {
  const { playerList, loading } = props

  const formatLeaderboardData = data => {
    const sortedData = data.sort((personA, personB) => {
      personA = parseInt(personA.score)
      personB = parseInt(personB.score)
      return (personA < personB) ? 1 : -1
    })
    return sortedData
  }

  const tableRows = formatLeaderboardData(playerList).map( person => {
    return <tr key={`${person.name}row${person.id}`} className={`player${person.id}`}>
      <td key={`${person.name}${person.id}`}>{person.name}</td>
      <td key={`score${person.name}${person.id}`}>{person.score}</td>
      <td key={`clicks${person.name}${person.id}`}>{person.clicks}</td>
    </tr>
  })

  return (
    <div className='flex-item leaderboard'>
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