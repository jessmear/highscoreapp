import React, {useState, useEffect} from 'react';
import './styles/app.scss';

const getRandom = (max=100, min=0) => {
  return Math.floor(Math.random()*((max+1)-min)+min)
}

const HighScoreApp = () => {
  // Default Game Settings
  const maxRounds = 10;

  // Game State
  const [userScore, setUserScore] = useState(0)
  const [points, setPoints] = useState([])
  const [clickCount, setClickCount] = useState(0)
  const [buttonDisabled, toggleButtonDisabled] = useState(false)
  const [name, setName] = useState('PlayerOne')
  const [userMessage, setUserMessage] = useState('')
  
  const handlePlayButton = () => {
    const currentPoints = [...points, getRandom(100,-100)]
    setUserScore(currentPoints.reduce((total, num) => { return total + num; })
    )
    setPoints(currentPoints)
    const count = clickCount+1
    setClickCount(count)
    if(count>=maxRounds) { toggleButtonDisabled(true) }
  }

  const handleInput = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = () => {
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: name,
        score: userScore,
        clicks: clickCount
      })
    }
    // fetch('placeholder.com/placeholder', data)
    //  .then(response => response.json())
    //. .then( )
    console.log(`Name: ${name}`)
    console.log(`Click Count: ${clickCount}`)
    console.log(`User Score: ${userScore}`)
    console.log(`Points: ${points}`)
    handleReset()
  }

  const handleReset = () => {
    console.log('reset')
    setUserScore(0)
    setPoints([])
    setClickCount(0)
    toggleButtonDisabled(false)
  }

  const pointsList = points.map( point => {
      return (<li>{point}</li>)
  })

  console.log()
  
  return (
    <div id='star-wars'>
      <div className='titleBox'><h1 className='title'>High Score App</h1></div>

      <div className='flex-container wrap'>

        <div className='flex-fullrow-item'>
          <div className='instructions'>
            <h3 className='header'>Goal: Get the highest score you can in ten or fewer clicks.</h3>
            <p>How to Play:</p>
            <ul>
              <li>Add your name.</li>
              <li>Click the 'Try Your Luck' button.</li>
              <li>Each time you click, your score will be modified by a randomly generated number.</li>
              <li>When you are happy with your score, or out of chances, submit your name and score.</li>
            </ul>
            <label>Name</label>
            <input type='text' value={name} onChange={handleInput} />
          </div>
        </div>
      
        <div className='flex-item game-container'>
          <div className="game">
            <h2>Welcome {name}!</h2>
            <p>Score: </p><span className={`info user-score-${userScore}`}>{userScore}</span>
            <p>Clicks Remaining: </p><span className={`info clicks-remaining-${maxRounds-clickCount}`}>{maxRounds-clickCount} out of {maxRounds}</span>
            <button className='play' onClick={handlePlayButton} disabled={buttonDisabled}>
              {`${buttonDisabled ? 'Round Over' : 'Try Your Luck'}`}
            </button>
            <button className='reset' onClick={handleReset} disabled={buttonDisabled}>
              Start Over
            </button>
            <button className='submit' onClick={handleSubmit}>Send it!</button>
          </div>
          <div className='current-round'>
            <p>Points This Round</p>
            <ul>{pointsList}</ul>
          </div>
        </div> 

        <div className='flex-item leaderboard'>
          <p>Leaderboard</p>
        </div>

      </div>
    </div>
  )
}

export default HighScoreApp